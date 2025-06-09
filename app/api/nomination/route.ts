import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { uploadFile, uploadMultipleFiles } from "@/lib/file-upload"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    // Extract basic form data
    const awardTitle = formData.get("awardTitle") as string
    const awardId = formData.get("awardId") as string
    const fullName = formData.get("fullName") as string
    const dateOfBirth = new Date(formData.get("dateOfBirth") as string)
    const gender = formData.get("gender") as string
    const contactNumber = formData.get("contactNumber") as string
    const email = formData.get("email") as string
    const cityArea = formData.get("cityArea") as string
    const organization = (formData.get("organization") as string) || null
    const designation = formData.get("designation") as string
    const agreeToTerms = formData.get("agreeToTerms") === "true"

    // Social media fields
    const instagramHandle = (formData.get("instagramHandle") as string) || null
    const facebookPage = (formData.get("facebookPage") as string) || null
    const youtubeWebsite = (formData.get("youtubeWebsite") as string) || null
    const mediaMentions = (formData.get("mediaMentions") as string) || null

    // Handle profile photo upload
    const profilePhoto = formData.get("profilePhoto") as File
    if (!profilePhoto) {
      return NextResponse.json({ success: false, error: "Profile photo is required" }, { status: 400 })
    }

    const profilePhotoUrl = await uploadFile(profilePhoto, "profiles")

    // Collect category-specific data and files
    const categoryData: Record<string, any> = {}
    const fileFields: Record<string, File[]> = {}

    // Process all form entries
    for (const [key, value] of formData.entries()) {
      if (
        key === "profilePhoto" ||
        [
          "awardTitle",
          "awardId",
          "fullName",
          "dateOfBirth",
          "gender",
          "contactNumber",
          "email",
          "cityArea",
          "organization",
          "designation",
          "agreeToTerms",
          "instagramHandle",
          "facebookPage",
          "youtubeWebsite",
          "mediaMentions",
        ].includes(key)
      ) {
        continue // Skip already processed fields
      }

      if (value instanceof File) {
        if (!fileFields[key]) {
          fileFields[key] = []
        }
        fileFields[key].push(value)
      } else {
        categoryData[key] = value
      }
    }

    // Create the nomination record
    const nomination = await prisma.nomination.create({
      data: {
        awardTitle,
        awardId,
        fullName,
        dateOfBirth,
        gender,
        contactNumber,
        email,
        cityArea,
        organization,
        designation,
        profilePhotoUrl,
        categoryData,
        instagramHandle,
        facebookPage,
        youtubeWebsite,
        mediaMentions,
        agreeToTerms,
      },
    })

    // Handle file uploads for category-specific fields
    const fileAttachments = []
    for (const [fieldName, files] of Object.entries(fileFields)) {
      const uploadedUrls = await uploadMultipleFiles(files, `nominations/${nomination.id}`)

      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        const fileUrl = uploadedUrls[i]

        fileAttachments.push({
          nominationId: nomination.id,
          fileName: `${Date.now()}-${file.name}`,
          originalName: file.name,
          fileUrl,
          fileType: file.type,
          fileSize: file.size,
          fieldName,
        })
      }
    }

    // Create file attachment records
    if (fileAttachments.length > 0) {
      await prisma.fileAttachment.createMany({
        data: fileAttachments,
      })
    }

    // TODO: Send confirmation email here
    // await sendConfirmationEmail(email, fullName, awardTitle)

    return NextResponse.json({
      success: true,
      nominationId: nomination.id,
      message: "Nomination submitted successfully",
    })
  } catch (error) {
    console.error("Nomination submission error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to submit nomination",
      },
      { status: 500 },
    )
  }
}

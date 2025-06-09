import { type NextRequest, NextResponse } from "next/server"
import { writeFile, mkdir } from "fs/promises"
import { existsSync } from "fs"
import { join } from "path"
import { z } from "zod"
import { prisma } from "@/lib/prisma"

// Validation schema
const nominationSchema = z.object({
  awardTitle: z.string().min(1),
  awardId: z.string().min(1),
  fullName: z.string().min(1),
  dateOfBirth: z.string().min(1),
  gender: z.string().min(1),
  contactNumber: z.string().min(1),
  email: z.string().email(),
  cityArea: z.string().min(1),
  organization: z.string().optional(),
  designation: z.string().min(1),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
})

// Helper function to ensure upload directory exists
async function ensureUploadDir(dirPath: string) {
  if (!existsSync(dirPath)) {
    await mkdir(dirPath, { recursive: true })
  }
}

// Helper function to generate unique filename
function generateUniqueFilename(originalName: string): string {
  const timestamp = Date.now()
  const randomString = Math.random().toString(36).substring(2, 15)
  const extension = originalName.split(".").pop()
  const nameWithoutExt = originalName.replace(/\.[^/.]+$/, "")
  return `${timestamp}-${randomString}-${nameWithoutExt}.${extension}`
}

// Helper function to save file locally
async function saveFileLocally(file: File, subfolder: string): Promise<string> {
  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  // Create upload path
  const uploadDir = join(process.cwd(), "public", "uploads", subfolder)
  await ensureUploadDir(uploadDir)

  // Generate unique filename
  const filename = generateUniqueFilename(file.name)
  const filepath = join(uploadDir, filename)

  // Write file
  await writeFile(filepath, buffer)

  // Return public URL path
  return `/uploads/${subfolder}/${filename}`
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    // Extract basic form data
    const data: Record<string, any> = {}
    const files: Record<string, File[]> = {}

    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        if (!files[key]) files[key] = []
        files[key].push(value)
      } else {
        // Handle boolean conversion for checkboxes
        if (key === "agreeToTerms") {
          data[key] = value === "true" || value === "on"
        } else {
          data[key] = value
        }
      }
    }

    // Validate required fields
    const validatedData = nominationSchema.parse(data)

    // Create nomination ID for file organization
    const nominationTimestamp = Date.now()
    const nominationFolder = `nomination-${nominationTimestamp}`

    // Upload files to local storage
    const uploadedFiles: Record<string, string[]> = {}

    for (const [fieldName, fileList] of Object.entries(files)) {
      uploadedFiles[fieldName] = []

      for (const file of fileList) {
        try {
          const filePath = await saveFileLocally(file, nominationFolder)
          uploadedFiles[fieldName].push(filePath)
        } catch (error) {
          console.error(`Error uploading file ${file.name}:`, error)
          throw new Error(`Failed to upload file: ${file.name}`)
        }
      }
    }

    // Save to database
    const nomination = await prisma.nomination.create({
      data: {
        awardTitle: validatedData.awardTitle,
        awardId: validatedData.awardId,
        fullName: validatedData.fullName,
        dateOfBirth: new Date(validatedData.dateOfBirth),
        gender: validatedData.gender,
        contactNumber: validatedData.contactNumber,
        email: validatedData.email,
        cityArea: validatedData.cityArea,
        organization: data.organization || null,
        designation: validatedData.designation,

        // Category-specific fields (stored as JSON)
        professionalData: {
          yearsExperience: data.yearsExperience,
          certificationsList: data.certificationsList,
          transformationStories: data.transformationStories,
          communityInitiatives: data.communityInitiatives,
          clientTestimonials: data.clientTestimonials,
          educationalQualifications: data.educationalQualifications,
          yearsPractice: data.yearsPractice,
          nutritionPhilosophy: data.nutritionPhilosophy,
          publicOutreach: data.publicOutreach,
          yogaLineage: data.yogaLineage,
          yearsTeaching: data.yearsTeaching,
          yogaCertifications: data.yogaCertifications,
          teachingLocations: data.teachingLocations,
          studentTestimonials: data.studentTestimonials,
          therapeuticContributions: data.therapeuticContributions,
          classTypes: data.classTypes,
          certifications: data.certifications,
          yearsGroupExperience: data.yearsGroupExperience,
          classStyle: data.classStyle,
          testimonials: data.testimonials,
          eventParticipation: data.eventParticipation,
        },

        // Social media fields
        socialMediaData: {
          instagramHandle: data.instagramHandle,
          facebookPage: data.facebookPage,
          youtubeWebsite: data.youtubeWebsite,
          mediaMentions: data.mediaMentions,
        },

        // File URLs (local paths)
        uploadedFiles: uploadedFiles,

        status: "PENDING",
      },
    })

    return NextResponse.json({
      success: true,
      message: "Nomination submitted successfully",
      nominationId: nomination.id,
    })
  } catch (error) {
    console.error("Nomination submission error:", error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation error",
          errors: error.errors,
        },
        { status: 400 },
      )
    }

    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Internal server error",
      },
      { status: 500 },
    )
  }
}

// GET endpoint to retrieve nominations (admin use)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const awardId = searchParams.get("awardId")
    const status = searchParams.get("status")
    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "10")

    const where: any = {}
    if (awardId) where.awardId = awardId
    if (status) where.status = status

    const nominations = await prisma.nomination.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * limit,
      take: limit,
      select: {
        id: true,
        fullName: true,
        email: true,
        awardTitle: true,
        awardId: true,
        status: true,
        createdAt: true,
        cityArea: true,
        organization: true,
        uploadedFiles: true,
      },
    })

    const total = await prisma.nomination.count({ where })

    return NextResponse.json({
      success: true,
      data: nominations,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error("Error fetching nominations:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch nominations",
      },
      { status: 500 },
    )
  }
}

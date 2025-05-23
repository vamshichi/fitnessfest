import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { verifyJwt } from "@/lib/jwt"
import { cookies } from "next/headers"

// Helper function to verify admin authentication
async function verifyAdmin() {
  const cookieStore = await cookies()
  const token = cookieStore.get("auth_token")?.value

  if (!token) {
    return false
  }

  const payload = await verifyJwt(token)
  return payload && payload.role === "admin"
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    // Verify admin authentication
    const isAdmin = await verifyAdmin()
    if (!isAdmin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { id } = await params

    // Update the contact (add a resolved field)
    // Note: You might need to add a 'resolved' field to your schema
    // For now, we'll just update the updatedAt timestamp
    await prisma.contactSubmission.update({
      where: { id },
      data: {
        updatedAt: new Date(),
        // If you have a resolved field in your schema, uncomment this:
        // resolved: true,
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error marking contact as resolved:", error)
    return NextResponse.json({ error: "Failed to update contact" }, { status: 500 })
  }
}

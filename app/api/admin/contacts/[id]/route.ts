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

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    // Verify admin authentication
    const isAdmin = await verifyAdmin()
    if (!isAdmin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { id } = await params

    // Delete the contact
    await prisma.contactSubmission.delete({
      where: { id },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting contact:", error)
    return NextResponse.json({ error: "Failed to delete contact" }, { status: 500 })
  }
}

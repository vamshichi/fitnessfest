import { type NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Process form submission (same logic as in the server action)
    const contact = await prisma.contact.create({
      data: {
        type: data.type || "general",
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        additionalData: JSON.stringify(data.additionalData || {}),
        createdAt: new Date(),
      },
    })

    // Send email notification (simplified version)
    // In a real app, you would use the same email sending logic as in the server action

    return NextResponse.json({ success: true, id: contact.id })
  } catch (error) {
    console.error("Error in contact API:", error)
    return NextResponse.json({ error: "Failed to process contact form" }, { status: 500 })
  }
}

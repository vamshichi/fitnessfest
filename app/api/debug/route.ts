import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { hash } from "bcrypt"

export async function GET() {
  try {
    // Check if the admin user exists
    const adminUser = await prisma.user.findUnique({
      where: {
        email: "admin@fitnessfest.com",
      },
    })

    if (!adminUser) {
      // Create the admin user if it doesn't exist
      const password = await hash("admin123", 10)

      const newUser = await prisma.user.create({
        data: {
          name: "Admin User",
          email: "admin@fitnessfest.com",
          password,
          role: "admin",
        },
      })

      return NextResponse.json({
        message: "Admin user created successfully",
        user: {
          id: newUser.id,
          email: newUser.email,
          name: newUser.name,
          role: newUser.role,
        },
      })
    }

    return NextResponse.json({
      message: "Admin user already exists",
      user: {
        id: adminUser.id,
        email: adminUser.email,
        name: adminUser.name,
        role: adminUser.role,
      },
    })
  } catch (error) {
    console.error("Debug route error:", error)
    return NextResponse.json({ error: "Failed to check/create admin user", details: error }, { status: 500 })
  }
}

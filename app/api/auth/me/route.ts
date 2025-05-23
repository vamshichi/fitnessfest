import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"
import { verifyJwt } from "@/lib/jwt"
import prisma from "@/lib/prisma"

export async function GET(request: NextRequest) {
  try {
    // Get the token from cookies
    const cookieStore = await cookies()
    const token = cookieStore.get("auth_token")?.value

    if (!token) {
      return NextResponse.json({ user: null }, { status: 401 })
    }

    // Verify the token
    const payload = await verifyJwt(token)

    if (!payload || !payload.id) {
      return NextResponse.json({ user: null }, { status: 401 })
    }

    // Get the user from the database
    const user = await prisma.user.findUnique({
      where: { id: payload.id as string },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
      },
    })

    if (!user) {
      return NextResponse.json({ user: null }, { status: 401 })
    }

    return NextResponse.json({ user })
  } catch (error) {
    console.error("Error getting current user:", error)
    return NextResponse.json({ error: "An error occurred while getting the current user" }, { status: 500 })
  }
}

import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET || "your-jwt-secret" // Fallback for safety

export async function signJwt(payload: any): Promise<string> {
  try {
    const token = jwt.sign(payload, JWT_SECRET, {
      expiresIn: "24h", // Token expires in 24 hours
    })
    return token
  } catch (error) {
    console.error("JWT signing error:", error)
    throw new Error("Failed to sign JWT token")
  }
}

export async function verifyJwt(token: string): Promise<any> {
  try {
    const payload = jwt.verify(token, JWT_SECRET)
    return payload
  } catch (error) {
    console.error("JWT verification error:", error)
    return null
  }
}

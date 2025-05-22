"use server"

import prisma from "@/lib/prisma"
import type { VoterInfo } from "@/components/voting-card"

export async function submitVote(voterInfo: VoterInfo, nomineeName: string, categoryName: string) {
  try {
    // Validate required fields
    if (!voterInfo.name || !voterInfo.email || !voterInfo.phone || !voterInfo.nomineeId || !voterInfo.categoryId) {
      console.error("Missing required fields in vote submission")
      return {
        success: false,
        error: "Missing required voter information. Please fill out all required fields.",
      }
    }

    // Log the data being saved
    console.log("Saving award vote:", {
      voter: voterInfo.name,
      nominee: nomineeName,
      category: categoryName,
    })

    // Save vote to database
    const result = await prisma.awardVote.create({
      data: {
        voterName: voterInfo.name,
        voterEmail: voterInfo.email,
        voterPhone: voterInfo.phone,
        nomineeId: voterInfo.nomineeId,
        nomineeName: nomineeName,
        categoryId: voterInfo.categoryId,
        categoryName: categoryName,
      },
    })

    console.log("Award vote saved successfully with ID:", result.id)
    return { success: true, id: result.id }
  } catch (error) {
    console.error("Error submitting vote:", error)
    return {
      success: false,
      error: "Failed to record vote. Please try again later.",
    }
  }
}

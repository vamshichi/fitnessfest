"use server"

import prisma from "@/lib/prisma"
import type { VoterInfo } from "@/components/voting-card"

export async function submitVote(voterInfo: VoterInfo, nomineeName: string, categoryName: string) {
  try {
    // Save vote to database
    await prisma.awardVote.create({
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

    return { success: true }
  } catch (error) {
    console.error("Error submitting vote:", error)
    return {
      success: false,
      error: "Failed to record vote. Please try again later.",
    }
  }
}

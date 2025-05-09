"use server"

import { PrismaClient } from "@prisma/client"
import { revalidatePath } from "next/cache"

const prisma = new PrismaClient()

export async function updateContactStatus(id: string, status: string) {
  try {
    await prisma.contact.update({
      where: { id },
      data: { status },
    })

    revalidatePath("/admin/contacts")
    revalidatePath(`/admin/contacts/${id}`)

    return { success: true }
  } catch (error) {
    console.error("Failed to update contact status:", error)
    return { success: false, error: "Failed to update status" }
  }
}

export async function addContactNote(id: string, note: string) {
  try {
    const contact = await prisma.contact.findUnique({
      where: { id },
    })

    if (!contact) {
      return { success: false, error: "Contact not found" }
    }

    const updatedNotes = contact.notes
      ? `${contact.notes}\n\n${new Date().toISOString()}: ${note}`
      : `${new Date().toISOString()}: ${note}`

    await prisma.contact.update({
      where: { id },
      data: { notes: updatedNotes },
    })

    revalidatePath(`/admin/contacts/${id}`)

    return { success: true }
  } catch (error) {
    console.error("Failed to add contact note:", error)
    return { success: false, error: "Failed to add note" }
  }
}

export async function assignContact(id: string, assignedTo: string) {
  try {
    await prisma.contact.update({
      where: { id },
      data: { assignedTo },
    })

    revalidatePath("/admin/contacts")
    revalidatePath(`/admin/contacts/${id}`)

    return { success: true }
  } catch (error) {
    console.error("Failed to assign contact:", error)
    return { success: false, error: "Failed to assign contact" }
  }
}

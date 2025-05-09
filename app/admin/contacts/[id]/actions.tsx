// app/admin/contacts/ContactActions.tsx
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { updateContactStatus, addContactNote, assignContact } from "../actions"
import { useToast } from "@/hooks/use-toast"
import { Contact } from "@/types/contact" // <-- Import the type

type Props = {
  contact: Contact
}

export function ContactActions({ contact }: Props) {
  const router = useRouter()
  const { toast } = useToast()
  const [note, setNote] = useState("")
  const [isSubmittingNote, setIsSubmittingNote] = useState(false)
  const [isUpdatingStatus, setIsUpdatingStatus] = useState(false)
  const [isAssigning, setIsAssigning] = useState(false)
  const [assignee, setAssignee] = useState(contact.assignedTo || "")

  async function handleStatusChange(newStatus: Contact["status"]) {
    setIsUpdatingStatus(true)
    try {
      const result = await updateContactStatus(contact.id, newStatus)
      if (result.success) {
        toast({
          title: "Status updated",
          description: `Contact status changed to ${newStatus}`,
        })
        router.refresh()
      } else {
        throw new Error(result.error || "Failed to update status")
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      })
    } finally {
      setIsUpdatingStatus(false)
    }
  }

  async function handleAddNote(e: React.FormEvent) {
    e.preventDefault()
    if (!note.trim()) return

    setIsSubmittingNote(true)
    try {
      const result = await addContactNote(contact.id, note)
      if (result.success) {
        toast({
          title: "Note added",
          description: "Your note has been added to this contact",
        })
        setNote("")
        router.refresh()
      } else {
        throw new Error(result.error || "Failed to add note")
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      })
    } finally {
      setIsSubmittingNote(false)
    }
  }

  async function handleAssign() {
    if (!assignee.trim()) return

    setIsAssigning(true)
    try {
      const result = await assignContact(contact.id, assignee)
      if (result.success) {
        toast({
          title: "Contact assigned",
          description: `Contact assigned to ${assignee}`,
        })
        router.refresh()
      } else {
        throw new Error(result.error || "Failed to assign contact")
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      })
    } finally {
      setIsAssigning(false)
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Update Status</CardTitle>
        </CardHeader>
        <CardContent>
          <Select
            defaultValue={contact.status}
            onValueChange={handleStatusChange}
            disabled={isUpdatingStatus}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Assign Contact</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Select
              value={assignee}
              onValueChange={setAssignee}
              disabled={isAssigning}
            >
              <SelectTrigger className="flex-1">
                <SelectValue placeholder="Assign to..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Vamshi">Vamshi</SelectItem>
                <SelectItem value="Sales Team">Sales Team</SelectItem>
                <SelectItem value="Support Team">Support Team</SelectItem>
                <SelectItem value="Marketing Team">Marketing Team</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={handleAssign} disabled={isAssigning || !assignee}>
              {isAssigning ? "Assigning..." : "Assign"}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Add Note</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAddNote}>
            <Textarea
              placeholder="Add a note about this contact..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={4}
              className="mb-4"
            />
            <Button type="submit" disabled={isSubmittingNote || !note.trim()}>
              {isSubmittingNote ? "Adding..." : "Add Note"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

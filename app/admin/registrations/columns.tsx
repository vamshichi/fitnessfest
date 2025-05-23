"use client"

import type { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal, ArrowUpDown, Trash, Eye, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { formatDistanceToNow } from "date-fns"
import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { toast } from "@/components/ui/use-toast"

export type Registration = {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  dateOfBirth: string
  competition: string
  experienceLevel: string
  emergencyContactName: string
  emergencyContactPhone: string
  termsAccepted: boolean
  createdAt: Date
  updatedAt: Date
}

export const columns: ColumnDef<Registration>[] = [
  {
    accessorKey: "fullName",
    id: "fullName",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    accessorFn: (row) => `${row.firstName} ${row.lastName}`,
  },
  {
    accessorKey: "email",
    id: "email",
    header: "Email",
  },
  {
    accessorKey: "competition",
    id: "competition",
    header: "Competition",
    cell: ({ row }) => {
      const competition = row.getValue("competition") as string
      return <div className="max-w-[200px] truncate">{competition}</div>
    },
  },
  {
    accessorKey: "experienceLevel",
    id: "experienceLevel",
    header: "Experience",
    cell: ({ row }) => {
      const level = row.getValue("experienceLevel") as string
      let color = ""

      switch (level) {
        case "beginner":
          color = "bg-green-100 text-green-800"
          break
        case "intermediate":
          color = "bg-blue-100 text-blue-800"
          break
        case "advanced":
          color = "bg-purple-100 text-purple-800"
          break
        case "elite":
          color = "bg-red-100 text-red-800"
          break
        default:
          color = "bg-gray-100 text-gray-800"
      }

      return <Badge className={color}>{level}</Badge>
    },
  },
  {
    accessorKey: "createdAt",
    id: "createdAt",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt"))
      return <div>{formatDistanceToNow(date, { addSuffix: true })}</div>
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const registration = row.original
      const [showDetails, setShowDetails] = useState(false)

      // Function to handle registration deletion
      const handleDelete = async () => {
        if (confirm("Are you sure you want to delete this registration?")) {
          try {
            const response = await fetch(`/api/admin/registrations/${registration.id}`, {
              method: "DELETE",
            })

            if (response.ok) {
              toast({
                title: "Registration deleted",
                description: "The registration has been successfully deleted.",
              })

              // Refresh the page to update the table
              window.location.reload()
            } else {
              throw new Error("Failed to delete registration")
            }
          } catch (error) {
            toast({
              title: "Error",
              description: "Failed to delete the registration. Please try again.",
              variant: "destructive",
            })
          }
        }
      }

      // Function to send confirmation email
      const sendConfirmation = () => {
        window.open(
          `mailto:${registration.email}?subject=Registration Confirmation - ${registration.competition}`,
          "_blank",
        )
      }

      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => navigator.clipboard.writeText(registration.id)}>
                Copy ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setShowDetails(true)}>
                <Eye className="mr-2 h-4 w-4" />
                View details
              </DropdownMenuItem>
              <DropdownMenuItem onClick={sendConfirmation}>
                <Mail className="mr-2 h-4 w-4" />
                Send confirmation
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleDelete} className="text-red-600">
                <Trash className="mr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Registration Details Dialog */}
          <Dialog open={showDetails} onOpenChange={setShowDetails}>
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle>Registration Details</DialogTitle>
                <DialogDescription>
                  Registered {formatDistanceToNow(new Date(registration.createdAt), { addSuffix: true })}
                </DialogDescription>
              </DialogHeader>

              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <div className="font-medium">Name:</div>
                  <div className="col-span-3">
                    {registration.firstName} {registration.lastName}
                  </div>
                </div>

                <div className="grid grid-cols-4 items-center gap-4">
                  <div className="font-medium">Email:</div>
                  <div className="col-span-3">
                    <a href={`mailto:${registration.email}`} className="text-blue-600 hover:underline">
                      {registration.email}
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-4 items-center gap-4">
                  <div className="font-medium">Phone:</div>
                  <div className="col-span-3">{registration.phone}</div>
                </div>

                <div className="grid grid-cols-4 items-center gap-4">
                  <div className="font-medium">Date of Birth:</div>
                  <div className="col-span-3">{registration.dateOfBirth}</div>
                </div>

                <div className="grid grid-cols-4 items-center gap-4">
                  <div className="font-medium">Competition:</div>
                  <div className="col-span-3">{registration.competition}</div>
                </div>

                <div className="grid grid-cols-4 items-center gap-4">
                  <div className="font-medium">Experience Level:</div>
                  <div className="col-span-3">
                    <Badge
                      className={
                        registration.experienceLevel === "beginner"
                          ? "bg-green-100 text-green-800"
                          : registration.experienceLevel === "intermediate"
                            ? "bg-blue-100 text-blue-800"
                            : registration.experienceLevel === "advanced"
                              ? "bg-purple-100 text-purple-800"
                              : registration.experienceLevel === "elite"
                                ? "bg-red-100 text-red-800"
                                : "bg-gray-100 text-gray-800"
                      }
                    >
                      {registration.experienceLevel}
                    </Badge>
                  </div>
                </div>

                <div className="grid grid-cols-4 items-center gap-4">
                  <div className="font-medium">Emergency Contact:</div>
                  <div className="col-span-3">{registration.emergencyContactName}</div>
                </div>

                <div className="grid grid-cols-4 items-center gap-4">
                  <div className="font-medium">Emergency Phone:</div>
                  <div className="col-span-3">{registration.emergencyContactPhone}</div>
                </div>

                <div className="grid grid-cols-4 items-center gap-4">
                  <div className="font-medium">Terms Accepted:</div>
                  <div className="col-span-3">
                    <Badge
                      className={registration.termsAccepted ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}
                    >
                      {registration.termsAccepted ? "Yes" : "No"}
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-4">
                <Button variant="outline" onClick={() => setShowDetails(false)}>
                  Close
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={sendConfirmation}>
                    <Mail className="mr-2 h-4 w-4" />
                    Send Confirmation
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </>
      )
    },
  },
]

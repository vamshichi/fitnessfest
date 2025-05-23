"use client"

import type { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal, ArrowUpDown, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { formatDistanceToNow } from "date-fns"
import { toast } from "@/components/ui/use-toast"

export type Vote = {
  id: string
  voterName: string
  voterEmail: string
  voterPhone: string
  nomineeId: string
  nomineeName: string
  categoryId: string
  categoryName: string
  createdAt: Date
  updatedAt: Date
}

export const columns: ColumnDef<Vote>[] = [
  {
    accessorKey: "voterName",
    id: "voterName",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Voter
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "voterEmail",
    id: "voterEmail",
    header: "Email",
  },
  {
    accessorKey: "categoryName",
    id: "categoryName",
    header: "Category",
  },
  {
    accessorKey: "nomineeName",
    id: "nomineeName",
    header: "Nominee",
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
      const vote = row.original

      // Function to handle vote deletion
      const handleDelete = async () => {
        if (confirm("Are you sure you want to delete this vote?")) {
          try {
            const response = await fetch(`/api/admin/votes/${vote.id}`, {
              method: "DELETE",
            })

            if (response.ok) {
              toast({
                title: "Vote deleted",
                description: "The vote has been successfully deleted.",
              })

              // Refresh the page to update the table
              window.location.reload()
            } else {
              throw new Error("Failed to delete vote")
            }
          } catch (error) {
            toast({
              title: "Error",
              description: "Failed to delete the vote. Please try again.",
              variant: "destructive",
            })
          }
        }
      }

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(vote.id)}>Copy ID</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(vote.voterEmail)}>
              Copy Email
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleDelete} className="text-red-600">
              <Trash className="mr-2 h-4 w-4" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

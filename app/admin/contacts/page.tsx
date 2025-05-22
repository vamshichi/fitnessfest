import prisma from "@/lib/prisma"
import { DataTable } from "@/components/admin/data-table"
import { columns } from "./columns"

export default async function ContactsPage() {
  try {
    const contacts = await prisma.contactSubmission.findMany({
      orderBy: {
        createdAt: "desc",
      },
    })

    console.log(`Fetched ${contacts.length} contact submissions`)

    return (
      <div>
        <h1 className="text-3xl font-bold mb-8">Contact Submissions</h1>
        {contacts.length === 0 ? (
          <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-3 rounded">
            No contact submissions found. When users submit the contact form, their submissions will appear here.
          </div>
        ) : (
          <DataTable columns={columns} data={contacts} filterColumn="name" />
        )}
      </div>
    )
  } catch (error) {
    console.error("Error fetching contacts:", error)
    return (
      <div>
        <h1 className="text-3xl font-bold mb-8">Contact Submissions</h1>
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          Error loading contact submissions. Please check the database connection.
        </div>
      </div>
    )
  }
}

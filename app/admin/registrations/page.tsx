import prisma from "@/lib/prisma"
import { DataTable } from "@/components/admin/data-table"
import { columns } from "./columns"

export default async function RegistrationsPage() {
  try {
    const registrations = await prisma.competitionRegistration.findMany({
      orderBy: {
        createdAt: "desc",
      },
    })

    console.log(`Fetched ${registrations.length} competition registrations`)

    return (
      <div>
        <h1 className="text-3xl font-bold mb-8">Competition Registrations</h1>
        {registrations.length === 0 ? (
          <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-3 rounded">
            No competition registrations found. When users register for competitions, their registrations will appear
            here.
          </div>
        ) : (
          <DataTable columns={columns} data={registrations} filterColumn="fullName" />
        )}
      </div>
    )
  } catch (error) {
    console.error("Error fetching registrations:", error)
    return (
      <div>
        <h1 className="text-3xl font-bold mb-8">Competition Registrations</h1>
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          Error loading competition registrations. Please check the database connection.
        </div>
      </div>
    )
  }
}

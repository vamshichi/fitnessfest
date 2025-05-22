import prisma from "@/lib/prisma"
import { DataTable } from "@/components/admin/data-table"
import { columns } from "./columns"
import { unstable_noStore as noStore } from "next/cache"

export default async function RegistrationsPage() {
  // Prevent caching of this page
  noStore()

  try {
    // Log the fetch attempt
    console.log("Fetching competition registrations from database...")

    const registrations = await prisma.competitionRegistration.findMany({
      orderBy: {
        createdAt: "desc",
      },
    })

    console.log(`Successfully fetched ${registrations.length} competition registrations`)

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
          Error loading competition registrations: {error instanceof Error ? error.message : String(error)}
        </div>
        <div className="mt-4 p-4 bg-gray-50 rounded-md">
          <h2 className="text-lg font-semibold mb-2">Troubleshooting Steps:</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Check your database connection string in the environment variables</li>
            <li>Verify that your database is running and accessible</li>
            <li>Check the server logs for more detailed error information</li>
            <li>
              Try the debug endpoint at <code>/api/debug/db-status</code> to test database connectivity
            </li>
          </ol>
        </div>
      </div>
    )
  }
}

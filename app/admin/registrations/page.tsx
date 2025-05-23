import { unstable_noStore as noStore } from "next/cache"
import prisma from "@/lib/prisma"
import { columns } from "./columns"
import { DataTable } from "@/components/admin/data-table"

export default async function RegistrationsPage() {
  // Prevent caching
  noStore()

  try {
    const registrations = await prisma.competitionRegistration.findMany({
      orderBy: {
        createdAt: "desc",
      },
    })

    return (
      <div className="container mx-auto py-10">
        <h1 className="text-2xl font-bold mb-6">Competition Registrations</h1>
        {registrations.length === 0 ? (
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-500">No registrations found.</p>
          </div>
        ) : (
          <DataTable columns={columns} data={registrations} filterColumn="fullName" />
        )}
      </div>
    )
  } catch (error) {
    console.error("Error fetching registrations:", error)
    return (
      <div className="container mx-auto py-10">
        <h1 className="text-2xl font-bold mb-6">Competition Registrations</h1>
        <div className="bg-red-50 p-6 rounded-lg shadow border border-red-200">
          <h2 className="text-red-600 font-semibold mb-2">Error loading registrations</h2>
          <p className="text-gray-700 mb-4">
            There was a problem connecting to the database. Please try again later or contact support.
          </p>
          <details className="text-sm text-gray-500">
            <summary>Technical details</summary>
            <pre className="mt-2 p-2 bg-gray-100 rounded overflow-x-auto">
              {error instanceof Error ? error.message : "Unknown error"}
            </pre>
          </details>
        </div>
      </div>
    )
  }
}

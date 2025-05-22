import prisma from "@/lib/prisma"
import { DataTable } from "@/components/admin/data-table"
import { columns } from "./columns"

export default async function VotesPage() {
  const votes = await prisma.awardVote.findMany({
    orderBy: {
      createdAt: "desc",
    },
  })

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Award Votes</h1>

      <DataTable columns={columns} data={votes} filterColumn="voterName" />
    </div>
  )
}

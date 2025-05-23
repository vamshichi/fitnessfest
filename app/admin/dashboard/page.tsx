import { unstable_noStore as noStore } from "next/cache"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import prisma from "@/lib/prisma"

export default async function DashboardPage() {
  // Prevent caching
  noStore()

  try {
    // Get counts
    const contactCount = await prisma.contactSubmission.count()
    const registrationCount = await prisma.competitionRegistration.count()
    const voteCount = await prisma.awardVote.count()

    // Get recent contacts
    const recentContacts = await prisma.contactSubmission.findMany({
      take: 5,
      orderBy: {
        createdAt: "desc",
      },
    })

    // Get recent registrations
    const recentRegistrations = await prisma.competitionRegistration.findMany({
      take: 5,
      orderBy: {
        createdAt: "desc",
      },
    })

    // Get recent votes
    const recentVotes = await prisma.awardVote.findMany({
      take: 5,
      orderBy: {
        createdAt: "desc",
      },
    })

    return (
      <div className="flex-1 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Contacts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{contactCount}</div>
                  <p className="text-xs text-muted-foreground">
                    <Link href="/admin/contacts" className="text-blue-500 hover:underline">
                      View all contacts
                    </Link>
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Competition Registrations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{registrationCount}</div>
                  <p className="text-xs text-muted-foreground">
                    <Link href="/admin/registrations" className="text-blue-500 hover:underline">
                      View all registrations
                    </Link>
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Award Votes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{voteCount}</div>
                  <p className="text-xs text-muted-foreground">
                    <Link href="/admin/votes" className="text-blue-500 hover:underline">
                      View all votes
                    </Link>
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Recent Contacts</CardTitle>
                  <CardDescription>Showing the {recentContacts.length} most recent contact submissions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentContacts.length === 0 ? (
                      <p className="text-sm text-gray-500">No contacts yet</p>
                    ) : (
                      recentContacts.map((contact) => (
                        <div key={contact.id} className="flex items-center">
                          <div className="ml-4 space-y-1">
                            <p className="text-sm font-medium leading-none">{contact.name}</p>
                            <p className="text-sm text-muted-foreground">{contact.email}</p>
                            <p className="text-xs text-gray-500">{new Date(contact.createdAt).toLocaleDateString()}</p>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </CardContent>
              </Card>
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Recent Registrations</CardTitle>
                  <CardDescription>
                    Showing the {recentRegistrations.length} most recent competition registrations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentRegistrations.length === 0 ? (
                      <p className="text-sm text-gray-500">No registrations yet</p>
                    ) : (
                      recentRegistrations.map((registration) => (
                        <div key={registration.id} className="flex items-center">
                          <div className="ml-4 space-y-1">
                            <p className="text-sm font-medium leading-none">
                              {registration.firstName} {registration.lastName}
                            </p>
                            <p className="text-sm text-muted-foreground">{registration.email}</p>
                            <p className="text-xs text-gray-500">{registration.competition}</p>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </CardContent>
              </Card>
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Recent Votes</CardTitle>
                  <CardDescription>Showing the {recentVotes.length} most recent award votes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentVotes.length === 0 ? (
                      <p className="text-sm text-gray-500">No votes yet</p>
                    ) : (
                      recentVotes.map((vote) => (
                        <div key={vote.id} className="flex items-center">
                          <div className="ml-4 space-y-1">
                            <p className="text-sm font-medium leading-none">{vote.voterName}</p>
                            <p className="text-sm text-muted-foreground">{vote.voterEmail}</p>
                            <p className="text-xs text-gray-500">Voted for: {vote.nomineeName}</p>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    )
  } catch (error) {
    console.error("Error fetching dashboard data:", error)
    return (
      <div className="container mx-auto py-10">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <div className="bg-red-50 p-6 rounded-lg shadow border border-red-200">
          <h2 className="text-red-600 font-semibold mb-2">Error loading dashboard</h2>
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

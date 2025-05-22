import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth-options"
import prisma from "@/lib/prisma"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Award, Dumbbell } from "lucide-react"

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)

  // Count submissions
  const contactCount = await prisma.contactSubmission.count()
  const voteCount = await prisma.awardVote.count()
  const registrationCount = await prisma.competitionRegistration.count()

  // Get recent contact submissions
  const recentContacts = await prisma.contactSubmission.findMany({
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

  // Get recent registrations
  const recentRegistrations = await prisma.competitionRegistration.findMany({
    take: 5,
    orderBy: {
      createdAt: "desc",
    },
  })

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Contact Submissions</CardTitle>
            <Mail className="w-4 h-4 text-[#dc5044]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{contactCount}</div>
            <p className="text-xs text-muted-foreground">Total contact form submissions</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Award Votes</CardTitle>
            <Award className="w-4 h-4 text-[#f3c532]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{voteCount}</div>
            <p className="text-xs text-muted-foreground">Total award votes submitted</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Competition Registrations</CardTitle>
            <Dumbbell className="w-4 h-4 text-[#70adb0]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{registrationCount}</div>
            <p className="text-xs text-muted-foreground">Total competition registrations</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#dc5044]" />
              Recent Contact Submissions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentContacts.map((contact) => (
                <div key={contact.id} className="border-b pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">{contact.name}</p>
                      <p className="text-sm text-gray-500">{contact.email}</p>
                    </div>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">{contact.type}</span>
                  </div>
                  <p className="text-sm mt-1 truncate">{contact.subject}</p>
                  <p className="text-xs text-gray-500 mt-1">{new Date(contact.createdAt).toLocaleDateString()}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <Award className="w-5 h-5 text-[#f3c532]" />
              Recent Award Votes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentVotes.map((vote) => (
                <div key={vote.id} className="border-b pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">{vote.voterName}</p>
                      <p className="text-sm text-gray-500">{vote.voterEmail}</p>
                    </div>
                  </div>
                  <p className="text-sm mt-1">
                    Voted for: <span className="font-medium">{vote.nomineeName}</span>
                  </p>
                  <p className="text-sm mt-1">
                    Category: <span className="font-medium">{vote.categoryName}</span>
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{new Date(vote.createdAt).toLocaleDateString()}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <Dumbbell className="w-5 h-5 text-[#70adb0]" />
              Recent Competition Registrations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentRegistrations.map((registration) => (
                <div key={registration.id} className="border-b pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">
                        {registration.firstName} {registration.lastName}
                      </p>
                      <p className="text-sm text-gray-500">{registration.email}</p>
                    </div>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">{registration.experienceLevel}</span>
                  </div>
                  <p className="text-sm mt-1">
                    Competition: <span className="font-medium">{registration.competition}</span>
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{new Date(registration.createdAt).toLocaleDateString()}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

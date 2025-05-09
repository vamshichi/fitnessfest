// Add the ContactActions component to the detail page
import { PrismaClient } from "@prisma/client"
import { notFound } from "next/navigation"
import { formatDistanceToNow, format } from "date-fns"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Mail, User, Calendar, Tag } from "lucide-react"
import { ContactActions } from "./actions"

const prisma = new PrismaClient()

export const dynamic = "force-dynamic"

async function getContact(id: string) {
  try {
    const contact = await prisma.contact.findUnique({
      where: {
        id,
      },
    })

    if (!contact) {
      return null
    }

    return {
      ...contact,
      additionalData: contact.additionalData ? JSON.parse(contact.additionalData) : {},
    }
  } catch (error) {
    console.error("Failed to fetch contact:", error)
    return null
  }
}

export default async function ContactDetailPage({ params }: { params: { id: string } }) {
  const contact = await getContact(params.id)

  if (!contact) {
    notFound()
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="mb-6">
        <Link href="/admin/contacts">
          <Button variant="outline" size="sm" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to all contacts
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Contact Submission Details</h1>
        <p className="text-gray-500">
          Submitted {formatDistanceToNow(new Date(contact.createdAt), { addSuffix: true })}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl">{contact.subject}</CardTitle>
                  <CardDescription>
                    <Badge
                      variant={
                        contact.type === "speaker" ? "secondary" : contact.type === "sponsor" ? "outline" : "default"
                      }
                      className="mt-2"
                    >
                      {contact.type.charAt(0).toUpperCase() + contact.type.slice(1)}
                    </Badge>
                  </CardDescription>
                </div>
                <Badge
                  variant={
                    contact.status === "new" ? "default" : contact.status === "in-progress" ? "secondary" : "outline"
                  }
                >
                  {contact.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Message</h3>
                <div className="bg-gray-50 p-4 rounded-md whitespace-pre-wrap">{contact.message}</div>
              </div>

              {contact.type === "speaker" && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Speaker Application Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-md">
                      <p className="text-sm text-gray-500 mb-1">Talk Title</p>
                      <p className="font-medium">{contact.additionalData.talkTitle || "Not provided"}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <p className="text-sm text-gray-500 mb-1">Areas of Expertise</p>
                      <p className="font-medium">{contact.additionalData.expertise || "Not provided"}</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-sm text-gray-500 mb-1">Previous Speaking Experience</p>
                    <p className="font-medium whitespace-pre-wrap">
                      {contact.additionalData.previousTalks || "Not provided"}
                    </p>
                  </div>
                </div>
              )}

              {contact.type === "sponsor" && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Sponsorship Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-md">
                      <p className="text-sm text-gray-500 mb-1">Company</p>
                      <p className="font-medium">{contact.additionalData.company || "Not provided"}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <p className="text-sm text-gray-500 mb-1">Website</p>
                      <p className="font-medium">
                        {contact.additionalData.website ? (
                          <a
                            href={contact.additionalData.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            {contact.additionalData.website}
                          </a>
                        ) : (
                          "Not provided"
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-sm text-gray-500 mb-1">Sponsorship Level Interest</p>
                    <p className="font-medium">{contact.additionalData.sponsorshipLevel || "Not provided"}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {contact.notes && (
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Internal Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="whitespace-pre-wrap bg-gray-50 p-4 rounded-md">{contact.notes}</div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <User className="h-5 w-5 text-gray-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="font-medium">{contact.name}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-gray-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">
                    <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">
                      {contact.email}
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-gray-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Submission Date</p>
                  <p className="font-medium">{format(new Date(contact.createdAt), "PPP 'at' p")}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Tag className="h-5 w-5 text-gray-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <p className="font-medium capitalize">{contact.status}</p>
                </div>
              </div>
              {contact.assignedTo && (
                <div className="flex items-center">
                  <User className="h-5 w-5 text-gray-500 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Assigned To</p>
                    <p className="font-medium">{contact.assignedTo}</p>
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <a href={`mailto:${contact.email}?subject=Re: ${contact.subject}`}>Reply via Email</a>
              </Button>
            </CardFooter>
          </Card>

          {/* Add the ContactActions component */}
          <ContactActions contact={contact} />
        </div>
      </div>
    </div>
  )
}

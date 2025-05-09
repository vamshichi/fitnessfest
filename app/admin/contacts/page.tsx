import { PrismaClient } from "@prisma/client"
import { formatDistanceToNow } from "date-fns"
import Link from "next/link"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const prisma = new PrismaClient()

export const dynamic = "force-dynamic"

async function getContacts() {
  try {
    return await prisma.contact.findMany({
      orderBy: {
        createdAt: "desc",
      },
    })
  } catch (error) {
    console.error("Failed to fetch contacts:", error)
    return []
  }
}

export default async function ContactsAdminPage() {
  const contacts = await getContacts()

  // Parse additionalData for each contact
  const contactsWithData = contacts.map((contact:any) => ({
    ...contact,
    additionalData: contact.additionalData ? JSON.parse(contact.additionalData) : {},
  }))

  // Count contacts by type
  const generalCount = contactsWithData.filter((c:any) => c.type === "general").length
  const speakerCount = contactsWithData.filter((c:any) => c.type === "speaker").length
  const sponsorCount = contactsWithData.filter((c:any) => c.type === "sponsor").length

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Contact Form Submissions</h1>
          <p className="text-gray-500 mt-1">Manage and respond to contact inquiries</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Total Inquiries</CardTitle>
            <CardDescription>All contact submissions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{contacts.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Speaker Applications</CardTitle>
            <CardDescription>Potential speakers</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{speakerCount}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Sponsorship Inquiries</CardTitle>
            <CardDescription>Potential sponsors</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{sponsorCount}</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="mb-6">
        <TabsList>
          <TabsTrigger value="all">All ({contacts.length})</TabsTrigger>
          <TabsTrigger value="general">General ({generalCount})</TabsTrigger>
          <TabsTrigger value="speaker">Speakers ({speakerCount})</TabsTrigger>
          <TabsTrigger value="sponsor">Sponsors ({sponsorCount})</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <ContactTable contacts={contactsWithData} />
        </TabsContent>

        <TabsContent value="general">
          <ContactTable contacts={contactsWithData.filter((c:any) => c.type === "general")} />
        </TabsContent>

        <TabsContent value="speaker">
          <ContactTable contacts={contactsWithData.filter((c:any) => c.type === "speaker")} />
        </TabsContent>

        <TabsContent value="sponsor">
          <ContactTable contacts={contactsWithData.filter((c:any) => c.type === "sponsor")} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function ContactTable({ contacts }: { contacts: any[] }) {
  return (
    <Table>
      <TableCaption>A list of contact form submissions.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Type</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Subject</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Submitted</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {contacts.map((contact) => (
          <TableRow key={contact.id}>
            <TableCell>
              <Badge
                variant={contact.type === "speaker" ? "secondary" : contact.type === "sponsor" ? "outline" : "default"}
              >
                {contact.type.charAt(0).toUpperCase() + contact.type.slice(1)}
              </Badge>
            </TableCell>
            <TableCell>{contact.name}</TableCell>
            <TableCell>
              <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">
                {contact.email}
              </a>
            </TableCell>
            <TableCell className="max-w-[200px] truncate" title={contact.subject}>
              {contact.subject}
            </TableCell>
            <TableCell>
              <Badge
                variant={
                  contact.status === "new" ? "default" : contact.status === "in-progress" ? "secondary" : "outline"
                }
              >
                {contact.status}
              </Badge>
            </TableCell>
            <TableCell>{formatDistanceToNow(new Date(contact.createdAt), { addSuffix: true })}</TableCell>
            <TableCell className="text-right">
              <Button variant="outline" size="sm" asChild>
                <Link href={`/admin/contacts/${contact.id}`}>View Details</Link>
              </Button>
            </TableCell>
          </TableRow>
        ))}

        {contacts.length === 0 && (
          <TableRow>
            <TableCell colSpan={7} className="text-center py-8 text-gray-500">
              No contact submissions found
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Speaker data
const speakers = [
  {
    id: 1,
    name: "Mike Fermalin",
    role: "Career Expert",
    company: "TechGrowth Inc.",
    image: "/placeholder.svg?height=400&width=400",
    category: "career",
    featured: true,
    bio: "Mike is a renowned career strategist with over 15 years of experience helping tech professionals navigate their career paths.",
  },
  {
    id: 2,
    name: "Anna Blair",
    role: "Founder",
    company: "Marks Technologies",
    image: "/placeholder.svg?height=400&width=400",
    category: "entrepreneurship",
    featured: true,
    bio: "Anna founded Marks Technologies in 2015 and has since grown it into a leading AI solutions provider with global reach.",
  },
  {
    id: 3,
    name: "Trevor J. Bell",
    role: "Lead Trainer",
    company: "Blids Learning",
    image: "/placeholder.svg?height=400&width=400",
    category: "education",
    featured: true,
    bio: "Trevor specializes in creating immersive learning experiences for developers and has trained over 10,000 professionals worldwide.",
  },
  {
    id: 4,
    name: "Michael Rooker",
    role: "Developer Expert",
    company: "Google",
    image: "/placeholder.svg?height=400&width=400",
    category: "development",
    featured: true,
    bio: "Michael is a Google Developer Expert who focuses on web performance and modern JavaScript frameworks.",
  },
  {
    id: 5,
    name: "David B. Perez",
    role: "Founder",
    company: "Madis",
    image: "/placeholder.svg?height=400&width=400",
    category: "entrepreneurship",
    featured: false,
    bio: "David founded Madis, a platform that helps startups scale their engineering teams efficiently.",
  },
  {
    id: 6,
    name: "Agustin Todaro",
    role: "Founder",
    company: "Nickho",
    image: "/placeholder.svg?height=400&width=400",
    category: "entrepreneurship",
    featured: false,
    bio: "Agustin is the visionary behind Nickho, a revolutionary fintech solution for small businesses.",
  },
  {
    id: 7,
    name: "Trisha Fisher",
    role: "President",
    company: "Child Care Tech",
    image: "/placeholder.svg?height=400&width=400",
    category: "leadership",
    featured: false,
    bio: "Trisha leads Child Care Tech, bringing innovative solutions to early childhood education through technology.",
  },
  {
    id: 8,
    name: "Jon P. Monroe",
    role: "Traveller & Tech Nomad",
    company: "Digital Nomads Co",
    image: "/placeholder.svg?height=400&width=400",
    category: "lifestyle",
    featured: false,
    bio: "Jon has been working remotely for over a decade and shares insights on balancing tech careers with location independence.",
  },
  {
    id: 9,
    name: "Sarah Johnson",
    role: "CTO",
    company: "InnovateTech",
    image: "/placeholder.svg?height=400&width=400",
    category: "leadership",
    featured: false,
    bio: "Sarah oversees technical strategy and innovation at InnovateTech, focusing on scalable cloud solutions.",
  },
  {
    id: 10,
    name: "Marcus Chen",
    role: "AI Researcher",
    company: "DeepMind",
    image: "/placeholder.svg?height=400&width=400",
    category: "development",
    featured: false,
    bio: "Marcus is at the forefront of AI research, specializing in reinforcement learning and neural networks.",
  },
  {
    id: 11,
    name: "Priya Sharma",
    role: "UX Director",
    company: "DesignHub",
    image: "/placeholder.svg?height=400&width=400",
    category: "design",
    featured: false,
    bio: "Priya leads user experience strategy at DesignHub, creating intuitive interfaces for complex technical products.",
  },
  {
    id: 12,
    name: "James Wilson",
    role: "Security Expert",
    company: "SecureNet",
    image: "/placeholder.svg?height=400&width=400",
    category: "security",
    featured: false,
    bio: "James specializes in cybersecurity for enterprise applications and advises Fortune 500 companies on security best practices.",
  },
]

// Speaker card component
function SpeakerCard({ speaker }: { speaker: (typeof speakers)[0] }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={speaker.image || "/placeholder.svg"}
          alt={speaker.name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{speaker.name}</h3>
        <p className="text-purple-600 mb-2">{speaker.role}</p>
        <p className="text-gray-500 mb-4">{speaker.company}</p>
        <p className="text-gray-700 mb-4 line-clamp-3">{speaker.bio}</p>
        <Link href={`/speakers/${speaker.id}`}>
          <Button variant="outline" className="w-full">
            View Profile
          </Button>
        </Link>
      </div>
    </div>
  )
}

// Featured speaker card component
function FeaturedSpeakerCard({ speaker }: { speaker: (typeof speakers)[0] }) {
  return (
    <div className="bg-gradient-to-br from-purple-900 to-purple-700 text-white rounded-xl overflow-hidden shadow-lg">
      <div className="md:flex">
        <div className="md:w-1/3 relative h-64 md:h-auto">
          <Image
            src={speaker.image || "/placeholder.svg"}
            alt={speaker.name}
            fill
            className="object-cover h-full w-full"
          />
        </div>
        <div className="md:w-2/3 p-6 md:p-8">
          <div className="uppercase tracking-wide text-xs font-semibold mb-1">Featured Speaker</div>
          <h3 className="text-2xl font-bold mb-2">{speaker.name}</h3>
          <p className="text-purple-200 mb-2">
            {speaker.role} at {speaker.company}
          </p>
          <p className="mb-4 opacity-90">{speaker.bio}</p>
          <Link href={`/speakers/${speaker.id}`}>
            <Button className="bg-white text-purple-700 hover:bg-gray-100">View Profile</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function SpeakersPage() {
  const featuredSpeakers = speakers.filter((speaker) => speaker.featured)
  const allSpeakers = speakers

  // Get unique categories
  const categories = Array.from(new Set(speakers.map((speaker) => speaker.category)))

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative text-white py-20">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/images/Banner for website 2.jpg')" }}
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-purple-700 opacity-40" />

  {/* Content */}
  <div className="relative z-10 container mx-auto px-4">
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Speakers</h1>
      <p className="text-lg md:text-xl opacity-90 mb-8">
        Learn from industry leaders and experts who are shaping the future of technology
      </p>
    </div>
  </div>
</section>


      {/* Featured Speakers
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Speakers</h2>
          <div className="grid gap-8">
            {featuredSpeakers.map((speaker) => (
              <FeaturedSpeakerCard key={speaker.id} speaker={speaker} />
            ))}
          </div>
        </div>
      </section> */}

      {/* All Speakers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-3xl font-bold mb-4 md:mb-0">All Speakers</h2>
            <div className="w-full md:w-64">
              <Input placeholder="Search speakers..." className="w-full" />
            </div>
          </div>

          <Tabs defaultValue="all" className="mb-12">
            <TabsList className="mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="all">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {allSpeakers.map((speaker) => (
                  <SpeakerCard key={speaker.id} speaker={speaker} />
                ))}
              </div>
            </TabsContent>

            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {allSpeakers
                    .filter((speaker) => speaker.category === category)
                    .map((speaker) => (
                      <SpeakerCard key={speaker.id} speaker={speaker} />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Become a Speaker */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Want to Speak at DevCon?</h2>
            <p className="text-gray-600 mb-8">
              We're always looking for passionate and knowledgeable speakers to share their expertise with our audience.
              If you have insights, experiences, or knowledge that could benefit others, we'd love to hear from you.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Link href="/contact">Apply to Speak</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Don't Miss This Opportunity</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Secure your spot at DevCon 2024 and learn from these amazing speakers in person.
          </p>
          <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100">
            <Link href="/tickets">Get Your Ticket Now</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

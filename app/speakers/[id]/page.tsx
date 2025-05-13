"use client"
import { use } from "react"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock } from "lucide-react"

// Using the same speakers data
const speakers = [
  {
    name: "Mike Fermalin",
    title: "Career Expert",
    color: "border-pink-500",
    bio: "Mike is a renowned career expert with over 15 years of experience helping professionals advance their careers.",
    image: "/placeholder.svg?height=300&width=300",
    day: "Day 1",
    timing: "10:00 AM - 11:30 AM",
  },
  {
    name: "Mike Fermalin",
    title: "Career Expert",
    color: "border-pink-500",
    bio: "Mike is a renowned career expert with over 15 years of experience helping professionals advance their careers.",
    image: "/placeholder.svg?height=300&width=300",
    day: "Day 1",
    timing: "2:00 PM - 3:30 PM",
  },
  {
    name: "Mike Fermalin",
    title: "Career Expert",
    color: "border-pink-500",
    bio: "Mike is a renowned career expert with over 15 years of experience helping professionals advance their careers.",
    image: "/placeholder.svg?height=300&width=300",
    day: "Day 2",
    timing: "9:00 AM - 10:30 AM",
  },
  {
    name: "Mike Fermalin",
    title: "Career Expert",
    color: "border-pink-500",
    bio: "Mike is a renowned career expert with over 15 years of experience helping professionals advance their careers.",
    image: "/placeholder.svg?height=300&width=300",
    day: "Day 2",
    timing: "1:00 PM - 2:30 PM",
  },
  {
    name: "Mike Fermalin",
    title: "Career Expert",
    color: "border-pink-500",
    bio: "Mike is a renowned career expert with over 15 years of experience helping professionals advance their careers.",
    image: "/placeholder.svg?height=300&width=300",
    day: "Day 3",
    timing: "11:00 AM - 12:30 PM",
  },
  {
    name: "Anna Blair",
    title: "Founder, Marks",
    color: "border-blue-400",
    bio: "Anna is the founder of Marks, a leading fitness brand that has transformed the industry.",
    image: "/placeholder.svg?height=300&width=300",
    day: "Day 1",
    timing: "4:00 PM - 5:30 PM",
  },
  {
    name: "Trevor J. Bell",
    title: "Lead Trainer, Blids",
    color: "border-pink-600",
    bio: "Trevor is an expert trainer with Blids, specializing in high-intensity workouts and nutrition.",
    image: "/placeholder.svg?height=300&width=300",
    day: "Day 3",
    timing: "2:00 PM - 3:30 PM",
  },
  {
    name: "Michael Rooker",
    title: "Developer Expert",
    color: "border-purple-600",
    bio: "Michael brings technical expertise to fitness applications, creating innovative solutions for trainers and clients.",
    image: "/placeholder.svg?height=300&width=300",
    day: "Day 2",
    timing: "3:00 PM - 4:30 PM",
  },
]

export default function SpeakerDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const speakerId = Number.parseInt(resolvedParams.id)

  // Check if the speaker exists
  if (isNaN(speakerId) || speakerId < 0 || speakerId >= speakers.length) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Speaker not found</h1>
        <Link href="/" className="text-blue-500 hover:underline flex items-center gap-2">
          <ArrowLeft size={16} />
          Back to speakers
        </Link>
      </div>
    )
  }

  const speaker = speakers[speakerId]

  return (
    <div className="min-h-screen p-8">
      <Link href="/" className="text-blue-500 hover:underline flex items-center gap-2 mb-8">
        <ArrowLeft size={16} />
        Back to speakers
      </Link>

      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Speaker image with rotating border */}
          <div className="relative w-[300px] h-[300px]">
            <div
              className={`absolute inset-0 rounded-full border-3 border-dashed ${speaker.color} animate-spin-slow`}
            ></div>
            <div className="absolute inset-0 m-2 rounded-full flex items-center justify-center z-10 overflow-hidden">
              <img
                src={speaker.image || "/placeholder.svg"}
                alt={speaker.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Speaker details */}
          <div className="flex-1">
            <h1 className="text-4xl font-extrabold mb-2">{speaker.name}</h1>
            <p className="text-xl text-gray-600 mb-2">{speaker.title}</p>

            {/* Schedule information */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1 text-sm bg-gray-100 px-3 py-1.5 rounded-full">
                <Calendar size={16} className="text-gray-500" />
                <span>{speaker.day}</span>
              </div>
              <div className="flex items-center gap-1 text-sm bg-gray-100 px-3 py-1.5 rounded-full">
                <Clock size={16} className="text-gray-500" />
                <span>{speaker.timing}</span>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-lg">{speaker.bio}</p>
              <div className="pt-4">
                <h2 className="text-2xl font-bold mb-4">Session Details</h2>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="font-medium">Fitness in the Digital Age</p>
                  <p className="text-gray-600 mt-1">Location: Main Hall, Room 101</p>
                  <p className="text-gray-600">Capacity: 200 attendees</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

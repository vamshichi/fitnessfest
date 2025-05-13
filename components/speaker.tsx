"use client"
import Link from "next/link"

const speakers = [
  {
    name: "Mike Fermalin",
    title: "Career Expert",
    color: "border-pink-500",
    bio: "Mike is a renowned career expert with over 15 years of experience helping professionals advance their careers.",
    image: "/placeholder.svg?height=220&width=220",
    day: "Day 1",
    timing: "10:00 AM - 11:30 AM",
  },
  {
    name: "Mike Fermalin",
    title: "Career Expert",
    color: "border-pink-500",
    bio: "Mike is a renowned career expert with over 15 years of experience helping professionals advance their careers.",
    image: "/placeholder.svg?height=220&width=220",
    day: "Day 1",
    timing: "2:00 PM - 3:30 PM",
  },
  {
    name: "Mike Fermalin",
    title: "Career Expert",
    color: "border-pink-500",
    bio: "Mike is a renowned career expert with over 15 years of experience helping professionals advance their careers.",
    image: "/placeholder.svg?height=220&width=220",
    day: "Day 2",
    timing: "9:00 AM - 10:30 AM",
  },
  {
    name: "Mike Fermalin",
    title: "Career Expert",
    color: "border-pink-500",
    bio: "Mike is a renowned career expert with over 15 years of experience helping professionals advance their careers.",
    image: "/placeholder.svg?height=220&width=220",
    day: "Day 2",
    timing: "1:00 PM - 2:30 PM",
  },
  {
    name: "Mike Fermalin",
    title: "Career Expert",
    color: "border-pink-500",
    bio: "Mike is a renowned career expert with over 15 years of experience helping professionals advance their careers.",
    image: "/placeholder.svg?height=220&width=220",
    day: "Day 3",
    timing: "11:00 AM - 12:30 PM",
  },
  {
    name: "Anna Blair",
    title: "Founder, Marks",
    color: "border-blue-400",
    bio: "Anna is the founder of Marks, a leading fitness brand that has transformed the industry.",
    image: "/placeholder.svg?height=220&width=220",
    day: "Day 1",
    timing: "4:00 PM - 5:30 PM",
  },
  {
    name: "Trevor J. Bell",
    title: "Lead Trainer, Blids",
    color: "border-pink-600",
    bio: "Trevor is an expert trainer with Blids, specializing in high-intensity workouts and nutrition.",
    image: "/placeholder.svg?height=220&width=220",
    day: "Day 3",
    timing: "2:00 PM - 3:30 PM",
  },
  {
    name: "Michael Rooker",
    title: "Developer Expert",
    color: "border-purple-600",
    bio: "Michael brings technical expertise to fitness applications, creating innovative solutions for trainers and clients.",
    image: "/placeholder.svg?height=220&width=220",
    day: "Day 2",
    timing: "3:00 PM - 4:30 PM",
  },
]

export default function SpeakerSection() {
  return (
    <div className="py-12 px-4 text-center">
      <p className="font-semibold uppercase mb-2">Speakers</p>
      <h2 className="text-3xl font-extrabold mb-8">Leading Fitness Speakers</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 justify-items-center">
        {speakers.map((speaker, idx) => (
          <Link
            href={`/speakers/${idx}`}
            key={idx}
            className="group relative flex flex-col items-center cursor-pointer transition-transform hover:scale-105"
          >
            {/* Wrapper to align the rotating border and image */}
            <div className="relative w-[220px] h-[220px]">
              {/* Rotating dotted border */}
              <div
                className={`absolute inset-0 rounded-full border-3 border-dashed ${speaker.color} transition-transform duration-500 group-hover:animate-spin`}
              ></div>

              {/* Speaker image */}
              <div className="absolute inset-0 m-2 bg-gray-300 rounded-full flex items-center justify-center text-black text-xl z-10 overflow-hidden">
                <img
                  src={speaker.image || "/placeholder.svg"}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Speaker Info */}
            <div
  className="mt-4 text-center bg-no-repeat bg-center bg-cover"
  style={{ backgroundImage: "url('/images/png.png')" }}
>
            <h3 className="mt-4 text-lg font-extrabold text-slate-900">{speaker.name}</h3>
            <p className="text-sm text-gray-600">{speaker.title}</p>
            </div>

            {/* <div className="mt-2 flex items-center justify-center gap-2">
              <span className="text-xs font-medium bg-gray-100 px-2 py-1 rounded">{speaker.day}</span>
              <span className="text-xs text-gray-500">{speaker.timing}</span>
            </div> */}
          </Link>
        ))}
      </div>
    </div>
  )
}

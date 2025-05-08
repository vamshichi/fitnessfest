"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"

const scheduleData = {
  day1: [
    {
      id: 1,
      time: "09:00 - 11:00 AM",
      date: "August 12",
      title: "Registration for opening workshop",
      location: "Monthon city hall, New York",
      description:
        "We're inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their knees, try new things, to be vulnerable.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      time: "12:30 - 02:00 PM",
      date: "August 12",
      title: "Meeting with world class investors",
      location: "Monthon city hall, New York",
      description:
        "We're inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their knees, try new things, to be vulnerable.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 3,
      time: "02:30 - 05:30 PM",
      date: "August 12",
      title: "Discussion about benefits of online meetings",
      location: "Monthon city hall, New York",
      description:
        "We're inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their knees, try new things, to be vulnerable.",
      image: "/placeholder.svg?height=80&width=80",
    },
  ],
  day2: [
    {
      id: 4,
      time: "09:00 - 11:00 AM",
      date: "August 13",
      title: "Discussion about the benefit of group work",
      location: "Monthon city hall, New York",
      description:
        "We're inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their knees, try new things, to be vulnerable.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 5,
      time: "12:30 - 02:00 PM",
      date: "August 13",
      title: "Meeting With worldclass creators",
      location: "Monthon city hall, New York",
      description:
        "We're inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their knees, try new things, to be vulnerable.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 6,
      time: "02:30 - 05:30 PM",
      date: "August 13",
      title: "A documentary film about success",
      location: "Monthon city hall, New York",
      description:
        "We're inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their knees, try new things, to be vulnerable.",
      image: "/placeholder.svg?height=80&width=80",
    },
  ],

}

export default function ScheduleTab() {
  const [activeTab, setActiveTab] = useState("day1")
  const [expandedItems, setExpandedItems] = useState<number[]>([1])

  const toggleExpand = (id: number) => {
    setExpandedItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <div className="rounded-xl shadow-lg overflow-visible flex bg-gray-100">
      {/* Vertical Tab Filter on Left */}
      <div className="flex flex-col items-center space-y-2 px-4 py-6">
        {["day1", "day2"].map((day, idx) => {
          const isActive = activeTab === day
          const colors = [
            { base: "bg-pink-300", active: "bg-pink-600", triangle: "border-l-pink-600" },
            { base: "bg-yellow-200", active: "bg-yellow-400", triangle: "border-l-yellow-400" },
            { base: "bg-purple-300", active: "bg-purple-500", triangle: "border-l-purple-500" },
          ][idx];
          

          return (
            <button
              key={day}
              className={`relative w-24 h-40 flex items-center justify-center text-white font-bold transition-all duration-300 ${
                isActive ? colors.active : colors.base
              }`}
              onClick={() => setActiveTab(day)}
            >
              <span className="transform -rotate-90 whitespace-nowrap">{`${idx + 1}st Day`}</span>
              {isActive && (
                <div className={`absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0
                    border-t-[10px] border-t-transparent 
                    border-b-[10px] border-b-transparent 
                    border-l-[15px] ${colors.triangle}`}>
    </div>
    
              )}
            </button>
          )
        })}
      </div>

      {/* Content Area */}
      <div className="p-6 flex-1 ">
        {scheduleData[activeTab as keyof typeof scheduleData].map((item) => (
          <div key={item.id} className="mb-6 last:mb-0 bg-white">
            <div className="flex flex-col md:flex-row gap-6 p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <div className="md:w-1/4 flex items-center gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{item.date.split(" ")[1]}</div>
                  <div className="text-gray-600">{item.date.split(" ")[0]}</div>
                  <div className="text-sm text-gray-500 mt-2">{item.time}</div>
                </div>
                {/* <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                   <img src={item.image || "/placeholder.svg"} alt="Speaker" className="w-full h-full object-cover" />
                </div> */}
              </div>

              <div className="md:w-3/4">
                <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                  <MapPin size={16} />
                  <span>{item.location}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <div>
                  <p className="text-gray-700">{item.description}</p>
                  {expandedItems.includes(item.id) && (
                    <p className="text-gray-700 mt-2">
                      Epic adventures Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic
                      fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica.
                      Salvia esse flexitarian Truffaut synth art party deep v chillwave.
                    </p>
                  )}
                </div>

                <button
                  className="mt-4 flex items-center text-purple-600 hover:text-purple-800 transition-colors"
                  onClick={() => toggleExpand(item.id)}
                >
                  {expandedItems.includes(item.id) ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

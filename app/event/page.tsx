"use client"

import { useState } from "react"
import Link from "next/link"
import { CalendarClock, MapPin } from "lucide-react"
import { events } from "@/data/events"

export default function EventPage() {
  const eventDates = ["12 October 2025", "13 October 2025"]
  const [selectedDate, setSelectedDate] = useState(eventDates[0])

  const dateEvents = events.filter((event) => event.date === selectedDate)

  return (
    <div>
         <section className="min-h-[60vh] bg-cover bg-center py-20 flex items-center relative" style={{ backgroundImage: "url('/images/eventum-img1.jpg')" }}>
  <div
  className="absolute inset-0 bg-black opacity-80"
></div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-3xl mx-auto text-center">
   <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-white">
  Events
</h1>
    </div>
  </div>
</section>
    <div className="min-h-screen bg-white py-10 px-4">
   
      <div className="max-w-5xl mx-auto px-4 ">
        {/* Date Tabs */}
        <div className="flex justify-center gap-6 mb-10">
  {eventDates.map((date) => (
    <button
      key={date}
      onClick={() => setSelectedDate(date)}
      className={`px-6 py-3 rounded-full font-semibold text-base transition-all border shadow-sm ${
        selectedDate === date
          ? "bg-pink-600 text-white border-pink-600"
          : "bg-white text-pink-600 border-pink-300 hover:bg-pink-100"
      }`}
    >
      {date}
    </button>
  ))}
</div>


        {/* Events for selected date */}
        <div className="border-l-2 border-gray-300 relative">
          {dateEvents.map((event, idx) => (
            <div key={event.id} className="mb-10 ml-6 relative">
              {/* Time Dot */}
              <div
                className={`absolute -left-12 top-4 w-12 h-12 rounded-full text-white flex flex-col items-center justify-center bg-pink-600`}
              >
                <span className="text-sm font-bold">{event.time}</span>
                <span className="text-xs">{event.period}</span>
              </div>

              <Link
                href={`/event/${event.id}`}
                className="group block bg-gray-100 rounded-md overflow-hidden hover:shadow-lg transition mx-15"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="relative w-full md:w-[340px] h-[200px] bg-gray-300 flex-shrink-0">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    {event.featured && (
                      <span className="absolute top-2 left-2 bg-orange-400 text-white text-xs font-bold px-3 py-1 rounded">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-5 flex-1">
                    <div className="text-xl font-bold mb-2">{event.price}</div>
                    <h2 className="text-lg font-semibold mb-2 group-hover:underline">{event.title}</h2>
                    <div className="flex items-center text-sm text-gray-600 mb-2 space-x-4">
                      <span className="flex items-center gap-1">
                        <CalendarClock size={14} />
                        {event.timeRange}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {event.location}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 mb-2 line-clamp-3">{event.description}</p>
                    <span className="text-orange-500 font-semibold text-sm hover:underline">Get Ticket Now</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

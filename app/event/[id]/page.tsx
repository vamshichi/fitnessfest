"use client"
import { use } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { getEventById } from "@/data/events"
import { EventSpeakersSection } from "@/components/event-speakers-section"

type Props = {
  params: Promise< { id: string }>
}

export default function EventDetailPage({ params }: Props) {
  const resolvedParams = use(params)
    // const speakerId = Number.parseInt(resolvedParams.id)

  // Get event data
  const event = getEventById(resolvedParams.id)

  if (!event) {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <Link href="/" className="text-blue-500 hover:underline flex items-center gap-2 mb-8">
          <ArrowLeft size={16} />
          Back to events
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Event not found</h1>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <Link href="/" className="text-blue-500 hover:underline flex items-center gap-2 mb-8">
        <ArrowLeft size={16} />
        Back to events
      </Link>

      <h1 className="text-3xl font-bold text-gray-900 mb-6">{event.title}</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Image
            src={event.image || "/placeholder.svg"}
            alt="Event Banner"
            width={751}
            height={390}
            className="rounded-md w-full"
          />
          <p className="mt-6 text-gray-700 text-lg leading-relaxed">{event.description}</p>

          {/* Speakers Section */}
          <EventSpeakersSection event={event} />

        </div>

        <div className="bg-indigo-50 p-6 rounded-md shadow-sm space-y-4">
          <div className="text-3xl font-bold text-indigo-900">
            {typeof event.price === "number" ? `$${event.price}` : event.price}
          </div>
          <button className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500 transition w-full">
            Buy Your Ticket
          </button>

          <div className="border-t pt-4 space-y-2">
            <h2 className="font-semibold text-indigo-900">Details</h2>
            {event.startDate && (
              <div>
                <span className="font-semibold">Start:</span> <span>{event.startDate}</span>
              </div>
            )}
            {event.endDate && (
              <div>
                <span className="font-semibold">End:</span> <span>{event.endDate}</span>
              </div>
            )}
            {event.timeRange && (
              <div>
                <span className="font-semibold">Time:</span> <span>{event.timeRange}</span>
              </div>
            )}
            <div>
              <span className="font-semibold">Location:</span> <span>{event.location}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Checkbox } from "@/components/ui/checkbox"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import { Label } from "@/components/ui/label"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Calendar, Clock, MapPin } from "lucide-react"
// import Link from "next/link"
// import TicketsSection from "@/components/TicketsSection"
import Ticket from "@/components/ticket"

// Ticket data
const tickets = [
  {
    id: "basic",
    name: "Basic Pass",
    price: 43,
    color: "blue",
    features: [
      "Back Row Seat",
      "Free Lunch & Snacks",
      "Event Certificate",
      "1 Workshop",
      "Access to Keynote Sessions",
      "Conference Materials",
    ],
  },
  {
    id: "premium",
    name: "Premium Pass",
    price: 143,
    color: "pink",
    features: [
      "Middle Row Seat",
      "Free Lunch & Snacks",
      "Event Certificate",
      "3 Workshops",
      "Access to All Sessions",
      "Conference Materials",
      "Networking Reception",
      "Digital Content Access",
    ],
    recommended: true,
  },
  {
    id: "platinum",
    name: "Platinum Pass",
    price: 243,
    color: "amber",
    features: [
      "Front Row Seat",
      "Free Lunch & Snacks",
      "Event Certificate",
      "All Workshops",
      "Access to All Sessions",
      "Conference Materials",
      "Networking Reception",
      "Digital Content Access",
      "VIP Dinner",
      "Exclusive Q&A with Speakers",
      "1-Year Membership to DevCon Community",
    ],
  },
]

// Ticket card component
function TicketCard({
  ticket,
  selected,
  onSelect,
}: {
  ticket: (typeof tickets)[0]
  selected: boolean
  onSelect: () => void
}) {
  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return {
          header: "bg-blue-500",
          border: selected ? "ring-2 ring-blue-500" : "",
          button: selected
            ? "bg-blue-500 hover:bg-blue-600 text-white"
            : "border-blue-500 text-blue-500 hover:bg-blue-50",
        }
      case "pink":
        return {
          header: "bg-pink-500",
          border: selected ? "ring-2 ring-pink-500" : "",
          button: selected
            ? "bg-pink-500 hover:bg-pink-600 text-white"
            : "border-pink-500 text-pink-500 hover:bg-pink-50",
        }
      case "amber":
        return {
          header: "bg-amber-500",
          border: selected ? "ring-2 ring-amber-500" : "",
          button: selected
            ? "bg-amber-500 hover:bg-amber-600 text-white"
            : "border-amber-500 text-amber-500 hover:bg-amber-50",
        }
      default:
        return {
          header: "bg-blue-500",
          border: selected ? "ring-2 ring-blue-500" : "",
          button: selected
            ? "bg-blue-500 hover:bg-blue-600 text-white"
            : "border-blue-500 text-blue-500 hover:bg-blue-50",
        }
    }
  }

  const colorClasses = getColorClasses(ticket.color)

  return (
    <div
      className={`bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${colorClasses.border} ${ticket.recommended ? "transform scale-105" : "hover:-translate-y-2"}`}
    >
      {ticket.recommended && (
        <div className="bg-pink-500 text-white text-center py-1 text-sm font-medium">Recommended</div>
      )}

      <div className={`${colorClasses.header} p-6 text-white`}>
        <h3 className="text-xl font-medium mb-2">{ticket.name}</h3>
        <div className="text-3xl font-bold">
          <sup className="text-xl">$</sup>
          {ticket.price}
        </div>
      </div>

      <div className="p-6">
        <ul className="space-y-3 mb-6">
          {ticket.features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <Check className="w-5 h-5 mr-2 text-green-500" />
              {feature}
            </li>
          ))}
        </ul>

        <Button
          onClick={onSelect}
          className={`block w-full py-3 px-4 text-center rounded-lg font-medium transition-colors border ${colorClasses.button}`}
        >
          {selected ? "Selected" : "Select Ticket"}
        </Button>
      </div>
    </div>
  )
}

export default function TicketsPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative text-white py-20">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/images/ticket (1).jpg')" }}
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-purple-700 opacity-30" />

  {/* Content */}
  <div className="relative z-10 container mx-auto px-4">
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Your Tickets</h1>
      <p className="text-lg md:text-xl opacity-90 mb-8">
        Secure your spot at DevCon 2024 and join thousands of tech enthusiasts for an unforgettable experience
      </p>
    </div>
  </div>
</section>


      {/* Event Details */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Event Details</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Calendar className="w-5 h-5 text-purple-600 mt-0.5 mr-3" />
                      <div>
                        <span className="font-medium block">Date</span>
                        <span className="text-gray-600">July 17-19, 2024</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Clock className="w-5 h-5 text-purple-600 mt-0.5 mr-3" />
                      <div>
                        <span className="font-medium block">Time</span>
                        <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <MapPin className="w-5 h-5 text-purple-600 mt-0.5 mr-3" />
                      <div>
                        <span className="font-medium block">Location</span>
                        <span className="text-gray-600">Tech Convention Center</span>
                        <span className="text-gray-600 block">Boston, Canada</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">What to Expect</h2>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      <span>50+ Inspiring Sessions</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      <span>20+ Hands-on Workshops</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      <span>Networking Opportunities</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      <span>Industry-Leading Speakers</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      <span>Product Exhibitions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Ticket />
      
    </main>
  )
}

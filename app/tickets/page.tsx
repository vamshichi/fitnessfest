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
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/images/ticket.jpg')" }}
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-purple-700 opacity-50" />

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
      {/* Ticket Selection */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Ticket</h2>

          <Tabs defaultValue="individual" className="max-w-4xl mx-auto mb-12">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="individual">Individual Tickets</TabsTrigger>
              <TabsTrigger value="group">Group Tickets</TabsTrigger>
            </TabsList>

            <TabsContent value="individual" className="pt-6">
              <div className="grid md:grid-cols-3 gap-8">
                {tickets.map((ticket) => (
                  <TicketCard key={ticket.id} ticket={ticket} selected={ticket.id === "premium"} onSelect={() => {}} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="group" className="pt-6">
              <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                <h3 className="text-xl font-bold mb-4">Group Discounts</h3>
                <p className="text-gray-600 mb-4">
                  Save when you register as a group! Perfect for teams, companies, or educational institutions.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-700">
                    <Check className="w-5 h-5 mr-2 text-green-500" />
                    <span className="font-medium">5-9 people:</span>
                    <span className="ml-2">10% discount</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Check className="w-5 h-5 mr-2 text-green-500" />
                    <span className="font-medium">10-19 people:</span>
                    <span className="ml-2">15% discount</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Check className="w-5 h-5 mr-2 text-green-500" />
                    <span className="font-medium">20+ people:</span>
                    <span className="ml-2">20% discount</span>
                  </li>
                </ul>
                <p className="text-gray-600 mb-4">
                  For group registrations, please contact our team at groups@devcon2024.com or call +1 (555) 123-4567.
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700">Contact for Group Booking</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section> */}

      {/* Registration Form */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Complete Your Registration</h2>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <form className="space-y-6">
                <h3 className="text-xl font-bold mb-4">Personal Information</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Your first name" />
                  </div>

                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Your last name" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Your phone number" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="company">Company/Organization</Label>
                  <Input id="company" placeholder="Your company or organization" />
                </div>

                <div>
                  <Label htmlFor="jobTitle">Job Title</Label>
                  <Input id="jobTitle" placeholder="Your job title" />
                </div>

                <div className="border-t pt-6 mt-8">
                  <h3 className="text-xl font-bold mb-4">Selected Ticket</h3>

                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-bold">Premium Pass</h4>
                        <p className="text-gray-600">July 17-19, 2024</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">$143.00</p>
                        <Button variant="link" className="p-0 h-auto text-purple-600">
                          Change
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6 mt-8">
                  <h3 className="text-xl font-bold mb-4">Payment Information</h3>

                  <div className="space-y-4">
                    <div>
                      <Label>Payment Method</Label>
                      <RadioGroup defaultValue="card" className="mt-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="card" id="card" />
                          <Label htmlFor="card">Credit/Debit Card</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="paypal" id="paypal" />
                          <Label htmlFor="paypal">PayPal</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" />
                      </div>

                      <div>
                        <Label htmlFor="cvc">CVC</Label>
                        <Input id="cvc" placeholder="123" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="nameOnCard">Name on Card</Label>
                      <Input id="nameOnCard" placeholder="Name as it appears on card" />
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-2 mt-6">
                  <Checkbox id="terms" />
                  <div className="grid gap-1.5 leading-none">
                    <Label htmlFor="terms" className="text-sm font-normal">
                      I agree to the{" "}
                      <Link href="#" className="text-purple-600 hover:underline">
                        Terms and Conditions
                      </Link>{" "}
                      and{" "}
                      <Link href="#" className="text-purple-600 hover:underline">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>
                </div>

                <div className="border-t pt-6 mt-8">
                  <div className="flex justify-between mb-2">
                    <span>Subtotal</span>
                    <span>$143.00</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Tax</span>
                    <span>$14.30</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg mt-4">
                    <span>Total</span>
                    <span>$157.30</span>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 mt-6">
                  Complete Purchase
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">What is included in my ticket?</h3>
                <p className="text-gray-600">
                  Your ticket includes access to the conference sessions, workshops (as specified by your ticket type),
                  lunch and refreshments, networking events, and conference materials. Premium and Platinum tickets
                  include additional benefits as detailed in the ticket description.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Can I transfer my ticket to someone else?</h3>
                <p className="text-gray-600">
                  Yes, tickets are transferable up to 7 days before the event. Please contact our support team to
                  process the transfer.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">What is the refund policy?</h3>
                <p className="text-gray-600">
                  Tickets are refundable up to 30 days before the event with a 15% processing fee. No refunds will be
                  issued within 30 days of the event, but you can transfer your ticket to another person.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Is there accommodation available?</h3>
                <p className="text-gray-600">
                  We have partnered with several hotels near the venue to offer special rates for attendees. Details
                  will be provided in your confirmation email after purchasing a ticket.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <TicketsSection /> */}
      {/* Support Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Help?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            If you have any questions about tickets or registration, our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="outline">Contact Support</Button>
            <Button className="bg-purple-600 hover:bg-purple-700">View FAQ</Button>
          </div>
        </div>
      </section> */}
    </main>
  )
}

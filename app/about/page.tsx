import Image from "next/image"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Users, Clock } from "lucide-react"
// import ZonesAndHighlights from "@/components/ZonesAndHighlights"
import WhyAttend from "@/components/WhyAttend"
import WhoShouldJoin from "@/components/WhoShouldJoin"

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="min-h-screen bg-cover bg-center py-20 flex items-center relative" style={{ backgroundImage: "url('/images/Banner for website.jpg')" }}>
  <div className="absolute inset-0 bg-black opacity-60"></div>
  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About the Festival Fitness  for Every BODY.</h1>
      {/* <p className="text-lg md:text-xl opacity-90 mb-8 text-white">
        Join us for the most anticipated tech event of the year, bringing together industry leaders, innovators,
        and tech enthusiasts.
      </p> */}
    </div>
  </div>
</section>

<section className="py-16 bg-white  text-center ">
  <div className="max-w-3xl mx-auto">
    <h2 className="text-3xl font-bold mb-6">Welcome to Bengaluru Fitness Festival</h2>
  <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
  Bengaluru Fitness Festival is more than just an event – it’s a movement to make health and fitness fun, accessible, and inclusive. Whether you're a beginner or a pro, young or old, this festival welcomes everyone with open arms and energetic vibes.
  </p>
  <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
  Expect high-energy workouts, educational sessions, fun activities for families, and a buzzing atmosphere that will leave you inspired and recharged.
    </p>
    </div>
</section>
      <section>
        <div>
          {/* <ZonesAndHighlights /> */}
        </div>
      </section>
      {/* About Event Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission & Vision</h2>
              <p className="text-gray-700 mb-4">
              To inspire a healthier and happier community by making fitness fun, accessible, and inclusive for people of all ages and skill levels through engaging experiences, energetic events, and educational opportunities.
              </p>
              <p className="text-gray-700 mb-6">
              To become India’s most vibrant fitness movement—uniting individuals, families, and communities through a shared passion for health, well-being, and active living.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#dc5044] hover:bg-purple-700">
                  <Link href="/event">View Schedule</Link>
                </Button>
                {/* <Button variant="outline">
                  <Link href="/speakers">Meet Our Speakers</Link>
                </Button> */}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/image for website.jpg"
                  alt="Conference attendees"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#dc5044] text-white p-6 rounded-lg shadow-lg hidden md:block">
                <p className="text-xl font-bold">10+ Years</p>
                <p>Of Successful Events</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Event Details</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Date & Time</h3>
              <p className="text-gray-600">July 17-19, 2024</p>
              <p className="text-gray-600">9:00 AM - 6:00 PM</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-gray-600">Tech Convention Center</p>
              <p className="text-gray-600">Boston, Canada</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Attendees</h3>
              <p className="text-gray-600">5,000+ Participants</p>
              <p className="text-gray-600">From 30+ Countries</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sessions</h3>
              <p className="text-gray-600">50+ Workshops</p>
              <p className="text-gray-600">20+ Keynote Speeches</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Attend */}
      <div><WhyAttend /></div>
      <div><WhoShouldJoin /></div>
      {/* <WhoShouldJoin /> */}
      {/* <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Attend DevCon 2024?</h2>
            <p className="text-gray-600">
              Join thousands of tech professionals for three days of learning, networking, and inspiration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Learn from the Best</h3>
              <p className="text-gray-600">
                Gain insights from industry leaders and experts through keynote speeches, workshops, and panel
                discussions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Network & Connect</h3>
              <p className="text-gray-600">
                Meet like-minded professionals, potential collaborators, and industry recruiters to expand your network.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Discover New Technologies</h3>
              <p className="text-gray-600">
                Explore the latest tools, technologies, and innovations through interactive demos and exhibitions.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-medium">
                  What is included in the ticket price?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Your ticket includes access to all keynote speeches, workshops, panel discussions, networking events,
                  lunch and refreshments, and conference materials. Premium tickets also include exclusive access to VIP
                  networking events and priority seating.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-medium">
                  Is there a dress code for the event?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  The dress code is business casual. We recommend comfortable attire as you'll be attending sessions
                  throughout the day.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-medium">Will the sessions be recorded?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes, all keynote speeches and selected workshops will be recorded and made available to attendees
                  after the conference. Premium ticket holders will have lifetime access to all recorded content.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-medium">
                  Is there accommodation available near the venue?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes, we have partnered with several hotels near the venue to offer special rates for conference
                  attendees. Details will be provided in your confirmation email after purchasing a ticket.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-medium">
                  Can I get a refund if I can't attend?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Tickets are refundable up to 30 days before the event with a 15% processing fee. Alternatively, you
                  can transfer your ticket to someone else at no additional cost.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#dc5044] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Us?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Secure your spot at DevCon 2024 and be part of the most exciting tech event of the year.
          </p>
          <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100">
            <Link href="/tickets">Get Your Ticket Now</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

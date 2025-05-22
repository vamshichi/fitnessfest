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
  <div
  className="absolute inset-0 bg-black opacity-60"
  // style={{
  //   backgroundImage: 'linear-gradient(to bottom right, #70adb0, #dc5044, #f3c532)'
  // }}
></div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-3xl mx-auto text-center">
   <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#00f] via-[#ff0] to-[#00f]">
  About the Festival Fitness for Every BODY.
</h1>


      {/* <p className="text-lg md:text-xl opacity-90 mb-8 text-white">
        Join us for the most anticipated tech event of the year, bringing together industry leaders, innovators,
        and tech enthusiasts.
      </p> */}
    </div>
  </div>
</section>

{/* Hero Welcome Section */}
<section className="py-20 bg-gradient-to-br from-[#f3c532]/10 via-white to-[#70adb0]/10 text-center">
  <div className="max-w-4xl mx-auto px-4">
    <h2 className="text-4xl md:text-5xl font-extrabold text-[#dc5044] mb-6">
      Welcome to Bengaluru Fitness Festival
    </h2>
    <p className="text-lg md:text-xl text-gray-700 mb-6">
      Bengaluru Fitness Festival is more than just an event – it’s a <span className="font-semibold text-[#70adb0]">movement</span> to make health and fitness fun, accessible, and inclusive. Whether you're a beginner or a pro, young or old, this festival welcomes everyone with open arms and energetic vibes.
    </p>
    <p className="text-lg md:text-xl text-gray-700">
      Expect <span className="text-[#dc5044] font-semibold">high-energy workouts</span>, educational sessions, family-friendly fun, and a buzzing atmosphere that will leave you inspired and recharged.
    </p>
  </div>
</section>

{/* Zones Highlight Placeholder */}
<section className=" bg-white text-center">
  <div>
    {/* <ZonesAndHighlights /> */}
  </div>
</section>

{/* Mission and Vision Section */}
<section className="py-20 bg-[#f9f9f9]">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      
      {/* Text Content */}
      <div>
        <h2 className="text-4xl font-bold mb-6 text-[#dc5044]">
          Our Mission & Vision
        </h2>
        <p className="text-gray-700 mb-4 text-lg leading-relaxed">
          To inspire a healthier and happier community by making fitness <span className="text-[#70adb0] font-medium">fun, accessible</span>, and inclusive for people of all ages and skill levels through engaging experiences, energetic events, and educational opportunities.
        </p>
        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
          Our vision is to become <span className="text-[#f3c532] font-medium">India’s most vibrant fitness movement</span> — uniting individuals, families, and communities through a shared passion for health, well-being, and active living.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
  href="/event"
  className="inline-block bg-[#dc5044] hover:bg-[#b43b32] text-white px-6 py-3 rounded-full font-semibold text-lg transition-all shadow-lg"
  style={{
    boxShadow: '0 4px 1px rgba(248, 211, 5, 0.4)' // custom yellow shadow
  }}
>
  View Schedule
</Link>

        </div>
      </div>

      {/* Image Content */}
      <div className="relative">
        <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-[#f3c532]/40">
          <Image
            src="/images/image for website.jpg"
            alt="Festival attendees"
            width={800}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="absolute -bottom-6 -left-6 bg-[#dc5044] text-white p-5 rounded-lg shadow-xl hidden md:block">
          <p className="text-xl font-bold leading-tight">10+ Years</p>
          <p className="text-sm">Of Successful Events</p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Event Details */}
      <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-extrabold text-center text-[#dc5044] mb-14 tracking-wide">
      Event Details
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
      {/* Date & Time */}
      <div className="bg-white p-6 rounded-2xl shadow-xl text-center hover:shadow-[#f3c532]/50 transition-shadow duration-300">
        <div className="w-16 h-16 bg-[#f3c532]/20 rounded-full flex items-center justify-center mx-auto mb-5">
          <Calendar className="w-8 h-8 text-[#dc5044]" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">Date & Time</h3>
        <p className="text-gray-600">November 22-23, 2025</p>
        <p className="text-gray-600">9:00 AM - 6:00 PM</p>
      </div>

      {/* Location */}
      <div className="bg-white p-6 rounded-2xl shadow-xl text-center hover:shadow-[#70adb0]/50 transition-shadow duration-300">
        <div className="w-16 h-16 bg-[#70adb0]/20 rounded-full flex items-center justify-center mx-auto mb-5">
          <MapPin className="w-8 h-8 text-[#dc5044]" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">Location</h3>
        <p className="text-gray-600">Bengaluru Exhibition Grounds</p>
        <p className="text-gray-600">Karnataka, India</p>
      </div>

      {/* Attendees */}
      <div className="bg-white p-6 rounded-2xl shadow-xl text-center hover:shadow-[#f3c532]/50 transition-shadow duration-300">
        <div className="w-16 h-16 bg-[#f3c532]/20 rounded-full flex items-center justify-center mx-auto mb-5">
          <Users className="w-8 h-8 text-[#dc5044]" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">Attendees</h3>
        <p className="text-gray-600">5,000+ Participants</p>
        <p className="text-gray-600">From 30+ Countries</p>
      </div>

      {/* Sessions */}
      <div className="bg-white p-6 rounded-2xl shadow-xl text-center hover:shadow-[#70adb0]/50 transition-shadow duration-300">
        <div className="w-16 h-16 bg-[#70adb0]/20 rounded-full flex items-center justify-center mx-auto mb-5">
          <Clock className="w-8 h-8 text-[#dc5044]" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">Sessions</h3>
        <p className="text-gray-600">50+ Workshops</p>
        <p className="text-gray-600">20+ Keynote Speeches</p>
      </div>
    </div>
  </div>
</section>


      {/* Why Attend */}
      <div><WhyAttend /></div>
      <div><WhoShouldJoin /></div>
      
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

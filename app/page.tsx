import Image from "next/image"
import Link from "next/link"
import { Clock, MapPin, Users, ChevronRight } from "lucide-react"
import CountdownTimer from "@/components/countdown-timer"
// import SpeakerCard from "@/components/speaker-card"
import ScheduleTab from "@/components/schedule-tab"
import PricingCard from "@/components/pricing-card"
import SponsorGrid from "@/components/sponsor-grid"
// import GallerySection from "@/components/gallery-section"
import NewsletterForm from "@/components/newsletter-form"
import SpeakerSection from "@/components/speaker"
import Tecket from "@/public/images/h3-counter-bg.png"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="min-h-screen relative  text-white">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
       >
  <source src="/video/Background Clip.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 inline-block rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm" data-aos="fade-down">
              <p className="text-lg font-medium">November 22-23, 2025</p>
            </div>

            <h1
              className="mb-6 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight "
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Fitness for EveryBody
            </h1>

            <p className="mb-8 text-xl text-white/80" data-aos="fade-up" data-aos-delay="400">
              
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up" data-aos-delay="600">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Users size={18} />
                <span>5000+ Attendees</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Clock size={18} />
                <span>199 Days</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <MapPin size={18} />
                <span>KTPO - Whitefield, Bengaluru, India</span>
              </div>
            </div>

            <Link
              href="/tickets"
              className="inline-block bg-white text-purple-900 px-8 py-4 rounded-full font-bold text-lg transition-all hover:bg-purple-100 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              Buy Ticket Now
            </Link>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-20 bg-white shadow-sm">
  <div className="container mx-auto px-4">
    <div
      className="rounded-lg bg-no-repeat bg-cover bg-center min-h-[300px] flex items-center"
      style={{
        backgroundImage: `url(${Tecket.src})`,
      }}
    >
      <div className="w-full p-6 md:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
          {/* Left Section */}
          <div className="space-y-3 text-black pl-15 py-10">
            <h3 className="text-2xl md:text-3xl font-bold">Event Starting In</h3>
            <p className="">Secure your seat now</p>
            <Link
              href="/tickets"
              className="inline-block bg-orange-600 text-white px-5 py-2 rounded-md font-medium hover:bg-purple-700 transition-colors"
            >
              Buy Ticket
            </Link>
          </div>

          {/* Countdown Timer */}
          <div className="lg:col-span-3 mt-6 lg:mt-0 lg:pr-40 text-white">
            <CountdownTimer targetDate="2025-11-22T09:00:00" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Event Stats Section */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
  {/* Decorative Circles */}
  <div className="absolute top-0 right-0 w-40 h-40 sm:w-64 sm:h-64 bg-pink-500 rounded-full -translate-y-1/2 translate-x-1/2 z-0 pointer-events-none"></div>
  <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-64 sm:h-64 bg-amber-500 rounded-full translate-y-1/2 -translate-x-1/2 z-0 pointer-events-none"></div>

  {/* Content */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      {/* Text Section */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Join This Event
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Bengaluru Fitness Festival is more than just an event – it’s a movement to make health and fitness fun, accessible, and inclusive. Whether you're a beginner or a pro, young or old, this festival welcomes everyone with open arms and energetic vibes.
        </p>
        <p className="text-gray-600">
          Expect high-energy workouts, educational sessions, fun activities for families, and a buzzing atmosphere that will leave you inspired and recharged.
        </p>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-4xl font-bold text-purple-600 mb-2">120+</h3>
          <p className="text-gray-700">Attendees</p>
        </div>
        <div className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-4xl font-bold text-pink-500 mb-2">15+</h3>
          <p className="text-gray-700">Workshops</p>
        </div>
        <div className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-4xl font-bold text-amber-500 mb-2">3</h3>
          <p className="text-gray-700">Days</p>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-gray-100 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="pt-8">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/images/gym1.jpg"
                      alt="Conference"
                      width={400}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div>
                  <div className="rounded-lg overflow-hidden shadow-lg mb-4">
                    <Image
                      src="/images/gym2.jpg"
                      alt="Conference"
                      width={400}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/images/gym3.jpg"
                      alt="Conference"
                      width={400}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              {/* <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 rounded-full z-0"></div> */}
            </div>

            <div>
              <h5 className="text-purple-600 font-semibold mb-4">An event for</h5>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Get curious. Be inspired. Create your future.
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                We’re inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their knees, try new things, to be vulnerable, and to have epic adventures
                </p>
                {/* <p>
                  This conference is designed to help you expand your knowledge, connect with like-minded professionals,
                  and discover new opportunities in the tech world.
                </p> */}
              </div>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                >
                  Learn More About Event
                  <ChevronRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
      <div className="bg-gray-200 shadow-sm">
              <SpeakerSection />
              <div className="text-center mt-12 ">
            <Link
              href="/speakers"
              className="inline-flex items-center border border-white text-white px-6 py-3 my-10 rounded-lg font-medium hover:bg-white hover:text-purple-900 transition-colors bg-orange-600"
            >
              View All Speakers
              <ChevronRight size={16} className="ml-2" />
            </Link>
          </div>
      </div>
      </section>
      {/* Speakers Section */}
      {/* <section className="py-16 md:py-24 bg-gradient-to-r from-purple-600 via-pink-500 to-amber-300 shadow-sm text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h5 className="text-purple-300 font-semibold mb-4">Speakers</h5>
            <h2 className="text-3xl md:text-4xl font-bold mb-6"></h2>
            {/* <p className="max-w-2xl mx-auto text-white/80">
              Learn from the best minds in the industry who will share their knowledge and experiences
            </p> 
          </div>

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <SpeakerCard name="Mike Fermalin" role="Career Expert" image="/placeholder.svg?height=400&width=400" />
            <SpeakerCard name="Anna Blair" role="Founder, Marks" image="/placeholder.svg?height=400&width=400" />
            <SpeakerCard
              name="Trevor J. Bell"
              role="Lead Trainer, Blids"
              image="/placeholder.svg?height=400&width=400"
            />
            <SpeakerCard name="Michael Rooker" role="Developer Expert" image="/placeholder.svg?height=400&width=400" />
          </div> 
         

          
        </div>
      </section> */}

      {/* Schedule Section */}
      <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden bg-white ">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full -translate-y-1/2 translate-x-1/2 z-0"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100 rounded-full translate-y-1/2 -translate-x-1/2 z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h5 className="text-purple-600 font-semibold mb-4">Schedule</h5>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Without waiting for you to catch up</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Check out our event schedule and plan your conference experience
            </p>
          </div>

          <ScheduleTab />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-blue-400 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h5 className=" font-semibold mb-4">Event Pricing</h5>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Book your seat now</h2>
            <p className="max-w-2xl mx-auto text-white/80">
              Choose the ticket that best suits your needs and secure your place at the conference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="General Pass"
              price={499}
              color="blue"
              features={["Entry To All General Zones", "Participation Fitness Sessions & Workshops", "Digital Event Certificate", "Festival Kit (Wristband, Water Bottle, Event Guide)","INCLUDES: 1 Healthy Snack + Eenergy Drink Per Day"]}
            />
            <PricingCard
              title="All-Access Pass"
              price={1399}
              color="pink"
              features={["Aaccess To Sessions & Front-Stage Spots", "Event Certificate", "Premium Festival Kit (Bag, T-shirt, Goodies)", "1-On-1 Expert Consult Slot (Nutrition or Fitness)", "INCLUDES: Daily Lunch (Healthy Veg/Non-veg combo) + 2 Snacks + Drinks"]}
              highlighted={true}
            />
            <PricingCard
              title="Group Pass(5+ People)"
              price={243}
              color="amber"
              features={[
                "All-Access Level Benefits",
                "Team Fitness Challenge Entry",
                "Group Photo + Wearable Band",
                "Event Certificate",
                "INCLUDES: Daily Lunch + Energy Booster + Snack Combo",
              ]}
            />
            <PricingCard
              title="Senior wellness Pass(Age 60+)"
              price={499}
              color="pink"
              features={[
                "Entry to wellness-specific sessions (low impact)",
                "Free BP/sugar check, physiotherapy consultation",
                "Rest & relax zone access",
                "INCLUDES: Healthy sattvic lunch + 1 snack + green tea",
              ]}
            />
            <PricingCard
              title="Basic Pass(Age 60+)"
              price={43}
              color="blue"
              features={[
                "Back Row Seat",
                "Free Lunch & Snacks",
                "Event Certificate",
                "1 Workshop",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h5 className="text-purple-600 font-semibold mb-4">Sponsors</h5>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">50+ leading companies with us</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Our sponsors help make this event possible and bring amazing resources to our attendees
            </p>
          </div>

          <SponsorGrid />
        </div>
      </section>

      {/* Gallery Section */}
      {/* <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h5 className="text-purple-600 font-semibold mb-4">Previous Gallery</h5>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Past event memories</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Take a look at the highlights from our previous conferences
            </p>
          </div>

          <GallerySection />
        </div>
      </section> */}

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-purple-900 to-violet-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h5 className="text-purple-300 font-semibold mb-4">Subscribe Newsletter</h5>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Subscribe to receive daily news</h2>
              <p className="text-white/80">
                Stay updated with the latest conference news, speaker announcements, and special offers
              </p>
            </div>

            <div>
              <NewsletterForm />
            </div>
            
          </div>
         
        </div>
      </section>
     
    </main>
  )
}


import Hero from "@/components/Homehero"
import EventInfoSection from "@/components/event-info-section"
import WhyAttend from "@/components/why-attend"
import Speakers from "@/components/speakers"
import Schedule from "@/components/schedule"
import Pricing from "@/components/pricing"


export default function Home() {
  return (
    <main className="">
      {/* Hero Section */}
      <Hero /> 
      <EventInfoSection />
      <WhyAttend />
      <Speakers />
      <Schedule />

      {/* Pricing Section */}
      <Pricing />
      
    </main>
  )
}

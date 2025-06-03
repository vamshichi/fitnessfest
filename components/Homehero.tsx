"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Timer() {
 
  return (
    <div
      className=" lg:min-h-[90vh] bg-gray-900 relative overflow-hidden"
     style={{
  backgroundImage: "url('/images/image1.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderBottomLeftRadius: "10%",
  borderBottomRightRadius: "10%",
}}
    >
      {/* Overlay */}
      {/* <div className="absolute  inset-0 bg-blue-100 opacity-40"></div> */}
      <div className="absolute  inset-0 bg-black opacity-15"></div>
      {/* Hero Section */}
      {/* Hero Section */}
<div className="relative min-h-screen flex items-end"> {/* changed items-center -> items-end, added pt-24 for top gap */}
  <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    {/* Hero Image */}
    <div className="relative order-1 lg:order-1 flex justify-center">
      <div className="relative lg:w-full">
        <Image
          src="/images/png website.png" 
          alt="Hero Image"
          width={600}
          height={400}
          className="w-full h-auto rounded-lg shadow-lg object-cover"
        />
      </div>
    </div>

    {/* Text Content */}
    <div className="hidden md:block text-white order-2 lg:order-2 pb-15">
      <div className="space-y-6">
        <div className="text-center">
        <h1 className="text-4xl sm:text-3xl lg:text-3xl font-bold leading-tight">
          ANNUAL BUSINESS </h1>
          
          <h1 className="text-4xl sm:text-3xl lg:text-6xl font-bold leading-tight text-[#fa0368]">CONFERENCE</h1>
          <h1 className="text-4xl sm:text-3xl lg:text-3xl font-bold leading-tight">EVENT 2022</h1>
          <div className="w-16 h-1 bg-white mx-auto mt-3"></div>


        </div>
        
        <p className="text-center sm:text-sm text-gray-300 max-w-md mx-auto">
          Animi ab libero! Blanditiis, luctus morbi eget esse, ridiculus. Quos laborum sunt facere primis magni cumque.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-4  justify-center">
          <Button className="bg-[#fa0368] hover:bg-pink-600 text-white px-8 py-6 rounded-full font-medium text-lg">
            BOOK RESERVATION
          </Button>
          <Button
            variant="outline"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-800 px-8 py-6 rounded-full font-medium text-lg"
          >
            VIEW SCHEDULE
          </Button>
        </div>
      </div>
    </div>
  </div>
</div>


        {/* Countdown Timer */}
        {/* Countdown Timer */}

      </div>
    
  )
}

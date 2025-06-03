"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
// import Image from "next/image"

export default function Component() {
  const [timeLeft, setTimeLeft] = useState({
    days: 217,
    hours: 22,
    minutes: 30,
    seconds: 28,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden " style={{ backgroundImage: "url('/images/Banner for website (1).png')" }}>
      {/* Hero Section */}
      <div className="absolute inset-0 bg-black opacity-85"></div>
      <div className="relative min-h-screen flex items-center py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  
  {/* Hero Image - now on the left */}
  <div className="relative order-1 lg:order-1 flex justify-center">
    <div className="absolute inset-0 bg-pink-500 rounded-full scale-75 opacity-80 pointer-events-none z-0"></div>
    <div className="relative z-10 w-[90%] sm:w-[70%] md:w-[80%] lg:w-full">
      {/* <Image
        src=""
        alt=""
        width={600}
        height={600}
        className=""
      /> */}
    </div>
  </div>

  {/* Left Content - now on the right */}
  <div className="text-white order-2 lg:order-2">
    <div className="space-y-6">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
        ANNUAL BUSINESS
        <br />
       <span className="text-[#fa0368]">CONFERENCE</span>
        <br />
        EVENT 2022
      </h1>
      <div className="w-16 h-1 bg-white"></div>

      <p className="text-base sm:text-lg text-gray-300 max-w-xl">
        Animi ab libero! Blanditiis, luctus morbi eget esse, ridiculus. Quos laborum sunt facere primis magni cumque.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <Button className="bg-[#fa0368] hover:bg-pink-600 text-white px-8 py-3 rounded-full font-medium text-lg">
          BOOK RESERVATION
        </Button>
        <Button
          variant="outline"
          className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-800 px-8 py-3 rounded-full font-medium text-lg"
        >
          VIEW SCHEDULE
        </Button>
      </div>
    </div>
  </div>
</div>

{/* Countdown Timer */}
<div
  className="hidden sm:flex w-full mt-10 mb-2 justify-center
    lg:absolute lg:bottom-6 lg:left-3/4 lg:transform lg:-translate-x-1/2"
>
  <div
    className="bg-white rounded-2xl shadow-2xl
      px-4 py-3
      max-w-[250px] sm:max-w-md
      w-auto"
  >
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center">
      <div>
        <div className="text-2xl sm:text-3xl font-extrabold text-[#fa0368]">{timeLeft.days}</div>
        <div className="text-xs sm:text-base text-gray-600 font-semibold mt-1">Days</div>
      </div>
      <div>
        <div className="text-2xl sm:text-3xl font-extrabold text-[#fa0368]">{timeLeft.hours}</div>
        <div className="text-xs sm:text-base text-gray-600 font-semibold mt-1">Hours</div>
      </div>
      <div>
        <div className="text-2xl sm:text-3xl font-extrabold text-[#fa0368]">{timeLeft.minutes}</div>
        <div className="text-xs sm:text-base text-gray-600 font-semibold mt-1">Minutes</div>
      </div>
      <div>
        <div className="text-2xl sm:text-3xl font-extrabold text-[#fa0368]">{timeLeft.seconds}</div>
        <div className="text-xs sm:text-base text-gray-600 font-semibold mt-1">Seconds</div>
      </div>
    </div>
  </div>
</div>


        {/* Curved Bottom SVG */}
   <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-10">
  <svg viewBox="0 0 1440 120" className="w-full h-full block">
    <path
      d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L0,120Z"
      fill="white"
    />
  </svg>
</div>

{/* Patch any remaining visibility */}
<div className="absolute bottom-0 w-full h-[20px] bg-white z-[5]" />
      </div>
    </div>
  )
}

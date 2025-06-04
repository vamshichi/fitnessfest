"use client"

import { useState } from "react"
import { events } from "@/data/events"
import { Button } from "@/components/ui/button"
import clsx from "clsx"

export default function Schedule() {
  const [selectedDate, setSelectedDate] = useState("12 October 2025")

  const filteredEvents = events.filter((e) => e.date === selectedDate)

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 bg-gray-50">
      {/* Header */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h6 className="text-pink-600 text-sm font-semibold mb-2">SCHEDULE DETAILS</h6>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            INFORMATION OF EVENT SCHEDULE!
          </h3>
          <p className="text-gray-600">
            Quam amet tristique adipisicing incididunt arcu, excepturi molestie turpis deserunt ducimus
            malesuada minus mauris veniam.
          </p>
        </div>

        {/* Circles as Date Filters */}
        <div className="mt-10 flex justify-center items-center">
          <div className="relative flex md:inline-block">
            {/* Left Circle */}
            <div
              onClick={() => setSelectedDate("12 October 2025")}
              className={clsx(
                "cursor-pointer w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-40 rounded-full flex flex-col items-center justify-center z-10 transition-all duration-300",
                selectedDate === "12 October 2025"
                  ? "bg-pink-500 text-white shadow-lg"
                  : "bg-gray-200 text-gray-800"
              )}
            >
              <span className="text-sm sm:text-base md:text-lg font-bold">23RD FEB</span>
              <span
                className={clsx(
                  "text-xs sm:text-sm font-semibold",
                  selectedDate === "12 October 2025" ? "text-white" : "text-pink-600"
                )}
              >
                SUNDAY
              </span>
            </div>

            {/* Right Circle */}
            <div
              onClick={() => setSelectedDate("13 October 2025")}
              className={clsx(
                `cursor-pointer w-24 h-24 sm:w-28 sm:h-28 md:w-44 md:h-44
                rounded-full flex flex-col items-center justify-center shadow-lg z-20
                -ml-1 sm:-ml-1 md:ml-0 md:absolute md:left-[80%] md:top-0 transition-all duration-300`,
                selectedDate === "13 October 2025"
                  ? "bg-pink-500 text-white"
                  : "bg-gray-200 text-gray-800"
              )}
            >
              <span className="text-sm sm:text-base md:text-lg font-bold">24TH FEB</span>
              <span
                className={clsx(
                  "text-xs sm:text-sm font-semibold",
                  selectedDate === "13 October 2025" ? "text-white" : "text-pink-600"
                )}
              >
                MONDAY
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Items */}
      <div className="space-y-8 max-w-6xl mx-auto px-4">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((item, index) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-[30%_50%_20%] gap-0">
                <div className="bg-pink-600 text-white p-6 text-center">
                  <h6 className="text-sm mb-2">{item.timeRange}</h6>
                  <h6 className="text-lg font-semibold">{item.title}</h6>
                </div>

                <div className="p-6">
                  <h5 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">{item.description}</h5>
                  <p className="text-gray-600 mb-6">Location: {item.location}</p>
                  <Button
                    variant="outline"
                    className="border-pink-600 text-pink-600 hover:bg-orange-500 hover:text-white"
                  >
                    LEARN MORE
                  </Button>
                </div>

                <div className="text-white text-center flex justify-center items-center p-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-40 h-40 object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">No events found for this date.</div>
        )}
      </div>

      <div className="text-center mt-12">
        <Button className="bg-pink-600 hover:bg-orange-600 text-white px-6 py-5 md:px-8 md:py-5 rounded-3xl">
          VIEW MORE DETAILS
        </Button>
      </div>
    </section>
  )
}

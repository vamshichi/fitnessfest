import React from "react";

const speakers = [
  {
    name: "Mike Fermalin",
    title: "Career Expert",
    color: "border-pink-500",
  },
  {
    name: "Mike Fermalin",
    title: "Career Expert",
    color: "border-pink-500",
  },
  {
    name: "Mike Fermalin",
    title: "Career Expert",
    color: "border-pink-500",
  },
  {
    name: "Mike Fermalin",
    title: "Career Expert",
    color: "border-pink-500",
  },
  {
    name: "Mike Fermalin",
    title: "Career Expert",
    color: "border-pink-500",
  },
  {
    name: "Anna Blair",
    title: "Founder, Marks",
    color: "border-blue-400",
  },
  {
    name: "Trevor J. Bell",
    title: "Lead Trainer, Blids",
    color: "border-pink-600",
  },
  {
    name: "Michael Rooker",
    title: "Developer Expert",
    color: "border-purple-600",
  },
];

export default function SpeakerSection() {
  return (
    <div className="py-12 px-4 text-center">
      <p className=" font-semibold uppercase mb-2">Speakers</p>
      <h2 className="text-3xl font-extrabold  mb-8">
        Leading Fitness Speakers
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 justify-items-center">
        {speakers.map((speaker, idx) => (
          <div key={idx} className="group relative flex flex-col items-center">
            {/* Wrapper to align the rotating border and image */}
            <div className="relative w-[220px] h-[220px]">
              {/* Rotating dotted border */}
              <div
                className={`absolute inset-0 rounded-full border-3 border-dashed ${speaker.color} transition-transform duration-500 group-hover:animate-spin`}
              ></div>

              {/* Speaker image placeholder */}
              <div className="w-full h-full bg-gray-300 rounded-full flex items-center justify-center text-black text-xl z-10">
                220x220
              </div>
            </div>

            {/* Speaker Info */}
            <h3 className="mt-4 text-lg font-extrabold text-slate-900">
              {speaker.name}
            </h3>
            <p className="text-sm text-gray-600">{speaker.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

import { MapPin, Calendar, Check } from "lucide-react"
import Image from "next/image"

export default function EventInfoSection() {
  return (
    <section className="pt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Side - Single Image */}
          <div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/Untitled design.png"
                alt="Business presentation"
                width={800}
                height={600}
                className="h-full w-full bg-transparent object-cover"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 sm:mx-15 md:mx-10">
            <div>
              <p className="text-[#fa0368] font-medium text-sm uppercase tracking-wide mb-2">INTRODUCTION</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                KNOW MORE ABOUT OUR
                <br />
                <span className="text-gray-700">GRAND EVENT</span>
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Consequat sociosqu sem officiis aute ridiculus repellat in aliquip at, metus sociosqu veritatis cubilia ac
              soluta? Faucibus ipsum, incidunt eros.
            </p>

            <div className="max-w-120 space-y-4 bg-gray-50 p-8 rounded-lg shadow border-b-3 border-[#fa0368]">
              <div className="flex items-start space-x-3">
                <div className="bg-pink-100 rounded-full p-1 mt-1">
                  <Check className="w-4 h-4 text-pink-500" />
                </div>
                <p className="text-gray-600">
                  Lusto tenetur temporibus repellendus aspernatur, blandit ullam cupidatat quisquam lacinia.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-pink-100 rounded-full p-1 mt-1">
                  <Check className="w-4 h-4 text-pink-500" />
                </div>
                <p className="text-gray-600">
                  Minima mattis laudantium nobis odit explicabo sapien nunc. Reprehenderit molestiae.
                </p>
              </div>
            </div>

            {/* Signature */}
            <div>
              <div className="flex items-center space-x-4">
                <div className="text-2xl font-script text-gray-700" style={{ fontFamily: "cursive" }}>
                  Gm Heller
                </div>
                <div>
                  <p className="font-semibold text-gray-800">MD WILLIAM HOUSTON</p>
                  <p className="text-sm text-gray-500">Event Organizer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Event Details Section */}
      <div className="w-full bg-gray-200 mt-40 lg:px-40 relative">
        <div className="sm:py-5 px-4 md:px-16 lg:px-32 grid md:grid-cols-2 gap-8 lg:-translate-y-1/2 items-center max-w-6xl mx-auto px-4">
          <div className="bg-white p-8 rounded-4xl shadow border">
            <div className="flex items-center space-x-6">
              <div className="bg-[#fa0368] rounded-2xl p-3">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">WHERE IS THE EVENT :</h3>
                <p className="text-gray-600 text-sm">
                  2218 Baker Street, P.O Box 353 Park Road,
                  <br />
                  San Francisco USA - 215431
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-4xl shadow border">
            <div className="flex items-center space-x-4">
              <div className="bg-black rounded-2xl p-3">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">WHEN IS THE EVENT :</h3>
                <p className="text-gray-600 text-sm">
                  ( Sunday to Wednesday ) 20 January 2022
                  <br />
                  to 24 January 2022
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-20 pt-4 max-w-6xl mx-auto px-4">
          <div className="text-center border-r border-black pr-4">
            <div className="text-4xl lg:text-7xl font-bold text-[#223645] mb-2">
              220<span className="text-[#223645]">+</span>
            </div>
            <p className="text-gray-600 text-lg uppercase tracking-wide">TOTAL JOURNALIST</p>
          </div>
          <div className="text-center border-r border-black pr-4">
            <div className="text-4xl lg:text-7xl font-bold text-[#223645] mb-2">
              35<span className="text-[#223645]">+</span>
            </div>
            <p className="text-[#223645] text-lg uppercase tracking-wide">EVENT SPEAKERS</p>
          </div>
          <div className="text-center border-r border-black pr-4">
            <div className="text-4xl lg:text-7xl font-bold text-[#223645] mb-2">
              42<span className="text-[#223645]">+</span>
            </div>
            <p className="text-[#223645] text-lg uppercase tracking-wide">EVENT SESSIONS</p>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-7xl font-bold text-gray-800 mb-2">
              25<span className="text-[#223645]">+</span>
            </div>
            <p className="text-[#223645] text-lg uppercase tracking-wide">SPONSORS & PARTNERS</p>
          </div>
        </div>
      </div>
    </section>
  )
}

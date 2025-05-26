import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
   <footer className="bg-gray-900 text-white pt-16 pb-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">Bengaluru Fitness Festival 2025</h3>
                <p className="text-gray-400 mb-4">
                Organized by Maxx Business Media Pvt. Ltd.
                </p>
                <div className="flex space-x-4">
                  <Link href="https://www.facebook.com/BengaluruFitnessFest/" className="text-gray-400 hover:text-white">
                    <Facebook size={20} />
                  </Link>
                  <Link href="https://x.com/BlrFitnessFest" className="text-gray-400 hover:text-white">
                    <Twitter size={20} />
                  </Link>
                  <Link href="https://www.instagram.com/bengaluru_fitness_fest/" className="text-gray-400 hover:text-white">
                    <Instagram size={20} />
                  </Link>
                  <Link href="https://www.linkedin.com/company/bengaluru-fitness-fest/" className="text-gray-400 hover:text-white">
                    <Linkedin size={20} />
                  </Link>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-gray-400 hover:text-white">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-gray-400 hover:text-white">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/speakers" className="text-gray-400 hover:text-white">
                      Speakers
                    </Link>
                  </li>
                  <li>
                    <Link href="/schedule" className="text-gray-400 hover:text-white">
                      Schedule
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-gray-400 hover:text-white">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Event Details</h4>
                <ul className="space-y-2">
                  <li className="text-gray-400">July 22-23, 2024</li>
                  <li className="text-gray-400">KTPO convenction Center</li>
                  <li className="text-gray-400">White feald ,Bangaluru</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                <ul className="space-y-2">
                  <li className="text-gray-400">info@fitnessfest.in</li>
                  <li className="text-gray-400">+91 97427 11211</li>
                  <li className="text-gray-400">T9, 3rd Floor, Swastik Manandi Arcade, Seshadripuram, Bengaluru 560020</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <p className="text-center text-gray-500">Maxx Business Media Pvt. Ltd All rights reserved © 2025</p>
            </div>
          </div>
        </footer>
  )
}
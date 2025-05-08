import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Developer Conference 2024",
  description: "Join us for the biggest developer conference of the year",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <header className="bg-[#1A1A1A] shadow-sm sticky top-0 z-50">

          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-4">
              <Link href="/" className="text-2xl font-bold text-purple-900">
              <Image alt="Logo" src="/logo/logo2.png" width={300} height={150} className="h-25" />
              </Link>

              <nav className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-white hover:text-purple-600 font-medium">
                  Home
                </Link>
                <Link href="/about" className="text-white hover:text-purple-600 font-medium">
                  About
                </Link>
                <Link href="/speakers" className="text-white hover:text-purple-600 font-medium">
                  Speakers
                </Link>
                <Link href="/schedule" className="text-white hover:text-purple-600 font-medium">
                  Schedule
                </Link>
                <Link href="/blog" className="text-white hover:text-purple-600 font-medium">
                  Blog
                </Link>
                <Link href="/contact" className="text-white hover:text-purple-600 font-medium">
                  Contact
                </Link>
              </nav>

              <div className="flex items-center space-x-4">
                <Link
                  href="/tickets"
                  className="hidden md:inline-block bg-orange-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                >
                  Buy Ticket
                </Link>

                <button className="md:hidden text-gray-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>

        {children}

        <footer className="bg-gray-900 text-white pt-16 pb-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">fitnessfest</h3>
                <p className="text-gray-400 mb-4">
                  The biggest developer conference of the year, bringing together experts and enthusiasts from around
                  the world.
                </p>
                <div className="flex space-x-4">
                  <Link href="#" className="text-gray-400 hover:text-white">
                    <Facebook size={20} />
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    <Twitter size={20} />
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    <Instagram size={20} />
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-white">
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
                  <li className="text-gray-400">July 17-19, 2024</li>
                  <li className="text-gray-400">Boston Conference Center</li>
                  <li className="text-gray-400">Boston, Canada</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                <ul className="space-y-2">
                  <li className="text-gray-400">info@devconf.com</li>
                  <li className="text-gray-400">+1 (123) 456-7890</li>
                  <li className="text-gray-400">123 Conference St, Boston, Canada</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <p className="text-center text-gray-500">© 2024 DevConf. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}

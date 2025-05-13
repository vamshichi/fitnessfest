'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-2">
          <Link href="/" className="text-2xl font-bold text-purple-900">
            <Image alt="Logo" src="/images/logo in black.png" width={200} height={200} className="ml-10" />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-black hover:text-purple-600 font-medium">Home</Link>
            <Link href="/about" className="text-black hover:text-purple-600 font-medium">About</Link>
            {/* <Link href="/speakers" className="text-black hover:text-purple-600 font-medium">Speakers</Link> */}
            <Link href="/schedule" className="text-black hover:text-purple-600 font-medium">Schedule</Link>
            {/* <Link href="/blog" className="text-black hover:text-purple-600 font-medium">Blog</Link> */}
            <Link href="/contact" className="text-black hover:text-purple-600 font-medium">Contact</Link>
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
  )
}

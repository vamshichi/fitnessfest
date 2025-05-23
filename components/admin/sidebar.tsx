"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Mail, Award, Dumbbell, Settings, Users, LogOut } from "lucide-react"
import { useAuth } from "@/lib/auth-context"

export default function AdminSidebar() {
  const pathname = usePathname()
  const { logout } = useAuth()

  const menuItems = [
    {
      title: "Dashboard",
      href: "/admin/dashboard",
      icon: <LayoutDashboard className="w-5 h-5" />,
    },
    {
      title: "Contact Submissions",
      href: "/admin/contacts",
      icon: <Mail className="w-5 h-5" />,
    },
    {
      title: "Award Votes",
      href: "/admin/votes",
      icon: <Award className="w-5 h-5" />,
    },
    {
      title: "Competition Registrations",
      href: "/admin/registrations",
      icon: <Dumbbell className="w-5 h-5" />,
    },
   
  ]

  return (
    <div className="w-64 bg-white border-r min-h-screen p-4 flex flex-col">
      <div className="mb-8 p-4">
        <h1 className="text-2xl font-bold text-[#dc5044]">Fitness Fest</h1>
        <p className="text-sm text-gray-500">Admin Panel</p>
      </div>

      <nav className="space-y-1 flex-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-4 py-3 text-sm rounded-lg ${
                isActive ? "bg-[#f3c532]/10 text-[#dc5044] font-medium" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <span className={`mr-3 ${isActive ? "text-[#dc5044]" : "text-gray-500"}`}>{item.icon}</span>
              {item.title}
            </Link>
          )
        })}
      </nav>

      <button
        onClick={() => logout()}
        className="flex items-center px-4 py-3 text-sm rounded-lg text-gray-600 hover:bg-gray-100 mt-auto"
      >
        <span className="mr-3 text-gray-500">
          <LogOut className="w-5 h-5" />
        </span>
        Logout
      </button>
    </div>
  )
}

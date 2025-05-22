"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { signOut } from "next-auth/react"
import { LayoutDashboard, Mail, Award, Dumbbell, Settings, LogOut, Users } from "lucide-react"

export default function AdminSidebar() {
  const pathname = usePathname()

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
    // {
    //   title: "Users",
    //   href: "/admin/users",
    //   icon: <Users className="w-5 h-5" />,
    // },
    // {
    //   title: "Settings",
    //   href: "/admin/settings",
    //   icon: <Settings className="w-5 h-5" />,
    // },
  ]

  return (
    <div className="w-64 bg-white border-r min-h-screen p-4">
      <div className="mb-8 p-4">
        <h1 className="text-2xl font-bold text-[#dc5044]">Fitness Fest</h1>
        <p className="text-sm text-gray-500">Admin Panel</p>
      </div>

      <nav className="space-y-1">
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

      <div className="absolute bottom-4 w-56">
        <button
          onClick={() => signOut({ callbackUrl: "/admin/login" })}
          className="flex items-center px-4 py-3 text-sm text-gray-600 hover:bg-gray-100 rounded-lg w-full"
        >
          <LogOut className="w-5 h-5 mr-3 text-gray-500" />
          Sign Out
        </button>
      </div>
    </div>
  )
}

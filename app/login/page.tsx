"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { signIn, useSession } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"

export default function LoginPage() {
  const router = useRouter()
  const { toast } = useToast()
  const { data: session, status } = useSession()
  const searchParams = useSearchParams()
  // Always default to dashboard if no callback URL is provided
  const callbackUrl = searchParams.get("callbackUrl") || "/admin/dashboard"
  const error = searchParams.get("error")

  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  // If already authenticated, redirect to dashboard
  useEffect(() => {
    if (status === "authenticated") {
      window.location.href = "/admin/dashboard"
    }
  }, [status])

  // Handle error from URL
  useEffect(() => {
    if (error) {
      setErrorMessage(error === "CredentialsSignin" ? "Invalid email or password" : `Authentication error: ${error}`)
    }
  }, [error])

  // Function to create admin user
  const createAdminUser = async () => {
    try {
      setIsLoading(true)
      const response = await fetch("/api/debug")
      const data = await response.json()

      if (data.error) {
        setErrorMessage(`Failed to create admin user: ${data.error}`)
      } else {
        toast({
          title: "Success",
          description: data.message,
        })
        setEmail("admin@fitnessfest.com")
        setPassword("admin123")
      }
    } catch (error) {
      setErrorMessage(`Error: ${error instanceof Error ? error.message : String(error)}`)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setErrorMessage("")

    try {
      // Use callbackUrl directly in signIn to ensure proper redirection
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
        callbackUrl: "/admin/dashboard", // Explicitly set to dashboard
      })

      if (result?.error) {
        setErrorMessage(`Authentication failed: ${result.error}`)
      } else {
        toast({
          title: "Success",
          description: "Logged in successfully",
        })
        // Force redirect to dashboard
        window.location.href = "/admin/dashboard"
      }
    } catch (error) {
      setErrorMessage(`Error: ${error instanceof Error ? error.message : String(error)}`)
    } finally {
      setIsLoading(false)
    }
  }

  // If still loading session, show loading state
  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#dc5044] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Image src="/logo2.png" alt="Fitness Fest Logo" width={150} height={75} />
          </div>
          <h1 className="text-3xl font-bold text-[#dc5044]">Admin Login</h1>
          <p className="text-gray-600 mt-2">Sign in to access the admin dashboard</p>
        </div>

        {errorMessage && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">{errorMessage}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@fitnessfest.com"
              required
              className="border-[#70adb0]/30 focus:ring-[#70adb0]"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="border-[#70adb0]/30 focus:ring-[#70adb0]"
            />
          </div>

          <Button type="submit" className="w-full bg-[#dc5044] hover:bg-[#c03c32] text-white" disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-4">Having trouble? Try creating the admin user:</p>
          <Button onClick={createAdminUser} variant="outline" className="w-full" disabled={isLoading}>
            {isLoading ? "Processing..." : "Create Admin User"}
          </Button>
        </div>
      </div>
    </div>
  )
}

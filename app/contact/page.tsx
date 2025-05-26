"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Phone, MapPin, Send, Calendar, Award, Dumbbell } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"
import { submitContactForm } from "./actions"

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [activeTab, setActiveTab] = useState("general")

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(event.target as HTMLFormElement)
      formData.append("type", activeTab)

      // Call the server action
      const result = await submitContactForm(formData)

      if (result.success) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
          variant: "default",
        })

        // Reset the form
        const form = event.target as HTMLFormElement
        form.reset()

        console.log("Contact form submitted successfully with ID:", result.id)
      } else {
        throw new Error(result.error || "Something went wrong")
      }
    } catch (error: any) {
      console.error("Contact form submission error:", error)
      toast({
        title: "Error",
        description: error.message || "Failed to send your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative text-white py-24">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/fitness-festival-crowd.png')" }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#dc5044] to-[#70adb0] opacity-70" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 uppercase">Get In Touch</h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Have questions about Fitness Fest? We're here to help. Reach out to our team for information about events,
              competitions, or sponsorship opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#dc5044]">Connect With Us</h2>
              <p className="text-gray-600 mb-8">
                Whether you have questions about our events, need assistance with registration, or want to explore
                sponsorship opportunities, our team is ready to assist you.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-[#f3c532]/20 p-4 rounded-full mr-5">
                    <Mail className="w-6 h-6 text-[#dc5044]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                    <p className="text-gray-600">info@fitnessfest.com</p>
                    {/* <p className="text-gray-600">support@fitnessfest.com</p> */}
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#f3c532]/20 p-4 rounded-full mr-5">
                    <Phone className="w-6 h-6 text-[#dc5044]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                    <p className="text-gray-600">+91 97427 11211</p>
                    <p className="text-gray-600">Mon-Fri: 9:30am - 6:30pm</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#f3c532]/20 p-4 rounded-full mr-5">
                    <MapPin className="w-6 h-6 text-[#dc5044]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Location</h3>
                    <p className="text-gray-600">T9, 3rd Floor, Swastik Manandi Arcade, Seshadripuram, Bengaluru 560020</p>
                    {/* <p className="text-gray-600">123 Fitness Avenue</p>
                    <p className="text-gray-600">Bengaluru, India</p> */}
                  </div>
                </div>

                {/* <div className="flex items-start">
                  <div className="bg-[#f3c532]/20 p-4 rounded-full mr-5">
                    <Calendar className="w-6 h-6 text-[#dc5044]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Next Event</h3>
                    <p className="text-gray-600">June 15-21, 2025</p>
                    <p className="text-gray-600">Bengaluru Convention Center</p>
                  </div>
                </div> */}
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4 text-[#70adb0]">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-[#f3c532]/20 flex items-center justify-center hover:bg-[#f3c532] transition-colors"
                  >
                    <svg className="w-5 h-5 text-[#dc5044]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-[#f3c532]/20 flex items-center justify-center hover:bg-[#f3c532] transition-colors"
                  >
                    <svg className="w-5 h-5 text-[#dc5044]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-[#f3c532]/20 flex items-center justify-center hover:bg-[#f3c532] transition-colors"
                  >
                    <svg className="w-5 h-5 text-[#dc5044]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-[#f3c532]/20 flex items-center justify-center hover:bg-[#f3c532] transition-colors"
                  >
                    <svg className="w-5 h-5 text-[#dc5044]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form with Tabs */}
            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-[#70adb0]">Send Us a Message</h2>

              <Tabs defaultValue="general" className="mb-6" onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-3 mb-6 bg-[#f3c532]/10">
                  <TabsTrigger
                    value="general"
                    className="flex items-center gap-2 data-[state=active]:bg-[#f3c532] data-[state=active]:text-black"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="hidden sm:inline">General</span>
                    <span className="sm:hidden">Inquiry</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="competitor"
                    className="flex items-center gap-2 data-[state=active]:bg-[#f3c532] data-[state=active]:text-black"
                  >
                    <Dumbbell className="w-4 h-4" />
                    <span className="hidden sm:inline">Exhibitor</span>
                    <span className="sm:hidden">Compete</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="sponsor"
                    className="flex items-center gap-2 data-[state=active]:bg-[#f3c532] data-[state=active]:text-black"
                  >
                    <Award className="w-4 h-4" />
                    <span className="hidden sm:inline">Sponsor</span>
                    <span className="sm:hidden">Sponsor</span>
                  </TabsTrigger>
                </TabsList>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <TabsContent value="general">
                    <div className="space-y-4">
                      <p className="text-sm text-gray-600 mb-4">
                        Have a question about Fitness Fest? Our team is ready to help you with any general inquiries.
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="competitor">
                    <div className="space-y-4">
                      <p className="text-sm text-gray-600 mb-4">
                        Interested in competing at Fitness Fest? Tell us about your experience and which competitions
                        you're interested in.
                      </p>
                      <div>
                        <label htmlFor="fitness-level" className="block text-sm font-medium text-gray-700 mb-1">
                          Fitness Level
                        </label>
                        <Select name="fitnessLevel">
                          <SelectTrigger className="border-[#70adb0]/30 focus:ring-[#70adb0]">
                            <SelectValue placeholder="Select your fitness level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="beginner">Beginner</SelectItem>
                            <SelectItem value="intermediate">Intermediate</SelectItem>
                            <SelectItem value="advanced">Advanced</SelectItem>
                            <SelectItem value="elite">Elite/Professional</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label htmlFor="competition-interest" className="block text-sm font-medium text-gray-700 mb-1">
                          Competition Interest
                        </label>
                        <Select name="competitionInterest">
                          <SelectTrigger className="border-[#70adb0]/30 focus:ring-[#70adb0]">
                            <SelectValue placeholder="Select competition" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="powerlifting">Powerlifting Challenge</SelectItem>
                            <SelectItem value="crossfit">CrossFit Championship</SelectItem>
                            <SelectItem value="marathon">Fitness Marathon</SelectItem>
                            <SelectItem value="obstacle">Obstacle Course</SelectItem>
                            <SelectItem value="yoga">Yoga & Flexibility</SelectItem>
                            <SelectItem value="team">Team Challenge</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                          Previous Competition Experience
                        </label>
                        <Textarea
                          id="experience"
                          name="experience"
                          placeholder="Tell us about your previous competition experience"
                          rows={3}
                          className="border-[#70adb0]/30 focus:ring-[#70adb0]"
                        />
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="sponsor">
                    <div className="space-y-4">
                      <p className="text-sm text-gray-600 mb-4">
                        Interested in sponsoring Fitness Fest? Let us know about your company and sponsorship interests.
                      </p>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                          Company Name
                        </label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Your company name"
                          className="border-[#70adb0]/30 focus:ring-[#70adb0]"
                        />
                      </div>
                      <div>
                        <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                          Company Website
                        </label>
                        <Input
                          id="website"
                          name="website"
                          placeholder="https://yourcompany.com"
                          className="border-[#70adb0]/30 focus:ring-[#70adb0]"
                        />
                      </div>
                      <div>
                        <label htmlFor="sponsorship-level" className="block text-sm font-medium text-gray-700 mb-1">
                          Sponsorship Level Interest
                        </label>
                        <Select name="sponsorshipLevel">
                          <SelectTrigger className="border-[#70adb0]/30 focus:ring-[#70adb0]">
                            <SelectValue placeholder="Select sponsorship level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="platinum">Platinum Sponsor</SelectItem>
                            <SelectItem value="gold">Gold Sponsor</SelectItem>
                            <SelectItem value="silver">Silver Sponsor</SelectItem>
                            <SelectItem value="bronze">Bronze Sponsor</SelectItem>
                            <SelectItem value="custom">Custom Package</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </TabsContent>

                  {/* Common fields for all tabs */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        className="border-[#70adb0]/30 focus:ring-[#70adb0]"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        required
                        className="border-[#70adb0]/30 focus:ring-[#70adb0]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="+1 (555) 123-4567"
                      className="border-[#70adb0]/30 focus:ring-[#70adb0]"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Message subject"
                      required
                      className="border-[#70adb0]/30 focus:ring-[#70adb0]"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      rows={5}
                      required
                      className="border-[#70adb0]/30 focus:ring-[#70adb0]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#dc5044] hover:bg-[#c03c32] text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#70adb0]">Find Us</h2>
            <p className="text-gray-600">Visit our venue of our upcoming event</p>
          </div>

          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
            {/* This would be a real map in production */}
            <Image src="/bengaluru-india-map.png" alt="Map location" fill className="object-cover" />
            <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-bold text-[#dc5044]">Fitness Fest HQ</h3>
              <p className="text-sm text-gray-600">123 Fitness Avenue, Bengaluru</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#dc5044]">Frequently Asked Questions</h2>
            <p className="text-gray-600">Find quick answers to common questions about Fitness Fest.</p>
          </div>

          <div className="max-w-3xl mx-auto grid gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#f3c532] hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2 text-[#70adb0]">How can I become a sponsor?</h3>
              <p className="text-gray-600">
                We offer various sponsorship packages to suit different needs and budgets. Please contact our
                sponsorship team through the form above or email sponsors@fitnessfest.com for detailed information.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#f3c532] hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2 text-[#70adb0]">
                Is there a deadline for competition registration?
              </h3>
              <p className="text-gray-600">
                Yes, competition registrations typically close 30 days before the event. However, we encourage early
                registration as spots fill up quickly, especially for popular categories.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#f3c532] hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2 text-[#70adb0]">How can I exhibit at Fitness Fest?</h3>
              <p className="text-gray-600">
                To exhibit at Fitness Fest, please fill out the contact form with your requirements or email us directly
                at exhibits@fitnessfest.com for information on booth availability and pricing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#f3c532] hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2 text-[#70adb0]">Are there age restrictions for competitions?</h3>
              <p className="text-gray-600">
                Most competitions are divided into age categories: 18-29, 30-39, 40-49, and 50+. Some events have junior
                divisions for participants under 18, with parental consent required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#dc5044] to-[#70adb0] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold mb-6 uppercase">Ready to Join Fitness Fest 2025?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Secure your spot at our upcoming fitness festival and be part of the most exciting fitness event of the
            year.
          </p>
          <Button
            size="lg"
            className="bg-[#f3c532] text-black hover:bg-[#e3b522] font-bold px-8 py-6 text-lg rounded-full"
          >
            Register Now
          </Button>
        </div>
      </section>
    </main>
  )
}

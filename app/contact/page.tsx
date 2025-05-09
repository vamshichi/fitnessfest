"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Phone, MapPin, Clock, Send, User, Briefcase } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { submitContactForm } from "./actions"

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [activeTab, setActiveTab] = useState("general")

  async function handleSubmit(event:any) {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.target)
    formData.append("type", activeTab)

    try {
      const result = await submitContactForm(formData)

      if (result.success) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
          variant: "default",
        })
        event.target.reset()
      } else {
        throw new Error(result.error || "Something went wrong")
      }
    } catch (error:any) {
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
      <section className="relative text-white py-20">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/images/contact.jpg')" }}
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-40" />

  {/* Content */}
  <div className="relative z-10 container mx-auto px-4">
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg md:text-xl opacity-90 mb-8">
        Have questions about Fitness Fest? We're here to help. Reach out to our team.
      </p>
    </div>
  </div>
</section>


      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Whether you have questions about our events, need assistance with registration, or want to explore
                sponsorship opportunities, our team is ready to assist you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                    <p className="text-gray-600">vamshi@maxpo.ae</p>
                    <p className="text-gray-600">info@maxpo.ae</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                    <p className="text-gray-600">+971 4 123 4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Location</h3>
                    <p className="text-gray-600">Fitness Fest</p>
                    <p className="text-gray-600">Benguluru</p>
                  </div>
                </div>

                {/* <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Office Hours</h3>
                    <p className="text-gray-600">Sunday - Thursday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Friday - Saturday: Closed</p>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Contact Form with Tabs */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

              <Tabs defaultValue="general" className="mb-6" onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-3 mb-6">
                  <TabsTrigger value="general" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span className="hidden sm:inline">General Inquiry</span>
                    <span className="sm:hidden">Inquiry</span>
                  </TabsTrigger>
                  <TabsTrigger value="speaker" className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span className="hidden sm:inline">Speaker Application</span>
                    <span className="sm:hidden">Speaker</span>
                  </TabsTrigger>
                  <TabsTrigger value="sponsor" className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    <span className="hidden sm:inline">Sponsorship</span>
                    <span className="sm:hidden">Sponsor</span>
                  </TabsTrigger>
                </TabsList>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <TabsContent value="general">
                    <div className="space-y-4">
                      <p className="text-sm text-gray-600 mb-4">
                        Have a question about our exhibitions? Our team is ready to help you with any general inquiries.
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="speaker">
                    <div className="space-y-4">
                      <p className="text-sm text-gray-600 mb-4">
                        Interested in speaking at one of our events? Tell us about your proposed talk and expertise.
                      </p>
                      <div>
                        <label htmlFor="talk-title" className="block text-sm font-medium text-gray-700 mb-1">
                          Talk Title
                        </label>
                        <Input id="talk-title" name="talkTitle" placeholder="Your proposed talk title" />
                      </div>
                      <div>
                        <label htmlFor="expertise" className="block text-sm font-medium text-gray-700 mb-1">
                          Areas of Expertise
                        </label>
                        <Input id="expertise" name="expertise" placeholder="e.g., Business, Technology, Marketing" />
                      </div>
                      <div>
                        <label htmlFor="previous-talks" className="block text-sm font-medium text-gray-700 mb-1">
                          Previous Speaking Experience
                        </label>
                        <Textarea
                          id="previous-talks"
                          name="previousTalks"
                          placeholder="Tell us about your previous speaking engagements"
                          rows={3}
                        />
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="sponsor">
                    <div className="space-y-4">
                      <p className="text-sm text-gray-600 mb-4">
                        Interested in sponsoring one of our exhibitions? Let us know about your company and sponsorship
                        interests.
                      </p>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                          Company Name
                        </label>
                        <Input id="company" name="company" placeholder="Your company name" />
                      </div>
                      <div>
                        <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                          Company Website
                        </label>
                        <Input id="website" name="website" placeholder="https://yourcompany.com" />
                      </div>
                      <div>
                        <label htmlFor="sponsorship-level" className="block text-sm font-medium text-gray-700 mb-1">
                          Sponsorship Level Interest
                        </label>
                        <Select name="sponsorshipLevel">
                          <SelectTrigger>
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
                      <Input id="name" name="name" placeholder="Your name" required />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <Input id="email" name="email" type="email" placeholder="Your email" required />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <Input id="subject" name="subject" placeholder="Message subject" required />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea id="message" name="message" placeholder="Your message" rows={5} required />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
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
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Find Us</h2>
          <div className="bg-white rounded-xl overflow-hidden shadow-lg h-96">
            {/* Replace with actual map component or iframe 
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Interactive Map Would Be Displayed Here</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Find quick answers to common questions about Maxpo Exhibitions.</p>
          </div>

          <div className="max-w-3xl mx-auto grid gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How can I become a sponsor?</h3>
              <p className="text-gray-600">
                We offer various sponsorship packages to suit different needs and budgets. Please contact our
                sponsorship team at sponsors@maxpo.ae for detailed information.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Is there a deadline for speaker applications?</h3>
              <p className="text-gray-600">
                Yes, speaker applications are typically due 2-3 months before the event. However, we encourage early
                submissions as slots fill up quickly.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How can I exhibit at your events?</h3>
              <p className="text-gray-600">
                To exhibit at one of our events, please fill out the contact form with your requirements or email us
                directly at exhibits@maxpo.ae for information on booth availability and pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Next Event?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Secure your spot at our upcoming exhibitions and be part of the most exciting business events in the region.
          </p>
          <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
            View Upcoming Events
          </Button>
        </div>
      </section>
    </main>
  )
}

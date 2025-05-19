import Image from "next/image"
import Link from "next/link"
import { Trophy, Star, Calendar, Users, Medal, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import NominationForm from "@/components/nomination-form"
// import NominationForm from "@/components/nomination-form"

export default function AwardsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-20 text-center text-white md:py-28">
        <div className="absolute inset-0 z-0 opacity-70">
        <video
  src="/video/Golden Animated Stars Award Video.mp4"
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
></video>

        </div>
        <div className="relative z-10 max-w-4xl space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Bengaluru Fitness Awards 2025
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90 md:text-xl">
            Celebrating excellence in fitness, wellness, and community impact across Bengaluru
          </p>
          {/* <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-white/90">
              Submit Nomination
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              View Past Winners
            </Button>
          </div> */}
        </div>
      </section>

      {/* Award Categories */}
      <section className="bg-white px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">Award Categories</h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Recognizing outstanding achievements across various fitness disciplines and contributions to the community
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Fitness Trainer of the Year",
                icon: <Trophy className="h-8 w-8 text-orange-500" />,
                description:
                  "Honoring trainers who have demonstrated exceptional skill, innovation, and client results.",
                criteria: ["Client testimonials", "Innovative training methods", "Community impact"],
              },
              {
                title: "Fitness Transformation",
                icon: <Star className="h-8 w-8 text-pink-500" />,
                description:
                  "Celebrating individuals who have achieved remarkable physical and mental transformations.",
                criteria: ["Before and after journey", "Overcoming challenges", "Sustained results"],
              },
              {
                title: "Wellness Advocate",
                icon: <Users className="h-8 w-8 text-purple-500" />,
                description:
                  "Recognizing those who promote holistic wellness and mental health in the fitness community.",
                criteria: ["Advocacy initiatives", "Educational content", "Community support"],
              },
              {
                title: "Fitness Entrepreneur",
                icon: <Medal className="h-8 w-8 text-yellow-500" />,
                description:
                  "Honoring innovative business leaders who have created impactful fitness ventures in Bengaluru.",
                criteria: ["Business innovation", "Growth metrics", "Customer satisfaction"],
              },
              {
                title: "Community Impact Award",
                icon: <Users className="h-8 w-8 text-green-500" />,
                description:
                  "Celebrating organizations or individuals making fitness accessible to underserved communities.",
                criteria: ["Outreach programs", "Inclusivity initiatives", "Measurable impact"],
              },
              {
                title: "Fitness Content Creator",
                icon: <Star className="h-8 w-8 text-blue-500" />,
                description:
                  "Recognizing creators who produce exceptional, educational fitness content across platforms.",
                criteria: ["Content quality", "Audience engagement", "Educational value"],
              },
            ].map((category, index) => (
              <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
                <CardHeader className="pb-4">
                  <div className="mb-2">{category.icon}</div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="mb-2 font-medium text-gray-700">Judging Criteria:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {category.criteria.map((criterion, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-orange-500"></div>
                        {criterion}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full justify-between text-orange-600 hover:text-orange-700">
                    View Details <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gray-50 px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">Awards Timeline</h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Key dates for the 2025 Bengaluru Fitness Awards process
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-orange-200 md:left-1/2 md:-ml-0.5"></div>

            <div className="space-y-12">
              {[
                {
                  date: "March 15, 2025",
                  title: "Nominations Open",
                  description: "Submissions begin for all award categories",
                  active: true,
                },
                {
                  date: "April 30, 2025",
                  title: "Nominations Close",
                  description: "Final deadline for all award submissions",
                  active: false,
                },
                {
                  date: "May 15, 2025",
                  title: "Finalists Announced",
                  description: "Top nominees in each category revealed",
                  active: false,
                },
                {
                  date: "June 15, 2025",
                  title: "Awards Ceremony",
                  description: "Winners announced during the Fitness Festival",
                  active: false,
                },
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div
                    className={`flex items-center md:justify-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                  >
                    {/* Timeline dot */}
                    <div
                      className={`absolute left-4 h-8 w-8 -translate-x-1/2 rounded-full border-4 ${
                        item.active ? "border-orange-200 bg-orange-500" : "border-orange-200 bg-white"
                      } md:left-1/2`}
                    >
                      {item.active && (
                        <div className="absolute inset-0.5 animate-ping rounded-full bg-orange-400"></div>
                      )}
                    </div>

                    {/* Content */}
                    <div
                      className={`ml-12 w-full md:ml-0 md:w-5/12 ${
                        index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                      }`}
                    >
                      <div
                        className={`rounded-lg ${
                          item.active ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white" : "bg-white"
                        } p-6 shadow-md`}
                      >
                        <div className="mb-2 flex items-center gap-2">
                          <Calendar className={`h-5 w-5 ${item.active ? "text-white" : "text-orange-500"}`} />
                          <span className="font-semibold">{item.date}</span>
                          {item.active && (
                            <Badge className="ml-auto bg-white/20 text-white hover:bg-white/30">Current Stage</Badge>
                          )}
                        </div>
                        <h3 className="mb-1 text-xl font-bold">{item.title}</h3>
                        <p className={item.active ? "text-white/90" : "text-gray-600"}>{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Past Winners & Nomination */}
      <section className="bg-white px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="nominate" className="w-full">
            <div className="mb-8 flex flex-col items-center justify-center">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="nominate">Submit Nomination</TabsTrigger>
                <TabsTrigger value="winners">Past Winners</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="nominate" className="mx-auto max-w-2xl">
              <div className="mb-8 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">Submit Your Nomination</h2>
                <p className="text-gray-600">
                  Nominate yourself or someone deserving for the 2025 Bengaluru Fitness Awards
                </p>
              </div>
              <div className="rounded-lg border p-6 shadow-sm">
                <NominationForm />
              </div>
            </TabsContent>

            <TabsContent value="winners">
              <div className="mb-8 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">Past Winners</h2>
                <p className="mx-auto max-w-3xl text-gray-600">
                  Celebrating the achievements of previous Bengaluru Fitness Awards recipients
                </p>
              </div>
              

              <div className="space-y-12">
                {[2024, 2023].map((year) => (
                  <div key={year} className="space-y-6">
                    <h3 className="inline-block rounded-full bg-orange-100 px-4 py-1 text-lg font-semibold text-orange-700">
                      {year} Winners
                    </h3>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {[
                        {
                          category: "Fitness Trainer of the Year",
                          winner: "Priya Sharma",
                          image: "/placeholder.svg?height=300&width=300",
                          description:
                            "Transformed her studio to help over 200 clients achieve their fitness goals through personalized training.",
                        },
                        {
                          category: "Fitness Transformation",
                          winner: "Rahul Verma",
                          image: "/placeholder.svg?height=300&width=300",
                          description:
                            "Lost 45kg through consistent training and nutrition, inspiring many through his journey.",
                        },
                        {
                          category: "Community Impact Award",
                          winner: "FitBengaluru Foundation",
                          image: "/placeholder.svg?height=300&width=300",
                          description:
                            "Provided free fitness classes to over 1,000 underprivileged children across the city.",
                        },
                      ].map((item, index) => (
                        <Card key={index} className="overflow-hidden">
                          <div className="aspect-square w-full overflow-hidden bg-gray-100">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.winner}
                              width={300}
                              height={300}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <CardContent className="p-6">
                            <Badge className="mb-2 bg-orange-100 text-orange-700 hover:bg-orange-200">
                              {item.category}
                            </Badge>
                            <h4 className="mb-2 text-xl font-semibold">{item.winner}</h4>
                            <p className="text-gray-600">{item.description}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Judges */}
      <section className="bg-gray-50 px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">Meet Our Judges</h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Our panel of industry experts who will evaluate nominations and select the winners
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                name: "Dr. Anjali Desai",
                role: "Sports Medicine Specialist",
                image: "/placeholder.svg?height=400&width=400",
                bio: "With over 15 years of experience in sports medicine, Dr. Desai has worked with Olympic athletes and fitness enthusiasts alike.",
              },
              {
                name: "Vikram Menon",
                role: "Celebrity Fitness Coach",
                image: "/placeholder.svg?height=400&width=400",
                bio: "Trainer to Bollywood stars and author of 'Fitness for Life', Vikram brings expertise in transformational fitness journeys.",
              },
              {
                name: "Meera Krishnan",
                role: "Wellness Entrepreneur",
                image: "/placeholder.svg?height=400&width=400",
                bio: "Founder of three successful wellness startups and advocate for accessible fitness solutions for all.",
              },
              {
                name: "Rajiv Subramaniam",
                role: "Nutrition Expert",
                image: "/placeholder.svg?height=400&width=400",
                bio: "Certified nutritionist who has helped thousands achieve their fitness goals through personalized nutrition plans.",
              },
              {
                name: "Deepa Patel",
                role: "Yoga & Mindfulness Coach",
                image: "/placeholder.svg?height=400&width=400",
                bio: "Internationally certified yoga instructor bringing holistic wellness perspectives to the judging panel.",
              },
              {
                name: "Arjun Nair",
                role: "Fitness Community Leader",
                image: "/placeholder.svg?height=400&width=400",
                bio: "Founder of Bengaluru's largest running club and advocate for inclusive fitness communities.",
              },
            ].map((judge, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-square w-full overflow-hidden bg-gray-100">
                  <Image
                    src={judge.image || "/placeholder.svg"}
                    alt={judge.name}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-1 text-xl font-semibold">{judge.name}</h3>
                  <p className="mb-3 text-sm font-medium text-orange-600">{judge.role}</p>
                  <p className="text-gray-600">{judge.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Everything you need to know about the Bengaluru Fitness Awards
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Who can be nominated for the awards?",
                answer:
                  "Anyone in the fitness industry based in Bengaluru can be nominated, including trainers, gym owners, content creators, and individuals with inspiring fitness journeys.",
              },
              {
                question: "Can I nominate myself?",
                answer:
                  "Yes, self-nominations are accepted and encouraged! You know your achievements best, so don't hesitate to put yourself forward.",
              },
              {
                question: "Is there an entry fee?",
                answer: "No, there is no fee to submit a nomination for any of the award categories.",
              },
              {
                question: "How are winners selected?",
                answer:
                  "Our panel of judges evaluates all nominations based on the specific criteria for each category. Finalists may be contacted for additional information or interviews.",
              },
              {
                question: "When and where is the awards ceremony?",
                answer:
                  "The awards ceremony will take place on June 15, 2025, during the main Bengaluru Fitness Festival at Palace Grounds.",
              },
              {
                question: "What do winners receive?",
                answer:
                  "Winners receive a trophy, recognition at the festival, features in our marketing materials, and opportunities to collaborate with festival partners.",
              },
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-gray-50 p-6">
                  <CardTitle className="text-lg font-semibold">{item.question}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-700">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="mb-4 text-gray-600">Still have questions about the awards?</p>
            <Button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white">Contact Us</Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-16 text-center text-white md:py-20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Recognize Excellence?</h2>
          <p className="mb-8 text-lg text-white/90">
            Submit your nominations today and help us celebrate the best of Bengaluru's fitness community
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-white/90">
              Submit Nomination
            </Button>
            <Link href="/" className="inline-block">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Back to Festival
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 px-4 py-12 text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-xl font-bold">Bengaluru Fitness Festival</h3>
              <p className="text-gray-400">A celebration of energy, strength, and wellness for all age groups.</p>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold">Contact Us</h3>
              <p className="text-gray-400">
                Email: awards@bengalurufitfest.com
                <br />
                Phone: +91 9876543210
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2025 Bengaluru Fitness Festival. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

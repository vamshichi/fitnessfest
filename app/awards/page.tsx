"use client"

import { useState } from "react"
import { Trophy, Hash, Zap, Users, Mic, Camera, Vote, Award } from "lucide-react"
import VotingCard  from "@/components/voting-card"
// import  FeatureCard  from "@/components/feature-card"
import { AwardsParticipationForm } from "@/components/awards-participation-form"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
import Image from "next/image"

interface Nominee {
  id: string
  name: string
  description: string
  votes: number
  image: string
}

interface Category {
  id: string
  title: string
  icon: any
  color: string
  nominees: Nominee[]
}

interface VoterInfo {
  name: string
  email: string
  categoryId: string
  nomineeId: string
}

export default function AwardsPage() {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("participate")
  const [hasVoted, setHasVoted] = useState<Record<string, boolean>>({})
  const [showVoteSuccess, setShowVoteSuccess] = useState(false)

  const awardCategories: Category[] = [
    {
      id: "personal-trainer",
      title: "Personal Trainer of the Year",
      icon: Trophy,
      color: "red",
      nominees: [
        {
          id: "sarah-johnson",
          name: "Sarah Johnson",
          description: "Transformed over 200 lives this year with innovative training methods and community programs.",
          votes: 245,
          image: "/placeholder.svg?height=100&width=100&query=fitness trainer woman",
        },
        {
          id: "michael-patel",
          name: "Michael Patel",
          description: "Specializes in rehabilitation fitness, helping clients recover from injuries and surgeries.",
          votes: 189,
          image: "/placeholder.svg?height=100&width=100&query=fitness trainer man",
        },
        {
          id: "jessica-lee",
          name: "Jessica Lee",
          description: "Pioneer in adaptive fitness, making training accessible for people with disabilities.",
          votes: 217,
          image: "/placeholder.svg?height=100&width=100&query=adaptive fitness trainer",
        },
      ],
    },
    {
      id: "fitness-influencer",
      title: "Fitness Influencer Award",
      icon: Hash,
      color: "teal",
      nominees: [
        {
          id: "mark-williams",
          name: "Mark Williams",
          description: "Creates science-based content that has inspired thousands to begin their fitness journey.",
          votes: 312,
          image: "/placeholder.svg?height=100&width=100&query=fitness influencer man",
        },
        {
          id: "aisha-rodriguez",
          name: "Aisha Rodriguez",
          description: "Promotes body positivity and inclusive fitness through her popular social media channels.",
          votes: 287,
          image: "/placeholder.svg?height=100&width=100&query=body positive fitness influencer",
        },
        {
          id: "tyler-chen",
          name: "Tyler Chen",
          description: "Specializes in nutrition education and debunking harmful fitness myths online.",
          votes: 265,
          image: "/placeholder.svg?height=100&width=100&query=nutrition fitness expert",
        },
      ],
    },
    {
      id: "breakthrough-athlete",
      title: "Breakthrough Athlete",
      icon: Zap,
      color: "yellow",
      nominees: [
        {
          id: "alex-chen",
          name: "Alex Chen",
          description: "Overcame significant obstacles to achieve greatness in competitive fitness events this year.",
          votes: 178,
          image: "/placeholder.svg?height=100&width=100&query=competitive athlete",
        },
        {
          id: "maya-johnson",
          name: "Maya Johnson",
          description: "First-time competitor who placed in the top 5 in three major fitness competitions this year.",
          votes: 156,
          image: "/placeholder.svg?height=100&width=100&query=female athlete competition",
        },
        {
          id: "devon-smith",
          name: "Devon Smith",
          description: "Returned from a career-threatening injury to win the National Fitness Championship.",
          votes: 203,
          image: "/placeholder.svg?height=100&width=100&query=athlete comeback",
        },
      ],
    },
  ]

  const features = [
    {
      icon: Users,
      title: "VIP Reception",
      description: "Exclusive networking with industry leaders and award winners.",
    },
    {
      icon: Mic,
      title: "Inspiring Speakers",
      description: "Hear from the top minds in fitness and wellness.",
    },
    {
      icon: Camera,
      title: "Red Carpet",
      description: "Professional photography and media coverage.",
    },
  ]

  const handleVote = async (voterInfo: VoterInfo) => {
    const { categoryId } = voterInfo

    if (hasVoted[categoryId]) {
      toast({
        title: "Already Voted",
        description: "You have already voted in this category. You can only vote once per category.",
        variant: "destructive",
      })
      return { success: false, error: "Already voted in this category" }
    }

    const category = awardCategories.find((cat) => cat.id === categoryId)
    const nominee = category?.nominees.find((nom) => nom.id === voterInfo.nomineeId)

    if (!category || !nominee) {
      toast({
        title: "Error",
        description: "Could not find the selected category or nominee.",
        variant: "destructive",
      })
      return { success: false, error: "Category or nominee not found" }
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setHasVoted((prev) => ({
        ...prev,
        [categoryId]: true,
      }))

      toast({
        title: "Vote Submitted!",
        description: `Thank you ${voterInfo.name} for voting. Your vote has been recorded.`,
      })

      setShowVoteSuccess(true)
      setTimeout(() => setShowVoteSuccess(false), 5000)

      return { success: true, id: `vote-${Date.now()}` }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit your vote. Please try again.",
        variant: "destructive",
      })
      return { success: false, error: error instanceof Error ? error.message : "Unknown error" }
    }
  }

  const handleFormSubmit = (values: any) => {
    console.log("Form submitted:", values)
    toast({
      title: "Registration Submitted!",
      description: "Thank you for your participation. We'll be in touch soon.",
    })
  }

  const countries = [
    { value: "us", label: "United States" },
    { value: "ca", label: "Canada" },
    { value: "uk", label: "United Kingdom" },
    { value: "de", label: "Germany" },
    { value: "fr", label: "France" },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
       <section
        className="relative py-24 text-center text-white overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #fa0368 100%, #FA03688A 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>

        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 uppercase relative inline-block">
            Fitness Fest Awards
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-[100px] h-[5px] bg-[#FA03688A]"></span>
          </h1>
          <p className="text-xl md:text-2xl mt-8 mb-10 opacity-90 max-w-3xl mx-auto">
            Join the celebration of excellence in fitness and wellness. Participate in our awards program by nominating
            outstanding individuals or voting for your favorites.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
             <Button
              onClick={() => setActiveTab("participate")}
              size="lg"
              className={`py-4 px-10 rounded-full font-bold uppercase text-lg transition-all duration-300 transform hover:scale-105 ${
                activeTab === "participate"
                  ? "bg-white text-[#dc5044] shadow-2xl border-4 border-white"
                  : "bg-transparent text-white border-4 border-white hover:bg-white hover:text-[#dc5044]"
              }`}
            >
              <Award className="mr-3 h-5 w-5" />
              Participate
            </Button>
           <Button
              onClick={() => setActiveTab("vote")}
              size="lg"
              className={`py-4 px-10 rounded-full font-bold uppercase text-lg transition-all duration-300 transform hover:scale-105 ${
                activeTab === "vote"
                  ? "bg-white text-[#dc5044] shadow-2xl border-4 border-white"
                  : "bg-transparent text-white border-4 border-white hover:bg-white hover:text-[#dc5044]"
              }`}
            >
              <Vote className="mr-3 h-5 w-5" />
              Vote Now
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        {/* Tab Navigation */}
        <div className="flex w-full max-w-lg mx-auto mb-16 bg-white rounded-2xl p-2 shadow-xl border-4 border-gray-100">
          <Button
            onClick={() => setActiveTab("participate")}
            variant="ghost"
            className={`flex-1 rounded-xl py-4 font-bold text-lg transition-all duration-300 ${
              activeTab === "participate"
                ? "bg-gradient-to-r from-[#fa0368] to-[#fa0368] text-white shadow-lg"
                : "text-gray-600 hover:text-[#dc5044] hover:bg-gray-50"
            }`}
          >
            <Award className="mr-2 h-5 w-5" />
            Participate
          </Button>
          <Button
            onClick={() => setActiveTab("vote")}
            variant="ghost"
            className={`flex-1 rounded-xl py-4 font-bold text-lg transition-all duration-300 ${
              activeTab === "vote"
                ? "bg-gradient-to-r from-[#fa0368] to-[#fa0368] text-white shadow-lg"
                : "text-gray-600 hover:text-[#dc5044] hover:bg-gray-50"
            }`}
          >
            <Vote className="mr-2 h-5 w-5" />
            Vote
          </Button>
        </div>

        {/* Participate Tab */}
        {activeTab === "participate" && (
          <div className="space-y-20">
            <div className="text-center">
              <div className="relative inline-block">
                <h2 className="text-5xl md:text-6xl font-black uppercase text-black mb-4 relative z-10">
                  Join Our Awards
                </h2>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-full h-8 bg-[#fa0368] -skew-x-12 z-0"></div>
              </div>
              <p className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Be part of celebrating excellence in the fitness community. Submit your Nomination to
                participate in our prestigious awards ceremony.
              </p>
            </div>

            {/* Awards Categories Overview */}
            <div className="space-y-12">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-[#fa0368] mb-4">Award Categories</h3>
                <div className="w-24 h-1 bg-[#dc5044] mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {awardCategories.map((category, index) => {
                  const IconComponent = category.icon
                  const colors = {
                    red: "border-[#fa0368] bg-gradient-to-br from-[#dc5044]/5 to-[##fa0368]/10",
                    teal: "border-[#70adb0] bg-gradient-to-br from-[#70adb0]/5 to-[#fa0368]/10",
                    yellow: "border-[#f3c532] bg-gradient-to-br from-[#f3c532]/5 to-[#fa0368]/10",
                  }

                  return (
                    <div
                      key={category.id}
                      className={`relative overflow-hidden rounded-2xl p-8 shadow-xl border-4 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${colors[category.color as keyof typeof colors]}`}
                    >
                      <div className="absolute top-0 right-0 w-20 h-20 bg-white/20 rounded-bl-full"></div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-white rounded-xl shadow-lg">
                          <IconComponent className="h-8 w-8 text-[#dc5044]" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-800">{category.title}</h4>
                      </div>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        Recognizing outstanding achievements and contributions in this category.
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-gray-500">Current nominees:</span>
                        <span className="bg-[#fa0368] text-white px-3 py-1 rounded-full font-bold text-sm">
                          {category.nominees.length}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Participation Form */}
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-gray-100">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-[#fa0368] mb-4">Nomination Form</h3>
                <div className="w-16 h-1 bg-[#dc5044] mx-auto"></div>
              </div>
              <AwardsParticipationForm onSubmit={handleFormSubmit} countries={countries} />
            </div>
          </div>
        )}

        {/* Vote Tab */}
        {activeTab === "vote" && (
          <div className="space-y-20">
            <div className="text-center">
              <div className="relative inline-block">
                <h2 className="text-5xl md:text-6xl font-black uppercase text-black mb-4 relative z-10">
                  Vote for Excellence
                </h2>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-full h-8 bg-[#fa0368] -skew-x-12 z-0"></div>
              </div>
              <p className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Help us recognize excellence in the fitness community by voting for your favorite nominees in each
                category. Voting closes on May 31, 2025.
              </p>
            </div>

            {showVoteSuccess && (
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 text-green-800 px-6 py-4 rounded-2xl max-w-4xl mx-auto shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <strong className="font-bold">Thank you for your vote!</strong>
                    <span className="block sm:inline">
                      {" "}
                      Your vote has been recorded. You can continue voting in other categories.
                    </span>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-20">
              {awardCategories.map((category, index) => {
                const IconComponent = category.icon
                return (
                  <div key={category.id} className="space-y-8">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="p-4 bg-gradient-to-br from-[#dc5044] to-[#70adb0] rounded-2xl shadow-lg">
                          <IconComponent className="h-10 w-10 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-800">{category.title}</h3>
                      </div>
                      <div className="w-24 h-1 bg-[#f3c532] mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {category.nominees.map((nominee) => (
                        <VotingCard
                          key={nominee.id}
                          nominee={nominee}
                          categoryId={category.id}
                          color={category.color}
                          onVote={handleVote}
                          hasVoted={hasVoted[category.id] || false}
                        />
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>

      {/* Awards Ceremony Section */}
      {/* <section className="relative py-24 text-white overflow-hidden bg-gradient-to-135deg from-black via-gray-900 to-gray-800">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-[#dc5044] transform rotate-45"></div>
          <div className="absolute top-20 right-20 w-32 h-32 bg-[#70adb0] transform -rotate-12"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-[#f3c532] transform rotate-12"></div>
          <div className="absolute bottom-40 right-1/3 w-36 h-36 bg-white transform -rotate-45"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10 max-w-6xl">
          <div className="relative inline-block mb-8">
            <h2 className="text-5xl md:text-6xl font-black uppercase mb-4 relative z-10">Awards Ceremony</h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-full h-8 bg-[#f3c532] -skew-x-12 z-0"></div>
          </div>

          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed">
            Be part of an unforgettable night celebrating the best in fitness. Limited seats available for our
            prestigious awards ceremony!
          </p>

          <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto mt-12 mb-16">
            <Input
              type="email"
              placeholder="Enter your email for ceremony updates"
              className="flex-1 py-4 px-6 rounded-full text-lg border-2 border-white/20 bg-white/10 text-white placeholder:text-white/70 focus:border-[#f3c532]"
            />
            <Button className="bg-gradient-to-r from-[#f3c532] to-[#dc5044] text-black hover:from-[#dc5044] hover:to-[#f3c532] rounded-full px-10 py-4 font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
              Get Updates
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
            ))}
          </div>
        </div>
      </section> */}
    </main>
  )
}

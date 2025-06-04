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
  description: string
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
      id: "Fitness Trainer of the Year",
      title: "Fitness Trainer of the Year",
      icon: Trophy,
      color: "red",
      description:"This award celebrates an outstanding fitness professional who has demonstrated excellence in personal training, client transformation, professional development, and positive community influence. The recipient will exemplify passion, expertise, and commitment to improving lives through health and fitness.Whether through one-on-one training, group classes, online coaching, or holistic fitness programs, the winner will be someone who goes beyond workouts to inspire lasting change and uplift the fitness culture in Bengaluru.",
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
      id: "Nutritionist/Dietitian of the Year",
      title: "Nutritionist/Dietitian of the Year",
      icon: Hash,
      color: "teal",
      description:"This award honors an exceptional nutritionist or dietitian who has made a transformative impact on the health and wellbeing of individuals and communities through evidence-based, personalized nutrition strategies. The ideal candidate champions sustainable dietary change, merges science with practical application, and works collaboratively to empower clients to lead healthier lives.From clinical diet plans to fitness-focused nutrition coaching, this award celebrates professionals who educate, inspire, and deliver real, measurable outcomes through ethical and professional nutrition practice.",
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
      id: "Best Group Class Instructor",
      title: "Best Group Class Instructor",
      icon: Zap,
      color: "yellow",
      description: "This award celebrates the most dynamic and inspiring group fitness instructor who knows how to energize a room, motivate movement, and create a lasting community vibe. Whether leading Zumba, DanceFit, Spinning, HIIT, Aerobics, or Functional Training sessions, this individual commands the class with infectious enthusiasm, music-driven momentum, and seamless program delivery.This award honors an instructor whose classes are more than workouts — they’re experiences that people look forward to, return to, and talk about. From choreography to cueing, this professional delivers high-energy, safe, and inclusive group sessions that leave every participant empowered.",
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
    {
      id: "Physiotherapist of the Year",
      title: "Physiotherapist of the Year",
      icon: Trophy,
      color: "red",
      description:"This award honors an outstanding physiotherapist whose expertise, compassion, and dedication have empowered individuals to recover from injuries, manage chronic pain, and return to active, fulfilling lives. From athletes and fitness clients to the elderly and rehabilitating patients, this professional plays a pivotal role in restoring mobility and function—safely and sustainably.The “Physiotherapist of the Year” recognizes a licensed practitioner who not only demonstrates clinical excellence but also builds trust, educates clients, and contributes to the greater physiotherapy and wellness ecosystem.",
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
      id: "Rising Star – Young Fitness Professional (Under 30)",
      title: "Rising Star – Young Fitness Professional (Under 30)",
      icon: Trophy,
      color: "red",
      description:"This award celebrates emerging talent in the fitness and wellness industry — young professionals under the age of 30 who are already making a meaningful impact. Whether through client transformations, innovative training styles, entrepreneurial ventures, or digital influence, the Rising Star exemplifies drive, creativity, and a deep passion for health and fitness.It’s about spotting tomorrow’s leaders today — those who combine skill, science, and social influence to inspire change in their community.",
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
      id: "Lifetime Achievement in Fitness",
      title: "Lifetime Achievement in Fitness",
      icon: Trophy,
      color: "red",
      description:"This prestigious award honors an individual whose lifelong dedication, leadership, and vision have significantly shaped the fitness and wellness landscape in India — particularly in Bengaluru. Through decades of tireless work as a coach, educator, advocate, or pioneer, this individual has inspired generations to lead healthier, more active lives.The Lifetime Achievement Award is not just for professional accomplishments but also for the profound legacy left behind — in knowledge, influence, and service to the industry.",
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
      id: "Community Fitness Hero",
      title: "Community Fitness Hero",
      icon: Trophy,
      color: "red",
      description:"This award honors a fitness professional, coach, or mentor who is making a real difference at the grassroots level — offering free, low-cost, or volunteer-led fitness services to underserved communities. From slums and government schools to parks and shelters, this unsung hero brings wellness where it’s needed most — not for fame or fortune, but out of purpose and compassion.",
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
      id: "Innovator in Fitness Tech",
      title: "Innovator in Fitness Tech",
      icon: Trophy,
      color: "red",
      description:"This award celebrates the forward-thinking individuals, startups, or companies that are leveraging technology to revolutionize the fitness experience. From cutting-edge fitness apps and wearable devices to AI-driven workout programs, data trackers, and virtual fitness solutions, the Innovator in Fitness Tech award recognizes those transforming how we train, monitor progress, and stay motivated.Whether it’s streamlining fitness tracking, enhancing remote coaching, or gamifying physical activity, this award honors the pioneers pushing the boundaries of tech-driven wellness.",
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
      id: "Women in Wellness Leadership Award",
      title: "Women in Wellness Leadership Award",
      icon: Trophy,
      color: "red",
      description:"This award celebrates exceptional women who are leading the way in the wellness industry — from fitness coaching and holistic health practices to nutrition, mental well-being, and entrepreneurial ventures. The Women in Wellness Leadership Award honors those who have demonstrated remarkable leadership, innovation, and commitment to promoting health and wellness in their communities, empowering others, and driving positive change.This award recognizes women who are not only leaders in their field but also role models for other women aspiring to make a difference in the wellness sector.",
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
      id: "Best Fitness Studio/Gym in Bengaluru",
      title: "Best Fitness Studio/Gym in Bengaluru",
      icon: Trophy,
      color: "red",
      description:"This prestigious award recognizes the best fitness studio or gym in Bengaluru, celebrating those establishments that offer exceptional fitness programs, state-of-the-art facilities, and a strong commitment to community engagement. The Best Fitness Studio/Gym is defined by its ability to create a positive, motivating environment where members feel supported and inspired to reach their fitness goals. It also recognizes the importance of member satisfaction, wellness programs, and client retention.",
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
      id: "Best Wellness Retreat/Center",
      title: "Best Wellness Retreat/Center",
      icon: Trophy,
      color: "red",
      description:"This award celebrates holistic wellness retreats or centers that offer a comprehensive and transformative experience, combining fitness, mindfulness, and recovery. The Best Wellness Retreat/Center is recognized for its ability to provide an immersive environment where guests can rejuvenate both physically and mentally. These retreats foster an atmosphere of relaxation, self-care, and personal growth, integrating practices such as yoga, meditation, detox programs, fitness regimens, and recovery therapies. The focus is on providing a holistic approach to wellness that nurtures the mind, body, and soul.",
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
      id: "Top Health Supplement Brand",
      title: "Top Health Supplement Brand",
      icon: Trophy,
      color: "red",
      description:"This award recognizes the Top Health Supplement Brand that is trusted by the fitness community for its quality, safety, and effectiveness. The winner of this category is a brand that provides supplements that meet the highest standards of scientific research, quality testing, and consumer trust. From protein powders and vitamins to pre-workouts, post-workouts, and recovery formulas, this brand delivers products that support fitness goals, promote well-being, and enhance performance. The Top Health Supplement Brand not only excels in product quality but also educates its users, offers transparency, and prioritizes safety and efficacy.",
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
      id: "Best Activewear Brand",
      title: "Best Activewear Brand",
      icon: Trophy,
      color: "red",
      description:"This award honors the Best Activewear Brand that combines comfort, performance, and style, providing high-quality apparel designed for fitness enthusiasts, athletes, and wellness seekers. The winner will be a brand that delivers clothing that supports optimal movement, enhances performance, and looks great both in and out of the gym. Whether it’s for yoga, running, weight training, or daily activewear, this brand should prioritize fabric innovation, comfort, and fit while also staying on-trend with designs that inspire confidence.The Best Activewear Brand is recognized not just for the products it offers but also for the community it builds—from the influencers it partners with to the brand’s commitment to inclusivity, body positivity, and sustainable practices.",
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
      id: "Corporate Wellness Champion",
      title: "Corporate Wellness Champion",
      icon: Trophy,
      color: "red",
      description:"This award recognizes the Corporate Wellness Champion—a company that has gone above and beyond in promoting health, fitness, and well-being among its employees. The Corporate Wellness Champion is an organization that prioritizes employee health through structured wellness programs, fitness initiatives, and well-being policies that encourage physical activity, mental health support, and a balanced lifestyle. The company should focus on creating an environment that fosters employee engagement, workplace wellness, and overall productivity through initiatives such as on-site gyms, fitness challenges, mental health resources, and more.",
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
    <main className=" bg-gray-50">
      {/* Hero Section */}
 <section className="min-h-[60vh] bg-cover bg-center py-40 flex items-center relative" style={{ backgroundImage: "url('/images/eventum-img1.jpg')" }}>
  <div
  className="absolute inset-0 bg-black opacity-80"></div>

  <div className="container mx-auto px-4  relative z-10">
    <div className="max-w-3xl mx-auto text-center pt-10">
   <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-white">
  🏆 Bengaluru Fitness & Wellness Awards 2025
</h1>
    </div>
  </div>
</section>

      <div className="container max-w-5xl mx-auto px-4 py-16">
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

              <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-8">
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
                       {category.description}
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

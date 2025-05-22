"use client"

import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMedal,
  faHashtag,
  faBolt,
  faBuilding,
  faLightbulb,
  faHandsHelping,
  faGlassCheers,
  faMicrophone,
  faCamera,
  faHistory,
  faClipboardList,
  faPhotoVideo,
  faTrophy,
  faVoteYea,
} from "@fortawesome/free-solid-svg-icons"
import AwardCard from "@/components/award-card"
import TestimonialCard from "@/components/testimonial-card"
import FeatureCard from "@/components/feature-card"
import VotingCard from "@/components/voting-card"
import { useToast } from "@/hooks/use-toast"
import type { VoterInfo } from "@/components/voting-card"
import { submitVote } from "./actions"

export default function AwardsPage() {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("nominees")
  const [hasVoted, setHasVoted] = useState<Record<string, boolean>>({})
  const [showVoteSuccess, setShowVoteSuccess] = useState(false)
  const [voterData, setVoterData] = useState<VoterInfo[]>([])

  const awardCategories = [
    {
      id: "personal-trainer",
      title: "Personal Trainer of the Year",
      icon: faMedal,
      color: "red",
      nominees: [
        {
          id: "sarah-johnson",
          name: "Sarah Johnson",
          description: "Transformed over 200 lives this year with innovative training methods and community programs.",
          votes: 245,
          image: "/fitness-trainer-woman.png",
        },
        {
          id: "michael-patel",
          name: "Michael Patel",
          description: "Specializes in rehabilitation fitness, helping clients recover from injuries and surgeries.",
          votes: 189,
          image: "/fitness-trainer-man.png",
        },
        {
          id: "jessica-lee",
          name: "Jessica Lee",
          description: "Pioneer in adaptive fitness, making training accessible for people with disabilities.",
          votes: 217,
          image: "/adaptive-fitness-trainer.png",
        },
      ],
    },
    {
      id: "fitness-influencer",
      title: "Fitness Influencer Award",
      icon: faHashtag,
      color: "teal",
      nominees: [
        {
          id: "mark-williams",
          name: "Mark Williams",
          description: "Creates science-based content that has inspired thousands to begin their fitness journey.",
          votes: 312,
          image: "/fitness-influencer-man.png",
        },
        {
          id: "aisha-rodriguez",
          name: "Aisha Rodriguez",
          description: "Promotes body positivity and inclusive fitness through her popular social media channels.",
          votes: 287,
          image: "/body-positive-fitness-influencer.png",
        },
        {
          id: "tyler-chen",
          name: "Tyler Chen",
          description: "Specializes in nutrition education and debunking harmful fitness myths online.",
          votes: 265,
          image: "/nutrition-fitness-expert.png",
        },
      ],
    },
    {
      id: "breakthrough-athlete",
      title: "Breakthrough Athlete",
      icon: faBolt,
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

  const awardWinners = [
    {
      icon: faMedal,
      title: "Personal Trainer of the Year",
      winner: "Sarah Johnson",
      description:
        "Recognized for exceptional client results, innovative training methods, and community impact. Sarah has transformed over 200 lives this year alone.",
      tags: ["Transformation", "Innovation", "Community"],
      color: "red",
    },
    {
      icon: faHashtag,
      title: "Fitness Influencer Award",
      winner: "Mark Williams",
      description:
        "For creating accessible, science-based content that has inspired thousands to begin their fitness journey and debunking harmful fitness myths.",
      tags: ["Education", "Social Media", "Inspiration"],
      color: "teal",
    },
    {
      icon: faBolt,
      title: "Breakthrough Athlete",
      winner: "Alex Chen",
      description:
        "For exceptional performance and progress in competitive fitness events throughout the year, overcoming significant obstacles to achieve greatness.",
      tags: ["Performance", "Dedication", "Resilience"],
      color: "yellow",
    },
    {
      icon: faBuilding,
      title: "Wellness Program Excellence",
      winner: "FitLife Corporate",
      description:
        "For developing an innovative workplace wellness program with measurable health outcomes, reducing sick days by 30% and improving employee satisfaction.",
      tags: ["Corporate", "Wellness", "Innovation"],
      color: "red",
    },
    {
      icon: faLightbulb,
      title: "Fitness Innovation Award",
      winner: "FlexTech Wearables",
      description:
        "For groundbreaking technology that has transformed how people track and improve their fitness with AI-powered real-time coaching and feedback.",
      tags: ["Technology", "AI", "Wearables"],
      color: "teal",
    },
    {
      icon: faHandsHelping,
      title: "Community Impact Award",
      winner: "Fitness For All Foundation",
      description:
        "For making fitness accessible to underserved communities through free programs and facilities, reaching over 5,000 individuals this year.",
      tags: ["Inclusion", "Accessibility", "Community"],
      color: "yellow",
    },
  ]

  const previousAwards = [
    {
      icon: faHistory,
      title: "2024 Hall of Fame",
      description:
        "View our previous award winners and their outstanding contributions to the fitness community over the years.",
      tags: ["Legacy", "Excellence", "History"],
      color: "red",
    },
    {
      icon: faClipboardList,
      title: "Nomination Process",
      description:
        "Learn about our rigorous selection process and how to nominate candidates for next year's awards. Nominations open in January.",
      tags: ["Criteria", "Selection", "Judging"],
      color: "teal",
    },
    {
      icon: faPhotoVideo,
      title: "Awards Ceremony",
      description:
        "Relive the excitement of this year's awards ceremony with photos and highlights from our gala event.",
      tags: ["Gallery", "Highlights", "Memories"],
      color: "yellow",
    },
  ]

  const testimonials = [
    {
      text: "Winning the Fitness Innovation Award was a game-changer for our company. The recognition helped us secure funding and expand our reach globally.",
      name: "James Peterson",
      role: "CEO, FitTech Solutions",
    },
    {
      text: "The Fitness Fest Awards ceremony was an incredible experience. I met so many inspiring people and formed partnerships that have transformed my career.",
      name: "Maria Rodriguez",
      role: "Personal Trainer of the Year 2024",
    },
    {
      text: "Being recognized for our community work gave our foundation the visibility we needed to expand our programs to five new cities this year.",
      name: "David Kim",
      role: "Founder, Fitness Forward",
    },
  ]

  const features = [
    {
      icon: faGlassCheers,
      title: "VIP Reception",
      description: "Exclusive networking with industry leaders and award winners.",
    },
    {
      icon: faMicrophone,
      title: "Inspiring Speakers",
      description: "Hear from the top minds in fitness and wellness.",
    },
    {
      icon: faCamera,
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
      return
    }

    // Find the category and nominee to get their names
    const category = awardCategories.find((cat) => cat.id === categoryId)
    const nominee = category?.nominees.find((nom) => nom.id === voterInfo.nomineeId)

    if (!category || !nominee) {
      toast({
        title: "Error",
        description: "Could not find the selected category or nominee.",
        variant: "destructive",
      })
      return
    }

    try {
      // Submit vote to the database
      const result = await submitVote(voterInfo, nominee.name, category.title)

      if (!result.success) {
        throw new Error(result.error || "Failed to submit vote")
      }

      // Store voter data locally
      setVoterData((prev) => [...prev, voterInfo])

      // Update local state to show the user has voted
      setHasVoted((prev) => ({
        ...prev,
        [categoryId]: true,
      }))

      // Show success message
      toast({
        title: "Vote Submitted!",
        description: `Thank you ${voterInfo.name} for voting. Your vote has been recorded.`,
      })

      setShowVoteSuccess(true)
      setTimeout(() => setShowVoteSuccess(false), 5000)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit your vote. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <main>
      <section
        className="relative py-24 text-center text-white overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #dc5044 0%, #70adb0 100%)",
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
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-[100px] h-[5px] bg-[#f3c532]"></span>
          </h1>
          <p className="text-xl md:text-2xl mt-8 mb-10 opacity-90 max-w-3xl mx-auto">
            Recognizing outstanding achievements in fitness, wellness, and athletic performance. Vote for your favorites
            or explore our past winners.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <button
              onClick={() => setActiveTab("nominees")}
              className={`py-4 px-8 rounded-full font-semibold uppercase transition-colors ${
                activeTab === "nominees"
                  ? "bg-white text-[#dc5044] border-2 border-white"
                  : "bg-transparent text-white border-2 border-white hover:bg-white hover:text-black"
              }`}
            >
              Vote Now
            </button>
            <button
              onClick={() => setActiveTab("winners")}
              className={`py-4 px-8 rounded-full font-semibold uppercase transition-colors ${
                activeTab === "winners"
                  ? "bg-white text-[#dc5044] border-2 border-white"
                  : "bg-transparent text-white border-2 border-white hover:bg-white hover:text-black"
              }`}
            >
              View Winners
            </button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-8">
        <div className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
          <button
            onClick={() => setActiveTab("nominees")}
            className={`text-lg py-3 px-4 rounded-l-md font-medium transition-colors ${
              activeTab === "nominees"
                ? "bg-background text-foreground shadow-sm"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            <FontAwesomeIcon icon={faVoteYea} className="mr-2" /> Vote for Nominees
          </button>
          <button
            onClick={() => setActiveTab("winners")}
            className={`text-lg py-3 px-4 rounded-r-md font-medium transition-colors ${
              activeTab === "winners"
                ? "bg-background text-foreground shadow-sm"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            <FontAwesomeIcon icon={faTrophy} className="mr-2" /> Award Winners
          </button>
        </div>

        {activeTab === "nominees" && (
          <div className="mt-0">
            <div className="text-center mb-16">
              <h2 className="inline-block bg-[#f3c532] px-12 py-3 text-black text-4xl font-extrabold uppercase transform -skew-x-6 relative z-10 shadow-[5px_5px_0_#dc5044]">
                Vote for Your Favorites
              </h2>
              <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
                Help us recognize excellence in the fitness community by voting for your favorite nominees in each
                category. Voting closes on May 31, 2025.
              </p>
            </div>

            {showVoteSuccess && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-8 max-w-3xl mx-auto">
                <strong className="font-bold">Thank you for your vote!</strong>
                <span className="block sm:inline">
                  {" "}
                  Your vote has been recorded. You can continue voting in other categories.
                </span>
              </div>
            )}

            <div className="space-y-16">
              {awardCategories.map((category) => (
                <div key={category.id} className="mb-16">
                  <div className="flex items-center gap-3 mb-6">
                    <FontAwesomeIcon icon={category.icon} className="text-3xl text-[#dc5044]" />
                    <h3 className="text-2xl font-bold">{category.title}</h3>
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
              ))}
            </div>
          </div>
        )}

        {activeTab === "winners" && (
          <>
            <section className="py-12" id="awards">
              <div className="text-center mb-16">
                <h2 className="inline-block bg-[#f3c532] px-12 py-3 text-black text-4xl font-extrabold uppercase transform -skew-x-6 relative z-10 shadow-[5px_5px_0_#dc5044]">
                  2025 Award Winners
                </h2>
                <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
                  Celebrating the individuals and organizations that have made exceptional contributions to the fitness
                  community this year.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {awardWinners.map((award, index) => (
                  <AwardCard
                    key={index}
                    icon={award.icon}
                    title={award.title}
                    winner={award.winner}
                    description={award.description}
                    tags={award.tags}
                    color={award.color}
                  />
                ))}
              </div>
            </section>

            <section className="py-20 bg-gray-100">
              <div className="text-center mb-16">
                <h2 className="inline-block bg-[#f3c532] px-12 py-3 text-black text-4xl font-extrabold uppercase transform -skew-x-6 relative z-10 shadow-[5px_5px_0_#dc5044]">
                  What Past Winners Say
                </h2>
                <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
                  Hear from our previous award recipients about their experience.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard
                    key={index}
                    text={testimonial.text}
                    name={testimonial.name}
                    role={testimonial.role}
                  />
                ))}
              </div>
            </section>

            <section className="py-20">
              <div className="text-center mb-16">
                <h2 className="inline-block bg-[#f3c532] px-12 py-3 text-black text-4xl font-extrabold uppercase transform -skew-x-6 relative z-10 shadow-[5px_5px_0_#dc5044]">
                  Previous Winners
                </h2>
                <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
                  Explore our hall of fame and the legacy of excellence in the fitness industry.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {previousAwards.map((award, index) => (
                  <AwardCard
                    key={index}
                    icon={award.icon}
                    title={award.title}
                    description={award.description}
                    tags={award.tags}
                    color={award.color}
                  />
                ))}
              </div>
            </section>
          </>
        )}
      </div>

      <section
        className="py-20 text-white relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #000000 0%, #333333 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fillOpacity='0.05' fillRule='evenodd'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 20.83l2.83-2.83 1.41 1.41L1.41 22.24H0v-1.41zM0 3.07l2.83-2.83 1.41 1.41L1.41 4.48H0V3.07zm20 0l2.83-2.83 1.41 1.41-2.83 2.83H20V3.07zm0 17.76l2.83-2.83 1.41 1.41-2.83 2.83H20v-1.41zm0 17.76l2.83-2.83 1.41 1.41-2.83 2.83H20v-1.41zM40 3.07l-2.83-2.83-1.41 1.41 2.83 2.83H40V3.07zm0 17.76l-2.83-2.83-1.41 1.41 2.83 2.83H40v-1.41zm0 17.76l-2.83-2.83-1.41 1.41 2.83 2.83H40v-1.41z'/%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>

        <div className="container mx-auto px-6 text-center relative z-10 max-w-4xl">
          <h2 className="text-4xl font-extrabold mb-6 uppercase">Register for the Awards Ceremony</h2>
          <p className="text-xl mb-10 opacity-90">
            Join us for an unforgettable night celebrating the best in fitness. Limited seats available!
          </p>

          <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mt-10">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 py-4 px-6 rounded-full text-black outline-none"
            />
            <button
              type="submit"
              className="bg-[#f3c532] text-black py-4 px-8 rounded-full font-semibold uppercase hover:bg-[#dc5044] hover:text-white transform hover:-translate-y-1 transition-all animate-pulse"
            >
              Register Now
            </button>
          </form>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {features.map((feature, index) => (
              <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

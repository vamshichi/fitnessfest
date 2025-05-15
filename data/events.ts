


export type Sponsor = {
  id: string
  name: string
  logo: string
  tier: string // Gold, Silver, Bronze, etc.
  description: string
  website: string
  location: string
  industry: string[]
  yearsFunding?: number
  employeeCount?: number
  sponsorshipAmount?: string
  benefits?: string[]
  color: string
}

export type Event = {
  id: string
  name: string
  location: string
  date: string
  time: string
  description: string
  image: string
  speakers: string[]
    sponsors: string[]
  sponsorIds: string[]
}
// Events data
export const events = [
    {
      id: "1",
      title: "Main Stage",
      description: "Live Fitness Sessions, Dance Workouts, and Celebrity Appearances.",
      date: "12 October 2025",
      time: "10",
      period: "AM",
      timeRange: "10:00 AM - 6:00 PM",
      location: "Main Arena",
      price: "Free",
      image: "/images/main-stage.jpg",
      featured: true,
      startDate: "October 12, 2025",
      endDate: "October 12, 2025",
      speakerIds: ["1", "2", "3"],
      sponsors: ["FitLife Nutrition", "ActiveWear", "VitaBoost"],
      sponsorIds: ["1", "3", "5"],
    },
    {
      id: "2",
      title: "Wellness Zone",
      description: "Nutrition Talks, Physiotherapy Demos, Health Check-ups.",
      date: "12 October 2025",
      time: "10",
      period: "AM",
      timeRange: "10:00 AM - 5:00 PM",
      location: "Wellness Pavilion",
      price: "Free",
      image: "/images/wellness-zone.jpg",
      featured: false,
      startDate: "October 12, 2025",
      endDate: "October 12, 2025",
      speakerIds: ["2", "3", "4"],
      sponsors: ["PowerGear", "HealthTech"],
      sponsorIds: ["2", "4"]
    },
    {
      id: "3",
      title: "Strength Arena",
      description: "CrossFit, Functional Training, and Fitness Challenges.",
      date: "12 October 2025",
      time: "11",
      period: "AM",
      timeRange: "11:00 AM - 6:00 PM",
      location: "Strength Court",
      price: "Free",
      image: "/images/strength-arena.jpg",
      featured: false,
      startDate: "October 12, 2025",
      endDate: "October 12, 2025",
      speakerIds: ["1", "2"],
      sponsors: ["FitLife Nutrition", "PowerGear"],
    sponsorIds: ["1", "2"],
    },
    {
      id: "4",
      title: "Yoga Garden",
      description: "Outdoor Yoga, Guided Meditation, Sound Healing.",
      date: "12 October 2025",
      time: "8",
      period: "AM",
      timeRange: "8:00 AM - 12:00 PM",
      location: "Garden Lawn",
      price: "Free",
      image: "/images/yoga-garden.jpg",
      featured: true,
      startDate: "October 12, 2025",
      endDate: "October 12, 2025",
      speakerIds: ["1", "2", "3"],
      sponsors: ["FitLife Nutrition", "PowerGear"],
    sponsorIds: ["1", "2"],
    },
    {
      id: "5",
      title: "Family Fit Zone",
      description: "Fun Games and Fitness Activities for Kids and Parents.",
      date: "12 October 2025",
      time: "9",
      period: "AM",
      timeRange: "9:00 AM - 4:00 PM",
      location: "Family Park",
      price: "Free",
      image: "/images/family-fit-zone.jpg",
      featured: false,
      startDate: "October 12, 2025",
      endDate: "October 12, 2025",
      speakerIds: ["1", "2"],
      sponsors: ["FitLife Nutrition", "PowerGear"],
    sponsorIds: ["1", "2"],
    },
    {
      id: "6",
      title: "Fit Marketplace",
      description: "Healthy Snacks, Fitness Gear, Supplements & more.",
      date: "12 October 2025",
      time: "10",
      period: "AM",
      timeRange: "10:00 AM - 8:00 PM",
      location: "Marketplace Hall",
      price: "Free Entry",
      image: "/images/fit-marketplace.jpg",
      featured: false,
      startDate: "October 12, 2025",
      endDate: "October 12, 2025",
      speakerIds: ["3", "4"],
      sponsors: ["FitLife Nutrition", "PowerGear"],
    sponsorIds: ["1", "2"],
    },
    {
      id: "7",
      title: "Exhibition Arena",
      description: "Exhibitors display their equipment and services.",
      date: "12 October 2025",
      time: "10",
      period: "AM",
      timeRange: "10:00 AM - 7:00 PM",
      location: "Exhibition Arena",
      price: "Free",
      image: "/images/exhibition-arena.jpg",
      featured: false,
      startDate: "October 12, 2025",
      endDate: "October 12, 2025",
      speakerIds: ["2", "3"],
      sponsors: ["FitLife Nutrition", "PowerGear"],
    sponsorIds: ["1", "2"],
    },
  ];
  
  
  // Function to get event by ID
  export function getEventById(id: string) {
    return events.find((event) => event.id === id)
  }
  
  // Speaker type definition
  export type Speaker = {
    id: string
    name: string
    title: string
    bio: string
    image: string
    day: string
    timing: string
    dateOfBirth?: string
    mobileNumber?: string
    address?: {
      line1: string
      line2: string
    }
    socialLinks?: {
      facebook?: string
      twitter?: string
      pinterest?: string
    }
    skills?: {
      [key: string]: number
    }
    color: string
  }
  
  // Speakers data
  export const speakers: Speaker[] = [
    {
      id: "1",
      name: "John Doe",
      title: "Lead Developer",
      bio: "John is a lead developer with over 10 years of experience in web development.",
      image: "/placeholder.svg?height=200&width=200",
      day: "Monday",
      timing: "10:00 AM",
      dateOfBirth: "01/01/1980",
      mobileNumber: "123-456-7890",
      address: {
        line1: "123 Main St",
        line2: "Anytown, USA",
      },
      socialLinks: {
        facebook: "https://www.facebook.com",
        twitter: "https://www.twitter.com",
        pinterest: "https://www.instagram.com",
      },
      skills: {
        javascript: 90,
        react: 80,
        node: 70,
      },
      color: "border-blue-500",
    },
    {
      id: "2",
      name: "Jane Smith",
      title: "Founder & CEO",
      bio: "Jane is the founder and CEO of a successful tech startup.",
      image: "/placeholder.svg?height=200&width=200",
      day: "Tuesday",
      timing: "11:00 AM",
      dateOfBirth: "02/02/1985",
      mobileNumber: "456-789-0123",
      address: {
        line1: "456 Elm St",
        line2: "Anytown, USA",
      },
      socialLinks: {
        facebook: "https://www.facebook.com",
        twitter: "https://www.twitter.com",
        pinterest: "https://www.instagram.com",
      },
      skills: {
        leadership: 95,
        management: 90,
        strategy: 85,
      },
      color: "border-red-500",
    },
    {
      id: "3",
      name: "Mike Brown",
      title: "Senior Trainer",
      bio: "Mike is a senior trainer with over 15 years of experience in education.",
      image: "/placeholder.svg?height=200&width=200",
      day: "Wednesday",
      timing: "12:00 PM",
      dateOfBirth: "03/03/1975",
      mobileNumber: "789-012-3456",
      address: {
        line1: "789 Oak St",
        line2: "Anytown, USA",
      },
      socialLinks: {
        facebook: "https://www.facebook.com",
        twitter: "https://www.twitter.com",
        pinterest: "https://www.instagram.com",
      },
      skills: {
        teaching: 100,
        communication: 95,
        presentation: 90,
      },
      color: "border-green-500",
    },
    {
        id: "6",
        name: "Mike Brown",
        title: "Senior Trainer",
        bio: "Mike is a senior trainer with over 15 years of experience in education.",
        image: "/placeholder.svg?height=200&width=200",
        day: "Wednesday",
        timing: "12:00 PM",
        dateOfBirth: "03/03/1975",
        mobileNumber: "789-012-3456",
        address: {
          line1: "789 Oak St",
          line2: "Anytown, USA",
        },
        socialLinks: {
          facebook: "https://www.facebook.com",
          twitter: "https://www.twitter.com",
          pinterest: "https://www.instagram.com",
        },
        skills: {
          teaching: 100,
          communication: 95,
          presentation: 90,
        },
        color: "border-green-500",
      },
      {
        id: "5",
        name: "Mike Brown",
        title: "Senior Trainer",
        bio: "Mike is a senior trainer with over 15 years of experience in education.",
        image: "/placeholder.svg?height=200&width=200",
        day: "Wednesday",
        timing: "12:00 PM",
        dateOfBirth: "03/03/1975",
        mobileNumber: "789-012-3456",
        address: {
          line1: "789 Oak St",
          line2: "Anytown, USA",
        },
        socialLinks: {
          facebook: "https://www.facebook.com",
          twitter: "https://www.twitter.com",
          pinterest: "https://www.instagram.com",
        },
        skills: {
          teaching: 100,
          communication: 95,
          presentation: 90,
        },
        color: "border-green-500",
      },
  ]
  

  

  export const sponsors: Sponsor[] = [
    {
      id: "1",
      name: "FitLife Nutrition",
      logo: "/placeholder.svg?height=200&width=200",
      tier: "Gold",
      description:
        "FitLife Nutrition provides premium supplements and nutrition advice for fitness enthusiasts and athletes.",
      website: "https://www.fitlifenutrition.com",
      location: "New York, NY",
      industry: ["Nutrition", "Supplements", "Health"],
      yearsFunding: 5,
      employeeCount: 120,
      sponsorshipAmount: "$25,000",
      benefits: ["Main Stage Branding", "VIP Access", "Product Showcase"],
      color: "border-yellow-500",
    },
    {
      id: "2",
      name: "PowerGear",
      logo: "/placeholder.svg?height=200&width=200",
      tier: "Silver",
      description: "PowerGear manufactures high-quality fitness equipment for home and commercial gyms.",
      website: "https://www.powergear.com",
      location: "Los Angeles, CA",
      industry: ["Equipment", "Fitness", "Manufacturing"],
      yearsFunding: 3,
      employeeCount: 85,
      sponsorshipAmount: "$15,000",
      benefits: ["Exhibition Space", "Logo on Materials"],
      color: "border-gray-400",
    },
    {
      id: "3",
      name: "ActiveWear",
      logo: "/placeholder.svg?height=200&width=200",
      tier: "Gold",
      description: "ActiveWear designs and produces premium athletic clothing for all types of fitness activities.",
      website: "https://www.activewear.com",
      location: "Chicago, IL",
      industry: ["Apparel", "Fashion", "Retail"],
      yearsFunding: 7,
      employeeCount: 200,
      sponsorshipAmount: "$30,000",
      benefits: ["Main Stage Branding", "VIP Access", "Fashion Show"],
      color: "border-yellow-500",
    },
    {
      id: "4",
      name: "HealthTech",
      logo: "/placeholder.svg?height=200&width=200",
      tier: "Bronze",
      description: "HealthTech develops innovative wearable technology for fitness tracking and health monitoring.",
      website: "https://www.healthtech.com",
      location: "San Francisco, CA",
      industry: ["Technology", "Wearables", "Health"],
      yearsFunding: 2,
      employeeCount: 45,
      sponsorshipAmount: "$8,000",
      benefits: ["Exhibition Space"],
      color: "border-orange-700",
    },
    {
      id: "5",
      name: "VitaBoost",
      logo: "/placeholder.svg?height=200&width=200",
      tier: "Silver",
      description: "VitaBoost creates natural energy drinks and recovery beverages for fitness enthusiasts.",
      website: "https://www.vitaboost.com",
      location: "Miami, FL",
      industry: ["Beverages", "Nutrition", "Health"],
      yearsFunding: 4,
      employeeCount: 60,
      sponsorshipAmount: "$12,000",
      benefits: ["Product Sampling", "Logo on Materials"],
      color: "border-gray-400",
    },
  ]
  
  export function getSponsorById(id: string) {
    return sponsors.find((sponsor) => sponsor.id === id)
  }
  
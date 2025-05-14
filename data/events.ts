

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
  
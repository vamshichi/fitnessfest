// app/event/page.tsx or components/EventPage.tsx

'use client';

import Link from 'next/link';
import { CalendarClock, MapPin } from 'lucide-react';

const mockEvents = [
    {
      id: 'main-stage',
      time: '09',
      period: 'Am',
      price: '$25',
      title: 'Main Stage',
      timeRange: '9:00AM - 10:00AM',
      location: 'Main Arena',
      featured: true,
      description: 'Live Fitness Sessions, Dance Workouts, and Celebrity Appearances',
      image: 'https://via.placeholder.com/340x200',
    },
    {
      id: 'wellness-zone',
      time: '10',
      period: 'Am',
      price: '$25',
      title: 'Wellness Zone',
      timeRange: '10:00AM - 11:00AM',
      location: 'Zone A',
      featured: false,
      description: 'Nutrition Talks, Physiotherapy Demos, Health Check-ups',
      image: 'https://via.placeholder.com/340x200',
    },
    {
      id: 'strength-arena',
      time: '11',
      period: 'Am',
      price: '$25',
      title: 'Strength Arena',
      timeRange: '11:00AM - 12:00PM',
      location: 'Arena B',
      featured: true,
      description: 'CrossFit, Functional Training, and Fitness Challenges',
      image: 'https://via.placeholder.com/340x200',
    },
    {
      id: 'yoga-garden',
      time: '12',
      period: 'Pm',
      price: '$25',
      title: 'Yoga Garden',
      timeRange: '12:00PM - 1:00PM',
      location: 'Outdoor Lawn',
      featured: false,
      description: 'Outdoor Yoga, Guided Meditation, Sound Healing',
      image: 'https://via.placeholder.com/340x200',
    },
    {
      id: 'family-fit-zone',
      time: '01',
      period: 'Pm',
      price: '$25',
      title: 'Family Fit Zone',
      timeRange: '1:00PM - 2:00PM',
      location: 'Zone C',
      featured: true,
      description: 'Fun Games and Fitness Activities for Kids and Parents',
      image: 'https://via.placeholder.com/340x200',
    },
    {
      id: 'fit-marketplace',
      time: '02',
      period: 'Pm',
      price: '$25',
      title: 'Fit Marketplace',
      timeRange: '2:00PM - 3:00PM',
      location: 'Marketplace Pavilion',
      featured: false,
      description: 'Healthy Snacks, Fitness Gear, Supplements & more',
      image: 'https://via.placeholder.com/340x200',
    },
    {
      id: 'exhibition-arena',
      time: '03',
      period: 'Pm',
      price: '$25',
      title: 'Exhibition Arena',
      timeRange: '3:00PM - 4:00PM',
      location: 'Exhibition Hall',
      featured: false,
      description: "Exhibitors Display their Equipment’s / Services",
      image: 'https://via.placeholder.com/340x200',
    },
  ];
  
export default function EventPage() {
  return (
    <div className="min-h-screen bg-white py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">11 September 2022</h1>
        <div className="border-l-2 border-gray-300 relative">
          {mockEvents.map((event, idx) => (
            <div key={event.id} className="mb-10 ml-6 relative">
              {/* Time Dot */}
              <div
                className={`absolute -left-12 top-4 w-12 h-12 rounded-full text-white flex flex-col items-center justify-center ${
                  idx % 2 === 0 ? 'bg-pink-500' : 'bg-purple-600'
                }`}
              >
                <span className="text-sm font-bold">{event.time}</span>
                <span className="text-xs">{event.period}</span>
              </div>

              <Link href={`/event/${event.id}`} className="group block bg-gray-100 rounded-md overflow-hidden hover:shadow-lg transition mx-15">
                <div className="flex flex-col md:flex-row">
                  {/* Image Section */}
                  <div className="relative w-full md:w-[340px] h-[200px] bg-gray-300 flex-shrink-0">
                    <img
                      src={event.image}
                      alt="Event"
                      className="w-full h-full object-cover"
                    />
                    {event.featured && (
                      <span className="absolute top-2 left-2 bg-orange-400 text-white text-xs font-bold px-3 py-1 rounded">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Info Section */}
                  <div className="p-5 flex-1">
                    <div className="text-xl font-bold mb-2">{event.price}</div>
                    <h2 className="text-lg font-semibold mb-2 group-hover:underline">
                      {event.title}
                    </h2>
                    <div className="flex items-center text-sm text-gray-600 mb-2 space-x-4">
                      <span className="flex items-center gap-1">
                        <CalendarClock size={14} />
                        {event.timeRange}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {event.location}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 mb-2 line-clamp-3">
                      {event.description}
                    </p>
                    <span className="text-orange-500 font-semibold text-sm hover:underline">
                      Get Ticket Now
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

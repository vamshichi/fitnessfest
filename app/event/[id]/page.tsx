// app/event/[id]/page.tsx
import Image from 'next/image';

interface Props {
  params: { id: string };
}

// Mock data – replace this with actual fetch logic
const event = {
  title: 'Digital Workshop Conference 2021',
  description: `We’re inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their knees, try new things, to be vulnerable, epic adventures – this is where you’d put the event description. This is an example of a multi-day event. Great for conferences, music festivals, and other multi-day events.`,
  price: 65,
  startDate: 'September 10 @ 1:00 am',
  endDate: 'September 13 @ 1:00 am',
  location: 'PO Box 16122 Collins Street West Victoria 8007 Newyork',
  image: '/images/event-banner.jpg',
};

export default async function EventDetailsPage({ params }: Props) {
  const { id } = params;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        {event.title}
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Section - Main Content */}
        <div className="md:col-span-2">
          <Image
            src={event.image}
            alt="Event Banner"
            width={751}
            height={390}
            className="rounded-md w-full"
          />

          <p className="mt-6 text-gray-700 text-lg leading-relaxed">
            {event.description}
          </p>
        </div>

        {/* Right Section - Sidebar */}
        <div className="bg-indigo-50 p-6 rounded-md shadow-sm space-y-4">
          <div className="text-3xl font-bold text-indigo-900">
            ${event.price}
          </div>
          <button className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500 transition">
            Buy Your Ticket
          </button>

          <div className="border-t pt-4 space-y-2">
            <h2 className="font-semibold text-indigo-900">Details</h2>
            <div>
              <span className="font-semibold">Start:</span>{' '}
              <span>{event.startDate}</span>
            </div>
            <div>
              <span className="font-semibold">End:</span>{' '}
              <span>{event.endDate}</span>
            </div>
            <div>
              <span className="font-semibold">Location:</span>{' '}
              <span>{event.location}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

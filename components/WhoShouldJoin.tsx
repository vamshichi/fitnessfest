import React from 'react';

const WhoShouldJoin = () => {
  const participants = [
    'Fitness enthusiasts & beginners',
    'Yoga & dance lovers',
    'Runners, lifters, athletes',
    'Nutrition & wellness followers',
    'Families & kids',
    'Senior citizens looking to stay active',
  ];

  return (
    <section className="min-h-screen bg-gray-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#f3c532] mb-8">Who Should Join?</h2>
        <ul className="space-y-4 text-lg md:text-xl text-gray-700">
          {participants.map((participant, index) => (
            <li key={index} className="flex items-center justify-center">
              <span className="mr-4 text-2xl">🔹</span>
              {participant}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhoShouldJoin;

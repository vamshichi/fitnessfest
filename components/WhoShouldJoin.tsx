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
    <section className="min-h-screen bg-gradient-to-br from-white via-[#fef3c7] to-[#fde68a] py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#ca8a04] mb-12">
          Who Should Join?
        </h2>
        <ul className="space-y-6 text-lg md:text-xl text-gray-800 max-w-3xl mx-auto">
          {participants.map((participant, index) => (
            <li
              key={index}
              className="flex items-start gap-4 bg-white shadow-md rounded-xl p-4 hover:bg-yellow-100 transition"
            >
              <span className="text-2xl text-yellow-500">🏃</span>
              <p className="text-left">{participant}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhoShouldJoin;

import React from 'react';

const WhyAttend = () => {
  const reasons = [
    'Discover new workouts and wellness trends',
    'Meet fitness experts, coaches & like-minded individuals',
    'Participate in challenges and win exciting rewards',
    'Get exclusive access to products and offers',
    'Reignite your fitness journey in a high-energy environment',
  ];

  return (
    <section className="min-h-screen bg-[#f3c532] py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Why Attend?</h2>
        <ul className="space-y-4 text-lg md:text-xl text-white">
          {reasons.map((reason, index) => (
            <li key={index} className="flex items-center">
              <span className="mr-4 text-2xl">🔹</span>
              {reason}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyAttend;

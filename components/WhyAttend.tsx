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
    <section className="min-h-screen bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12">
          Why Attend?
        </h2>
        <ul className="space-y-6 text-lg md:text-xl text-white max-w-3xl mx-auto">
          {reasons.map((reason, index) => (
            <li
              key={index}
              className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:bg-white/20 transition"
            >
              <span className="text-2xl text-yellow-400">✅</span>
              <p className="text-left">{reason}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyAttend;

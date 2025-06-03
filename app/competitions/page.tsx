import RegistrationForm from "@/components/registration-form"

export default function CompetitionsPage() {
  return (
    <main className="flex-1">
      <section className="relative py-50 text-center text-white overflow-hidden bg-gradient-to-r from-black to-gray-800">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>

        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 uppercase relative inline-block">
            Test Your Limits
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-[100px] h-[5px] bg-[#fa0368]"></span>
          </h1>
          <p className="text-xl md:text-2xl mt-8 mb-10 opacity-90 max-w-3xl mx-auto">
            Join the ultimate fitness challenge at Fitness Fest 2025. Compete against the best athletes, push your
            boundaries, and claim your victory.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="inline-block bg-[#fa0368] px-12 py-3 text-black text-4xl font-extrabold uppercase transform -skew-x-6 relative z-10 shadow-[5px_5px_0_#FA03688A]">
              Competitions Schedule
            </h2>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              Mark your calendar for these key dates and don't miss any of the action.
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#FA03688A]"></div>

            {/* Timeline items */}
            {[
              {
                date: "June 15, 2025",
                title: "Opening Ceremony & Powerlifting Challenge",
                text: "The festival kicks off with an electrifying opening ceremony followed by the Ultimate Powerlifting Challenge.",
              },
              {
                date: "June 16-17, 2025",
                title: "CrossFit Championship",
                text: "Two days of intense CrossFit competition testing strength, endurance, and mental fortitude.",
              },
              {
                date: "June 18, 2025",
                title: "Fitness Fest Marathon",
                text: "A challenging marathon through the city's most scenic routes, testing endurance to the limit.",
              },
              {
                date: "June 19, 2025",
                title: "Extreme Obstacle Course",
                text: "Navigate through a series of challenging obstacles designed to test agility, strength, and problem-solving.",
              },
              {
                date: "June 20, 2025",
                title: "Yoga & Flexibility Masters",
                text: "A showcase of incredible flexibility, balance, and control in our yoga competition.",
              },
              {
                date: "June 21, 2025",
                title: "Team Challenge & Closing Ceremony",
                text: "The festival concludes with the exciting Team Fitness Challenge followed by the awards ceremony.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`relative mb-12 ${index % 2 === 0 ? "pr-[calc(50%+2rem)]" : "pl-[calc(50%+2rem)]"} md:mb-16`}
              >
                {/* Timeline dot */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-[#f3c532] border-4 border-[#FA03688A] z-10"></div>

                {/* Content */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="inline-block bg-[#fa0368] text-white px-4 py-1 rounded-full text-sm font-semibold mb-3">
                    {item.date}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Registration Form Section */}
      <section className="py-20 bg-gradient-to-r from-[#fa0368] to-[#FA03688A]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="inline-block bg-[#fa0368] px-12 py-3 text-white text-4xl font-extrabold uppercase transform -skew-x-6 relative z-10 shadow-[5px_5px_0_#FA03688A]">
              Register Now
            </h2>
            <p className="mt-6 text-white text-xl max-w-2xl mx-auto">
              Secure your spot in the Fitness Fest competitions. Early bird registration closes on March 31, 2025.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
            <RegistrationForm />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="inline-block bg-[#fa0368] px-12 py-3 text-black text-4xl font-extrabold uppercase transform -skew-x-6 relative z-10 shadow-[5px_5px_0_#FA03688A]">
              Competition Rules
            </h2>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              Familiarize yourself with our competition guidelines to ensure fair play and safety for all participants.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <ul className="space-y-8 list-none">
              {[
                {
                  title: "Registration Requirements",
                  text: "All participants must complete registration at least 14 days before the event. Valid ID and proof of fitness level may be required for certain competitions.",
                },
                {
                  title: "Age Categories",
                  text: "Competitions are divided into age categories: 18-29, 30-39, 40-49, and 50+. Participants must compete in their respective age group.",
                },
                {
                  title: "Equipment & Attire",
                  text: "Participants must wear appropriate athletic attire. Personal equipment must meet safety standards and be approved by judges before competition.",
                },
                {
                  title: "Judging & Scoring",
                  text: "All competitions are judged by certified professionals. Scoring systems vary by event and will be explained in detail at the pre-competition briefing.",
                },
                {
                  title: "Health & Safety",
                  text: "Participants must sign a waiver and are encouraged to undergo a medical check-up before competing. Medical staff will be present at all events.",
                },
                {
                  title: "Code of Conduct",
                  text: "Unsportsmanlike behavior will not be tolerated. Respect for fellow competitors, judges, and staff is mandatory. Violations may result in disqualification.",
                },
              ].map((rule, index) => (
                <li key={index} className="relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 bg-[#FA03688A] text-black rounded-full flex items-center justify-center font-bold text-white">
                    {index + 1}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{rule.title}</h4>
                  <p className="text-gray-600">{rule.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              {
                icon: "users",
                number: "1,500+",
                text: "Competitors",
              },
              {
                icon: "trophy",
                number: "$70,000",
                text: "Total Prizes",
              },
              {
                icon: "globe",
                number: "35",
                text: "Countries",
              },
              {
                icon: "dumbbell",
                number: "6",
                text: "Competitions",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl text-center shadow-md transition-transform hover:-translate-y-1"
              >
                <div className="text-4xl text-[#70adb0] mb-4">
                  {stat.icon === "users" && <i className="fas fa-users"></i>}
                  {stat.icon === "trophy" && <i className="fas fa-trophy"></i>}
                  {stat.icon === "globe" && <i className="fas fa-globe"></i>}
                  {stat.icon === "dumbbell" && <i className="fas fa-dumbbell"></i>}
                </div>
                <div className="text-4xl font-extrabold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm font-semibold text-gray-500 uppercase">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

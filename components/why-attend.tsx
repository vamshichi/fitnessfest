import { MessageCircle, Lightbulb, Coffee, Brain, Award, Users } from "lucide-react"

export default function WhyAttend() {
  const features = [
    {
      icon: MessageCircle,
      number: "01.",
      title: "IN PERSON NETWORKING",
      description: "Nemo cubilia non, exercitationem ridiculus modi faucibus nullam animi suspendie in porttitor.",
    },
    {
      icon: Lightbulb,
      number: "02.",
      title: "BOOST CREATIVITY",
      description: "Nemo cubilia non, exercitationem ridiculus modi faucibus nullam animi suspendie in porttitor.",
    },
    {
      icon: Coffee,
      number: "03.",
      title: "AFTER PARTY EVENT",
      description: "Nemo cubilia non, exercitationem ridiculus modi faucibus nullam animi suspendie in porttitor.",
    },
    {
      icon: Brain,
      number: "04.",
      title: "SPARK CREATIVITY",
      description: "Nemo cubilia non, exercitationem ridiculus modi faucibus nullam animi suspendie in porttitor.",
    },
    {
      icon: Award,
      number: "05.",
      title: "TOP SPEAKERS",
      description: "Nemo cubilia non, exercitationem ridiculus modi faucibus nullam animi suspendie in porttitor.",
    },
    {
      icon: Users,
      number: "06.",
      title: "POTENTIAL CLIENTS",
      description: "Nemo cubilia non, exercitationem ridiculus modi faucibus nullam animi suspendie in porttitor.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h6 className="text-pink-500 text-sm font-semibold mb-2">JOIN OUR EVENT</h6>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">WHY ATTEND OUR EVENT?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Quam amet tristique adipisicing incididunt arcu, excepturi molestie turpis deserunt ducimus malesuada minus
            mauris veniam.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-9 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-center py-4">
                <feature.icon className="w-15 h-15 text-pink-500" />
                <span className="text-5xl font-bold  text-gray-300">{feature.number}</span>
              </div>
              <h5 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h5>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { FiSettings, FiUsers, FiSend } from "react-icons/fi";

const CardSection = () => {
  const cards = [
    {
      title: "WHAT WE DO?",
      description:
        "Habitant porta viverra voluptatum facilisi. Dolor mi sit! Recusandae, nisl, habitasse justo architecto viverra volupt.",
      icon: <FiSettings size={32} color="white" />,
    },
    {
      title: "WHAT WE ARE?",
      description:
        "Habitant porta viverra voluptatum facilisi. Dolor mi sit! Recusandae, nisl, habitasse justo architecto viverra volupt.",
      icon: <FiUsers size={32} color="white" />,
    },
    {
      title: "OUR AIM & MISSION",
      description:
        "Habitant porta viverra voluptatum facilisi. Dolor mi sit! Recusandae, nisl, habitasse justo architecto viverra volupt.",
      icon: <FiSend size={32} color="white" />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-[#f9f9f9] p-8 rounded-3xl text-center shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <div className="w-20 h-20 mx-auto mb-6 bg-[#ff0066] rounded-full flex items-center justify-center">
            {card.icon}
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-3">{card.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardSection;

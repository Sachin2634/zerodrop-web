import React from 'react'

const CardsData = [
  {
    description:
      "Environmental scientist with 15+ years in sustainable technology development.",
    userimage: "https://placehold.net/avatar.svg",
    name: "Sarah L.",
    position: "CEO & Founder"
  },
  {
    description:
      "Former Tesla engineer specializing in chemical formulation and eco-friendly solutions.",
    userimage: "https://placehold.net/avatar-2.svg",
    name: "James M.",
    position: "CTO"
  },
  {
    description:
      "Operations expert with experience scaling service businesses across multiple markets.",
    userimage: "https://placehold.net/avatar-3.svg",
    name: "Emily R.",
    position: "Head of Operations"
  },
];

const MeetOurTeam = () => {
  return (
    <div className="pb-20 flex flex-col items-center p-16">
      <div className="mb-8 text-4xl font-bold text-[#237039]">Meet Our Team</div>
      <div className="mb-16 text-lg text-center text-gray-600">
        The passionate individuals driving our eco-friendly revolution
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {CardsData.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center w-64 px-6 py-4 rounded-2xl gap-4 shadow-lg"
          >
            <div className="p-2 rounded-full bg-[#41B3A3]/10">
              <img
                src={card.userimage}
                alt={card.name}
                className="rounded-full w-12 h-12"
              />
            </div>
            <div className="font-bold">{card.name}</div>
            <div className="font-bold bg-[#41B3A3] text-white text-xs px-2 py-0.5 rounded-full">
              {card.position}
            </div>
            <div className="font-light">{card.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MeetOurTeam
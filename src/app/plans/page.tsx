"use client";
import React, { useState } from "react";

const CardsData = [
  {
    time: "Monthly",
    type: "Basic",
    price: "$19.99/month",
    features: [
      "1 car cleaning per month",
      "Waterless wash & wax",
      "Interior vacuum",
      "Tire shine",
      "24/7 customer support",
      "Flexible scheduling",
    ],
    image: "https://placehold.net/100x100.svg",
  },
  {
    time: "Monthly",
    type: "Standard",
    price: "$34.99/month",
    features: [
      "2 car cleanings per month",
      "Waterless wash & wax",
      "Interior vacuum",
      "Tire shine",
      "24/7 customer support",
      "Flexible scheduling",
    ],
    image: "https://placehold.net/100x100.svg",
  },
  {
    time: "Monthly",
    type: "Premium",
    price: "$49.99/month",
    features: [
      "3 car cleanings per month",
      "Waterless wash & wax",
      "Interior vacuum",
      "Tire shine",
      "24/7 customer support",
      "Flexible scheduling",
    ],
    image: "https://placehold.net/100x100.svg",
  },
  {
    time: "Quarterly",
    type: "Basic",
    price: "$49.99/month",
    features: [
      "1 car cleaning per month",
      "Waterless wash & wax",
      "Interior vacuum",
      "Tire shine",
      "24/7 customer support",
      "Flexible scheduling",
    ],
    image: "https://placehold.net/100x100.svg",
  },
  {
    time: "Quarterly",
    type: "Standard",
    price: "$79.99/month",
    features: [
      "2 car cleanings per month",
      "Waterless wash & wax",
      "Interior vacuum",
      "Tire shine",
      "24/7 customer support",
      "Flexible scheduling",
    ],
    image: "https://placehold.net/100x100.svg",
  },
  {
    time: "Quarterly",
    type: "Premium",
    price: "$119.99/month",
    features: [
      "3 car cleanings per month",
      "Waterless wash & wax",
      "Interior vacuum",
      "Tire shine",
      "24/7 customer support",
      "Flexible scheduling",
    ],
    image: "https://placehold.net/100x100.svg",
  },
  {
    time: "Yearly",
    type: "Basic",
    price: "$119.99/month",
    features: [
      "1 car cleaning per month",
      "Waterless wash & wax",
      "Interior vacuum",
      "Tire shine",
      "24/7 customer support",
      "Flexible scheduling",
    ],
    image: "https://placehold.net/100x100.svg",
  },
  {
    time: "Yearly",
    type: "Standard",
    price: "$139.99/month",
    features: [
      "2 car cleanings per month",
      "Waterless wash & wax",
      "Interior vacuum",
      "Tire shine",
      "24/7 customer support",
      "Flexible scheduling",
    ],
    image: "https://placehold.net/100x100.svg",
  },
  {
    time: "Yearly",
    type: "Premium",
    price: "$159.99/month",
    features: [
      "3 car cleanings per month",
      "Waterless wash & wax",
      "Interior vacuum",
      "Tire shine",
      "24/7 customer support",
      "Flexible scheduling",
    ],
    image: "https://placehold.net/100x100.svg",
  },
];

const Plans = () => {
  const [selectedPlan, setSelectedPlan] = useState("Monthly");

  return (
    <div>
      <div className="flex flex-col items-center p-16 pb-8 bg-linear-to-br from-yellow-50 via-blue-50/50 to-blue-100/50">
        <div className="text-5xl font-bold text-[#237039]">Choose Your</div>
        <div className="mb-8 text-5xl font-bold text-[#4cabc0]">
          EcoClean Plan
        </div>
        <div className="mb-16 text-lg text-center text-gray-600">
          Flexible subscription plans designed to keep your car spotless while
          protecting the <br /> environment. All plans include our signature
          1-liter waterless cleaning technology.
        </div>
        <div className="mb-12 flex gap-1 rounded-4xl bg-white border border-gray-200 p-1 shadow-lg">
          {["Monthly", "Quarterly", "Yearly"].map((plan, index) => (
            <button
              key={index}
              onClick={() => setSelectedPlan(plan)}
              className={`px-6 py-1 rounded-full font-medium ${
                selectedPlan === plan
                  ? "bg-[#419E5B] text-white"
                  : "text-gray-700 hover:bg-gray-300"
              }`}
            >
              {plan}
              
              {plan === 'Yearly' && (
                <div className="p-0.5 text-xs">
                  Best Value
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mb-20 gap-2">
        {CardsData.map(
          (card, index) =>
            card.time === selectedPlan && (
              <div
                key={index}
                className="flex flex-col items-center text-center w-64 px-6 py-4 rounded-2xl gap-4 shadow-lg"
              >
                <div className="p-2 rounded-full bg-[#41B3A3]/10">
                  <img
                    src={card.image}
                    alt={card.type}
                    className="rounded-full w-12 h-12"
                  />
                </div>
                <div className="font-bold">{card.type}</div>
                <div className="font-light">{card.price}</div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Plans;

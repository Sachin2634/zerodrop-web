"use client";
import React, { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { LuCrown } from "react-icons/lu";
import { MdOutlineShield } from "react-icons/md";
import { SiTicktick } from "react-icons/si";

const CardsData = [
  {
    time: "Monthly",
    type: "Basic Clean",
    quote: "Perfect for single car owners who want eco-friendly cleaning",
    price: "$19.99",
    features: [
      "1 car cleaning per month",
      "Waterless wash & wax",
      "Interior vacuum",
      "Tire shine",
      "24/7 customer support",
      "Flexible scheduling",
    ],
    image: <MdOutlineShield size={32} color="white" />,
  },
  {
    time: "Monthly", 
    type: "Family Pro",
    quote: "Ideal for families with multiple vehicles",
    price: "$34.99",
    features: [
      "2 car cleanings per month",
      "Waterless wash & wax",
      "Interior vacuum",
      "Tire shine",
      "24/7 customer support",
      "Flexible scheduling",
    ],
    image: <FaRegStar size={32} color="white" />,
  },
  {
    time: "Monthly",
    type: "Corporate Elite",
    quote: "Comprehensive solution for businesses and fleet owners",
    price: "$49.99",
    features: [
      "3 car cleanings per month",
      "Waterless wash & wax",
      "Interior vacuum",
      "Tire shine",
      "24/7 customer support",
      "Flexible scheduling",
    ],
    image: <LuCrown size={28} color="white" />,
  },
  {
    time: "Quarterly",
    type: "Basic Clean",
    quote: "Perfect for single car owners who want eco-friendly cleaning",
    price: "$49.99",
    features: [
      "1 car cleaning per month",
      "Waterless wash & wax",
      "Interior vacuum",
      "Tire shine",
      "24/7 customer support",
      "Flexible scheduling",
    ],
    image: <MdOutlineShield size={32} color="white" />,
  },
  {
    time: "Quarterly",
    type: "Family Pro",
    quote: "Ideal for families with multiple vehicles",
    price: "$79.99",
    features: [
      "2 car cleanings per month",
      "Waterless wash & wax",
      "Interior vacuum",
      "Tire shine",
      "24/7 customer support",
      "Flexible scheduling",
    ],
    image: <FaRegStar size={32} color="white" />,
  },
  {
    time: "Quarterly",
    type: "Corporate Elite",
    quote: "Comprehensive solution for businesses and fleet owners",
    price: "$119.99",
    features: [
      "3 car cleanings per month",
      "Waterless wash & wax",
      "Interior vacuum",
      "Tire shine",
      "24/7 customer support",
      "Flexible scheduling",
    ],
    image: <LuCrown size={28} color="white" />,
  },
  {
    time: "Yearly",
    type: "Basic Clean",
    quote: "Perfect for single car owners who want eco-friendly cleaning",
    price: "$119.99",
    features: [
      "1 car cleaning per month",
      "Waterless wash & wax",
      "Interior vacuum",
      "Tire shine",
      "24/7 customer support",
      "Flexible scheduling",
    ],
    image: <MdOutlineShield size={32} color="white" />,
  },
  {
    time: "Yearly",
    type: "Family Pro",
    quote: "Ideal for families with multiple vehicles",
    price: "$139.99",
    features: [
      "2 car cleanings per month",
      "Waterless wash & wax",
      "Interior vacuum",
      "Tire shine",
      "24/7 customer support",
      "Flexible scheduling",
    ],
    image: <FaRegStar size={32} color="white" />,
  },
  {
    time: "Yearly",
    type: "Corporate Elite",
    quote: "Comprehensive solution for businesses and fleet owners",
    price: "$159.99",
    features: [
      "3 car cleanings per month",
      "Waterless wash & wax",
      "Interior vacuum",
      "Tire shine",
      "24/7 customer support",
      "Flexible scheduling",
    ],
    image: <LuCrown size={28} color="white" />,
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
        <div className="px-1 flex rounded-4xl bg-white border border-gray-200 p-1 shadow-lg">
          {["Monthly", "Quarterly", "Yearly"].map((plan, index) => (
            <button
              key={index}
              onClick={() => setSelectedPlan(plan)}
              className={`px-6 py-1 rounded-full font-medium ${
                selectedPlan === plan
                  ? "bg-[#419E5B] text-white"
                  : "text-gray-700"
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-48 justify-items-center mt-12 mb-20">
        {CardsData.map(
          (card, index) =>
            card.time === selectedPlan && (
              <div
                key={index}
                className="flex flex-col text-center w-88 px-6 py-4 rounded-2xl gap-4 shadow-lg"
              >
                <div className="p-3 rounded-full bg-[#419E5B] w-fit mx-auto">
                  {card.image}
                </div>
                <div className="text-2xl">{card.type}</div>
                <div className="text-lg font-light">{card.quote}</div>
                <div className="flex font-bold text-3xl items-end justify-center">{card.price}<div className="font-normal text-base text-gray-500 ml-2">/{card.time.toLowerCase()}</div></div>
                <ul className="text-left space-y-2 mt-4 mb-4">
                  {card.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex gap-2 items-center"><SiTicktick className="text-[#419E5B]/70 mr-1" />{feature}</li>
                  ))}
                </ul>
                <button className="bg-[#419E5B] text-white px-6 py-2 rounded-full mt-auto mb-4">Choose Plan</button>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Plans;

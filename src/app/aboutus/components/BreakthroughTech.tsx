import Image from "next/image";
import React from "react";
import { LuRecycle, LuShield } from "react-icons/lu";
import { MdOutlineWaterDrop } from "react-icons/md";

let technologies = [
    {
        icon: <MdOutlineWaterDrop size={24} color="blue" />,
        heading: "Nano-Encapsulation",
        description: "Advanced particles lift dirt without water, protecting paint surfaces."
    },
    {
        icon: <LuRecycle size={24} color="orange" />,
        heading: "Biodegradable Formula",
        description: "100% plant-based ingredients that break down naturally."
    },
    {
        icon: <LuShield size={24} color="#800080" />,
        heading: "Paint Protection",
        description: "Creates a protective micro-layer that repels dirt and UV rays."
    },
]
const BreakthroughTech = () => {
  return (
    <div className="px-40 py-8 bg-linear-to-tr from-yellow-50/20 via-green-50 to-green-100">
      <div className="flex justify-between">
        <div className="space-y-4">
          <div className="text-3xl font-bold text-[#237039]">
            Breakthrough Technology
          </div>
          <div className="text-sm text-gray-600">
            Our patented waterless cleaning formula represents years of research
            <br />
            into nano-particle technology, biodegradable surfactants, and
            protective <br />
            coatings.
          </div>
          {technologies.map((tech, index) => (
            <div key={index} className="flex space-x-4">
              {tech.icon}
              <div className="space-y-1">
                <div className="font-semibold text-[#237070] text-sm">
                  {tech.heading}
              </div>
              <div className="text-sm text-gray-600">
                {tech.description}
              </div>
            </div>
          </div>))}
        </div>
        <div className="w-120 h-80 overflow-hidden rounded-full translate-x-4">
          <Image
            src="/images/our-story.jpg"
            alt="Our Story Image"
            width={1000}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default BreakthroughTech;

import Image from "next/image";
import React from "react";

const OurStory = () => {
  return (
    <div className="px-40 pb-8 bg-linear-to-tr from-blue-50 via-blue-50/10 to-blue-100/50">
      <div className="flex justify-between">
        <div className="space-y-4">
            <div className="text-3xl font-bold text-[#237039]">Our Story</div>
            <div className="text-sm text-gray-600">
              Founded in 2019 by environmental scientist Dr. Sarah Martinez, EcoClean Pro was<br />
              born from a simple yet powerful observation:traditional car washes waste<br />
              hundreds of liters of water per vehicle.
            </div>
            <div className="text-sm text-gray-600">
              After two years of research and development, we created arevolutionary waterless<br />
              cleaning formula that uses just 1 liter to clean an entire car, maintaining premium<br />
              quality while protecting our planet.
            </div>
            <div className="text-sm text-gray-600">
              Today, we're proud to serve over 1,000 customers across 50+ cities, having saved<br /> 
              over 2.5 million liters of water and counting.
            </div>
        </div>
        <div className="w-120 h-80 overflow-hidden rounded-full translate-x-4 z-10">
            <Image src="/images/our-story.jpg" alt="Our Story Image" width={1000} height={200} />
        </div>
      </div>
    </div>
  );
};

export default OurStory;

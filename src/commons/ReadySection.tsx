import React from "react";

const ReadySection = () => {
  return (
    <div className="pb-20 flex flex-col items-center p-16 bg-[#4cabc0] text-white">
      <div className="mb-8 text-4xl font-bold">Ready to Go Green?</div>
      <div className="mb-16 text-lg text-center">
        Join thousands of eco-conscious car owners who've made the switch to
        waterless cleaning.
      </div>
      <div className="space-x-4">
        <button className="text-[#419E5B] border-2 bg-white px-6 py-2 rounded-full">
          Start Your 7-Day Trial
        </button>
        <button className="border-white border-2 px-6 py-2 rounded-full">
          Contact Sales
        </button>
      </div>
    </div>
  );
};

export default ReadySection;

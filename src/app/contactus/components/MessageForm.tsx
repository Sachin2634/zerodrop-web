import React from "react";
import { TbMessageCircle } from "react-icons/tb";

const MessageForm = () => {
  return (
    <div className="rounded-2xl border border-gray-300 shadow-lg p-6 max-w-lg mx-auto my-16">
      <div className="flex gap-2 items-center text-2xl text-[#237039] mb-1">
        <TbMessageCircle /> Send Us a Message
      </div>
      <div className="text-[#237039]/80">
        Fill out the form below and we'll get back to you within 2 hours.
      </div>
      <div className="flex flex-col gap-4 my-4 w-full">
        <div className="w-full">
          <input type="text" className="border px-2 py-1 rounded-lg mr-2" placeholder="First Name"/>
          <input type="text" className="border px-2 py-1 rounded-lg" placeholder="Last Name"/>
        </div>
        <div>
          <input type="email" className="border px-2 py-1 rounded-lg mr-2" placeholder="Email"/>
          <input type="text" className="border px-2 py-1 rounded-lg" placeholder="Phone Number"/>
        </div>
        <input type="text" className="border px-2 py-1 rounded-lg" placeholder="Company/Organization (Optional)"/>
        <input type="text" className="border px-2 py-1 rounded-lg" placeholder="Type of Inquiry"/>
        <input type="text" className="border px-2 py-1 rounded-lg" placeholder="Subject"/>
        <input type="text" className="border px-2 py-1 rounded-lg" placeholder="Message"/>
      </div>
    </div>
  );
};

export default MessageForm;

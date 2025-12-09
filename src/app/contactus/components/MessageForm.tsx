import React from "react";
import { FaRegPaperPlane } from "react-icons/fa6";
import { TbMessageCircle } from "react-icons/tb";

const MessageForm = () => {
  return (
    <div className="rounded-2xl border border-gray-300 shadow-lg p-6 m-16">
      <div className="flex gap-2 items-center text-2xl text-[#237039] mb-1">
        <TbMessageCircle /> Send Us a Message
      </div>
      <div className="text-[#237039]/80 text-sm">
        Fill out the form below and we'll get back to you within 2 hours.
      </div>
      <div className="flex flex-col gap-4 my-8 w-full">
        <div className="w-full">
          <input type="text" className="border border-gray-400 px-2 py-1 rounded-lg text-sm mr-2" placeholder="First Name"/>
          <input type="text" className="border border-gray-400 px-2 py-1 rounded-lg text-sm" placeholder="Last Name"/>
        </div>
        <div>
          <input type="email" className="border border-gray-400 px-2 py-1 rounded-lg text-sm mr-2" placeholder="Email"/>
          <input type="text" className="border border-gray-400 px-2 py-1 rounded-lg text-sm" placeholder="Phone Number"/>
        </div>
        <input type="text" className="border border-gray-400 px-2 py-1 rounded-lg text-sm" placeholder="Company/Organization (Optional)"/>
        <input type="text" className="border border-gray-400 px-2 py-1 rounded-lg text-sm" placeholder="Type of Inquiry"/>
        <input type="text" className="border border-gray-400 px-2 py-1 rounded-lg text-sm" placeholder="Subject"/>
        <input type="textarea" className="border border-gray-400 px-2 py-1 rounded-lg text-sm" placeholder="Message"/>
      </div>
      <button className="w-full mt-2 mb-4">
        <div className="flex w-full justify-center items-center bg-[#419E5B] text-white text-xs px-4 py-3 rounded-lg">
          <FaRegPaperPlane className="mr-4" />
          Send Message
        </div>
      </button>
      <div className="text-gray-500 text-xs text-center">
        By submitting this form, you agree to our Privacy Policy. We'll only use your information to respond <br /> to your inquiry.
      </div>
    </div>
  );
};

export default MessageForm;

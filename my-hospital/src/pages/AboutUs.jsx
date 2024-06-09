import React from 'react';
import { FaAmbulance, FaClock } from 'react-icons/fa';
import { MdCall } from 'react-icons/md';

const AboutUs = () => {
  const boxes = [
    {
      title: "OUR LOCATIONS",
      description: "MH F-Block ,VIT Vellore",
      icon: <FaAmbulance />,
      color: "bg-violet-200",
      hoverColor: "hover:bg-violet-300",
    },
    {
      title: "CONNECT WITH US",
      description: "CALL : +91 99876 54321",
      icon: <MdCall />,
      color: "bg-orange-100",
      hoverColor: "hover:bg-orange-200",
    },
    {
      title: "VISITING HOURS",
      description: "10:00 AM - 05:00 PM",
      icon: <FaClock />,
      color: "bg-green-100",
      hoverColor: "hover:bg-green-200",
    },

  ];

  return (
    <div className="flex">
      <div className="relative flex flex-col p-12 mt-11 w-1/4">
        {boxes.map((box, index) => (
          <div
            key={index}
            className={`p-9 m-3 rounded-3xl shadow-lg transition-all duration-300 transform hover:scale-105 ${box.color} ${box.hoverColor} w-full`}
          >
            <div className="flex">
              <div className="text-3xl mb-4 pr-5">{box.icon}</div>
              <h2 className="text-xl font-semibold mb-2">{box.title}</h2>
            </div>
            <p className="text-gray-700 mb-4">{box.description}</p>
            <a href="#" className="text-blue-500 hover:underline">
              Learn More
            </a>
          </div>
        ))}
      </div>
      <div className="relative justify-between p-12 mt-11 w-3/4 ">
        <div className="text-5xl ">
          Send Us A <span className="font-bold">Message</span> Anytime
        </div>
        <div className="mt-4 text-gray-500 mb-6">Your email address will not be published. Required fields are marked *</div>
        <div className="border-x border-y border-gray-300 h-auto rounded-3xl pb-7">
          <form action="" className="flex flex-col">
            <label className="text-gray-500 pl-9 pt-5 pb-3">Your Message*</label>
            <input
              type="text"
              placeholder="Please write your message here"
              className="border-2 bg-gray-200 text-gray-500 w-4/5 rounded-2xl h-20 pl-5 ml-9 text-lg"
            />
            <label className="text-gray-500 pl-9 pt-5 pb-3 mt-4">Name*</label>
            <input
              type="text"
              placeholder="Please enter name"
              className="border-2 bg-gray-200 text-gray-500 w-4/5 rounded-full h-16 pl-4 ml-9 text-lg"
            />
            <label className="text-gray-500 pl-9 pt-5 pb-3 mt-4">Email*</label>
            <input
              type="email"
              placeholder="Please enter your email address"
              className="border-2 bg-gray-200 text-gray-500 w-4/5 rounded-full h-16 pl-5 ml-9 text-lg"
            />
            <label className="text-gray-500 pl-9 pt-5 pb-3 mt-4">Phone*</label>
            <input
              type="number"
              placeholder="Please enter your phone number"
              className="border-2 bg-gray-200 text-gray-500 w-4/5 rounded-full h-16 pl-5 ml-9 text-lg"
            />
            <label className="text-gray-500 pl-9 pt-5 pb-3 mt-4">Website*</label>
            <input
              type="text"
              placeholder="Please enter your website"
              className="border-2 bg-gray-200 text-gray-500 w-4/5 rounded-full h-16 pl-5 ml-9 text-lg"
            />
            <label className="pl-9 mt-5">
              <input
                type="checkbox"
                className="mr-2"
              />
              I agree terms and conditions
            </label>
            <button></button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

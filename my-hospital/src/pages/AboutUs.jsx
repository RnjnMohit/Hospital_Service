import React, {useState} from 'react';
import { FaAmbulance, FaClock, FaLongArrowAltRight, FaPhoneAlt, FaPrint, FaEnvelope, FaShareAlt, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdCall } from 'react-icons/md';
import bg from '../assets/bg5.png'

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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className='min-h-screen'>
      <div className="pb-4 pt-1 bg-gradient-to-b from-gray-300 to-white">
        <div className=" mt-28 rounded-2xl h-60 ml-5 mr-5" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="bg-gray-100 rounded-2xl shadow-lg px-6 pb-6 flex relative ml-10 mr-10 pt-16 -mt-28 text-xl">
          <div className="flex w-2/3">
            <h1 className="text-5xl font-bold text-gray-900 pt-5 pl-5 h-fit">Contact <span className="font-normal">Us</span></h1>
          </div>
          <div className="flex flex-col space-x-4 w-1/3 items-end">
            <div className="group flex space-x-4 items-center p-2 rounded-full bg-white w-fit hover:bg-green-500 hover:scale-105 ease-in-out transition duration-300">
              <FaPhoneAlt className="ml-3  text-green-500 group-hover:text-white" />
              <span className="text-green-700 group-hover:text-white font-semibold px-2 py-2">CALL: +91 99876 54321</span>
            </div>
            <div className="flex justify-end p-2 relative">
              <button className="bg-purple-200 p-3 m-2 rounded-full text-purple-600 hover:bg-purple-600 hover:text-purple-200 ease-linear transition-all">
                <FaPrint className="text-xl " />
              </button>
              <button className="bg-purple-200 p-3 m-2 rounded-full text-purple-600 hover:bg-purple-600 hover:text-purple-200 ease-linear transition-all">
                <FaEnvelope className="text-xl" />
              </button>
              <button className="bg-purple-200 p-3 m-2 rounded-full text-purple-600 hover:bg-purple-600 hover:text-purple-200 ease-linear transition-all" onClick={toggleDropdown}>
                <FaShareAlt className="text-xl" />
              </button>
              {dropdownOpen && (
                <div className="absolute top-16 right-0 bg-white shadow-lg rounded-lg p-2 flex flex-col space-y-2 transition-all duration-300 ease-in-out">
                  <a href="https://www.facebook.com/" className="flex items-center justify-center p-2 rounded-full hover:bg-gray-200">
                    <FaFacebook className="text-blue-600 text-xl" />
                  </a>
                  <a href="https://www.linkdin.com/" className="flex items-center justify-center p-2 rounded-full hover:bg-gray-200">
                    <FaLinkedin className="text-blue-700 text-xl" />
                  </a>
                  <a href="https://www.twitter.com/" className="flex items-center justify-center p-2 rounded-full hover:bg-gray-200">
                    <FaTwitter className="text-blue-400 text-xl" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
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
              <a href="#" className="group text-custom-blue hover:underline flex flex-row items-center space-x-2">
                <FaLongArrowAltRight className='transition-transform duration-300 group-hover:translate-x-24' />
                <span className='transition-transform duration-300 group-hover:-translate-x-6'>Learn More</span>
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
    </div>
  );
};

export default AboutUs;

import React, { useState } from 'react';
import {
  FaPhoneAlt,
  FaPrint,
  FaEnvelope,
  FaShareAlt,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaLongArrowAltRight,
} from 'react-icons/fa';
import { FaHeartPulse } from "react-icons/fa6";
import { GiPillDrop, GiBrokenBone, GiMale, GiFemale } from 'react-icons/gi';
import { PiDna } from 'react-icons/pi';
import { BiInjection } from 'react-icons/bi';
import { IoMdHappy } from 'react-icons/io';
import { LiaToothSolid } from 'react-icons/lia';
import { MdOutlineExpandMore } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Service() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const boxes = [
    {
      title: 'Nephrology',
      description: '20+ Doctors are available under this department who serve.',
      icon1: <GiPillDrop />,
      link: '/service/nephrology',
      color: 'bg-gray-200',
      hoverColor: 'hover:bg-white',
      hoverTran: 'hover:translate-x-3 hover:translate-y-3',
      border: 'hover:border-r-8 hover:border-b-8',
    },
    {
      title: 'Cardiology',
      description: '20+ Doctors are available under this department who serve.',
      icon1: <FaHeartPulse />,
      link: '/service/cardiology',
      color: 'bg-gray-200',
      hoverColor: 'hover:bg-white',
      hoverTran: 'hover:translate-x-3 hover:translate-y-3',
      border: 'hover:border-r-8 hover:border-b-8',
    },
    {
      title: 'Neurology',
      description: '20+ Doctors are available under this department who serve.',
      icon1: <PiDna />,
      link: '/service/neurology',
      color: 'bg-gray-200',
      hoverColor: 'hover:bg-white',
      hoverTran: 'hover:-translate-x-3 hover:translate-y-3',
      border: 'hover:border-l-8 hover:border-b-8',
    },
    {
      title: 'Orthopedic',
      description: '20+ Doctors are available under this department who serve.',
      icon1: <GiBrokenBone />,
      link: '/service/orthopedic',
      color: 'bg-gray-200',
      hoverColor: 'hover:bg-white',
      hoverTran: 'hover:-translate-x-3 hover:translate-y-3',
      border: 'hover:border-l-8 hover:border-b-8',
    },
  ];

  const boxes1 = [
    {
      title: 'Psychiatrist',
      description: '20+ Doctors are available under this department who serve.',
      icon1: <BiInjection />,
      link: '/service/psychiatrist',
      color: 'bg-gray-200',
      hoverColor: 'hover:bg-white',
      hoverTran: 'hover:translate-x-3 hover:-translate-y-3',
      border: 'hover:border-r-8 hover:border-t-8',
    },
    {
      title: 'Dentist',
      description: '20+ Doctors are available under this department who serve.',
      icon1: <LiaToothSolid />,
      link: '/service/dentist',
      color: 'bg-gray-200',
      hoverColor: 'hover:bg-white',
      hoverTran: 'hover:translate-x-3 hover:-translate-y-3',
      border: 'hover:border-r-8 hover:border-t-8',
    },
    {
      title: 'Andrologists',
      description: '20+ Doctors are available under this department who serve.',
      icon1: <GiMale />,
      link: '/service/andrologists',
      color: 'bg-gray-200',
      hoverColor: 'hover:bg-white',
      hoverTran: 'hover:-translate-x-3 hover:-translate-y-3',
      border: 'hover:border-l-8 hover:border-t-8',
    },
    {
      title: 'Gynecologist',
      description: '20+ Doctors are available under this department who serve.',
      icon1: <GiFemale />,
      link: '/service/gynecologist',
      color: 'bg-gray-200',
      hoverColor: 'hover:bg-white',
      hoverTran: 'hover:-translate-x-3 hover:-translate-y-3',
      border: 'hover:border-l-8 hover:border-t-8',
    },
  ];

  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const loadMore = () => {
    setIsButtonClicked(true);
  };

  return (
    <div>
      <div className="pb-4 pt-1 bg-gradient-to-b from-gray-300 to-white">
<<<<<<< Updated upstream
        <div className=" mt-32 rounded-2xl h-60 ml-5 mr-5 bg-[url('https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/04/bg23.jpg')]" style={{  backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
=======
        <div
          className="mt-32 rounded-2xl h-60 ml-5 mr-5"
          style={{
            backgroundImage: `url('https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/04/bg23.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
>>>>>>> Stashed changes
        <div className="bg-gray-100 rounded-2xl shadow-lg px-6 pb-6 flex relative ml-10 mr-10 pt-16 -mt-20 text-xl">
          <div className="flex w-2/3">
            <h1 className="text-5xl font-bold text-gray-900 pt-5 pl-5 h-fit">Services</h1>
          </div>
          <div className="flex flex-col space-x-4 w-1/3 items-end">
            <div className="group flex space-x-4 items-center p-2 rounded-full bg-white w-fit hover:bg-green-500 hover:scale-105 ease-in-out transition duration-300">
              <FaPhoneAlt className="ml-3 text-green-500 group-hover:text-white" />
              <span className="text-green-700 group-hover:text-white font-semibold px-2 py-2">
                CALL: +91 99876 54321
              </span>
            </div>
            <div className="flex justify-end p-2 relative">
              <button className="bg-purple-200 p-3 m-2 rounded-full text-purple-600 hover:bg-purple-600 hover:text-purple-200 ease-linear transition-all">
                <FaPrint className="text-xl" />
              </button>
              <button className="bg-purple-200 p-3 m-2 rounded-full text-purple-600 hover:bg-purple-600 hover:text-purple-200 ease-linear transition-all">
                <FaEnvelope className="text-xl" />
              </button>
              <button
                className="bg-purple-200 p-3 m-2 rounded-full text-purple-600 hover:bg-purple-600 hover:text-purple-200 ease-linear transition-all"
                onClick={toggleDropdown}
              >
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
<<<<<<< Updated upstream
      <div className='text animate-bounce  transform-gpu flex my-16 text-xl lg:text-5xl font-semibold lg:font-extrabold w-full justify-center'>
        <span className='pr-4 '>Always Available For Your Service </span>
        <IoMdHappy className='text-6xl' />
      </div>
      <div className="flex  p-4 my-4 mx-20 space-x-6 ">
=======
      <div className="text animate-bounce transform-gpu flex my-16 text-5xl font-extrabold w-full justify-center">
        <span className="pr-4">Always Available For Your Service</span>
        <IoMdHappy className="text-6xl" />
      </div>
      <div className="flex p-4 my-4 mx-20 space-x-6">
>>>>>>> Stashed changes
        {boxes.map((box, index) => (
          <Link
            to={box.link}
            key={index}
<<<<<<< Updated upstream
            className={` p-6 rounded-3xl ${box.hoverTran} hover:${box.icon2}   transform duration-150 ${box.border} hover:border-purple-200  hover:scale-105  ${box.color} ${box.hoverColor} w-1/4   h-80`}
=======
            className={`p-6 rounded-3xl ${box.hoverTran} ${box.border} transform duration-150 ${box.color} ${box.hoverColor} w-1/4 h-80`}
>>>>>>> Stashed changes
          >
            <div className="text-5xl py-6 pl-2 mb-4 text-blue-600 pr-56">{box.icon1}</div>
            <h2 className="text-2xl font-semibold mb-2">{box.title}</h2>
            <p className="text-gray-500 mb-4 text-xl">{box.description}</p>
            <a href="#" className="group text-custom-blue hover:underline flex flex-row items-center space-x-2">
              <FaLongArrowAltRight className="transition-transform duration-700 group-hover:translate-x-24" />
              <span className="transition-transform duration-700 group-hover:-translate-x-6">
                Read More
              </span>
            </a>
          </Link>
        ))}
      </div>
      <div className="">
        <div className="text-center">
          {isButtonClicked && (
            <div className="text-left flex p-4 my-4 mx-20 space-x-6">
              {boxes1.map((box, index) => (
                <Link
                  to={box.link}
                  key={index}
                  className={`p-6 rounded-3xl ${box.hoverTran} ${box.border} transform duration-150 ${box.color} ${box.hoverColor} w-1/4 h-80`}
                >
                  <div className="flex group">
                    <div className="text-5xl py-6 pl-2 mb-4 text-blue-600 pr-56">{box.icon1}</div>
                  </div>
                  <h2 className="text-2xl font-semibold mb-2">{box.title}</h2>
                  <p className="text-gray-500 mb-4 text-xl">{box.description}</p>
                  <a
                    href="#"
                    className="group text-custom-blue hover:underline flex flex-row items-center space-x-2"
                  >
                    <FaLongArrowAltRight className="transition-transform duration-700 group-hover:translate-x-24" />
                    <span className="transition-transform duration-700 group-hover:-translate-x-6">
                      Read More
                    </span>
                  </a>
                </Link>
              ))}
            </div>
          )}
          {!isButtonClicked && (
            <button
              onClick={loadMore}
              className="text-3xl mt-4 px-4 py-2 bg-purple-200 text-purple-600 rounded hover:bg-purple-600 hover:text-purple-200 ease-in-out transform duration-300"
            >
              <MdOutlineExpandMore />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Service;

import React from 'react';
import '../index.css';
import { FaLongArrowAltRight } from 'react-icons/fa';

function Home() {
  const rollingAnimation = {
    animation: 'rolling 40s linear infinite',
    whiteSpace: 'nowrap',
  };

  const box = [
    {
      title1: "Instant Video",
      title2: "Consultation",
      description: "Connect within 60 secs with our medical expert of Hospa General Hospital.",
      src: "https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/04/img1.png",
      color: "bg-green-300",
      hoverColor: "hover:bg-green-400",
    },
    {
      title1: "24/7",
      title2: "Medicines",
      description: "Essentials at your doorstep anytime in emergency situation.",
      src: "https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/04/img2.png",
      color: "bg-violet-400",
      hoverColor: "hover:bg-violet-500",
    },
    {
      title1: "Accurate",
      title2: "Lab Tests",
      description: "Sample pickup at your home & give 99.8% accuracy in results.",
      src: "https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/04/img3.png",
      color: "bg-red-500/50",
      hoverColor: "hover:bg-red-600/50",
    }
  ]

  return (
    <div>
      <div className="flex flex-col items-center justify-center  bg-white m-11">
        <div className="overflow-hidden whitespace-nowrap relative w-full max-h-screen font-bold">
          <div style={rollingAnimation} className="inline-block pl-full text-8xl text-gray-300 h-50 ">
            <h1>
              <span>We are Your Trusted Friend</span>
              <sup>*</sup>
              <span> We are Your Trusted Friend</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex p-7 justify-evenly space-x-1">
          {box.map((box, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 ${box.color} ${box.hoverColor} w-1/4`}
            >
              <h2 className="text-3xl font-semibold  text-white">{box.title1}</h2>
              <h2 className="text-3xl font-extrabold mb-2 text-white">{box.title2}</h2>
              <p className=" mb-4 text-white text-xl">{box.description}</p>
              <a href="#" className="group text-custom-blue hover:underline flex flex-row items-center space-x-2">
                <FaLongArrowAltRight className='transition-transform duration-700 group-hover:translate-x-24' />
                <span className='transition-transform duration-700 group-hover:-translate-x-6'>Learn More</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

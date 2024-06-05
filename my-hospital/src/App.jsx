import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import bg from './assets/bg3.jpeg';
import { FaUserDoctor } from "react-icons/fa6";
import InfoBoxes from './components/Infoboxes';
import Home from './pages/Home';

const textOptions = [
  {
    title: "Transforming Lives,",
    subtitle: "Restoring Your Health",
    description: "Embrace a world of comprehensive healthcare. Where your well-being matters."
  },
  {
    title: "Innovative Care,",
    subtitle: "Personalized Treatment",
    description: "Experience cutting-edge medical solutions tailored to your needs."
  },
  {
    title: "Committed to You,",
    subtitle: "Health and Wellness",
    description: "Our mission is to provide quality care for every stage of life."
  }
];

function App() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const { title, subtitle, description } = textOptions[currentTextIndex];

  return (
    <>
      <div className="static">
        <div className='relative' style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}></div>
        <div className="absolute backdrop-blur-lg bg-white/40 bottom-20 h-3/6 w-3/6 ml-16 rounded-3xl flex">
          <div className="h-56 w-full mt-4 ml-8">
            <h1 className="text-5xl font-semibold mt-4 ml-12 transition-opacity duration-1000 ease-in-out">{title}</h1>
            <p className="text-6xl font-bold ml-12 transition-opacity duration-1000 ease-in-out">{subtitle}</p>
            <p className="text-xl ml-12 mt-6 transition-opacity duration-1000 ease-in-out">{description}</p>
          </div>
          <button className="absolute bottom-4 left-16 bg-blue-600 rounded-full flex items-center text-white hover:bg-blue-900 hover:ease-in duration-500 p-3">
            <FaUserDoctor className="mr-2" />
            <span className="text-lg">Make an Appointment</span>
          </button>
        </div>
        <Navbar />
        <InfoBoxes />
        <Home />
      </div>
      <div className="min-h-screen"></div>
    </>
  );
}

export default App;

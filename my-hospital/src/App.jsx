import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from "./components/Navbar";
import bg from './assets/bg5.png';
import { FaUserDoctor } from "react-icons/fa6";
import InfoBoxes from './components/Infoboxes';
import Home from './pages/Home';
import Footer from './components/Footer';
import Appointment from './pages/Appointments/Appointment';
import Pharmacy from './pages/Pharmacy/Pharmacy';
import AboutUs from './pages/AboutUs';

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
    <Router>
      <div className="relative min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage title={title} subtitle={subtitle} description={description} />} />
          <Route path="/appointments" element={<Appointment />} />
          <Route path='/pharmacy' element={<Pharmacy />} />
          <Route path='/aboutus' element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function HomePage({ title, subtitle, description }) {
  const navigate = useNavigate();

  return (
    <>
      <div className='relative' style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
        <div className="absolute backdrop-blur-lg bg-white/40 bottom-20 h-3/6 w-3/6 ml-16 rounded-3xl flex z-20">
          <div className="h-56 w-full mt-4 ml-8">
            <h1 className="text-5xl font-semibold mt-4 ml-12 transition-opacity duration-1000 ease-in-out">{title}</h1>
            <p className="text-6xl font-bold ml-12 transition-opacity duration-1000 ease-in-out">{subtitle}</p>
            <p className="text-xl ml-12 mt-6 transition-opacity duration-1000 ease-in-out">{description}</p>
          </div>
          <button onClick={() => navigate('/appointments')} className="absolute bottom-4 left-16 bg-blue-600 rounded-full flex items-center text-white hover:bg-blue-900 hover:ease-in duration-500 p-3">
            <FaUserDoctor className="mr-2" />
            <span className="text-lg">Make an Appointment</span>
          </button>
        </div>
      </div>
      <InfoBoxes />
      <Home />
    </>
  );
}

export default App;

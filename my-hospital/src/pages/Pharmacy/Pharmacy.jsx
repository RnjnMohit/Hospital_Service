import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TbShoppingBag } from "react-icons/tb";
import bg from '../../assets/bg2_pharm.jpg';
import PharmacyProducts from './pharmacyProducts';

const textOptions = [
  {
    title: "Virus Protection,",
    subtitle: "Gears @15% off",
    description: "Embrace a world of comprehensive healthcare. Where your well-being matters."
  },
  {
    title: "Doctor Prescribe,",
    subtitle: "Meko Products",
    description: "Experience cutting-edge medical solutions tailored to your needs."
  },
  {
    title: "Cosmetic Body Lotion,",
    subtitle: "Health and Wellness",
    description: "Our mission is to provide quality care for every stage of life."
  }
];

function Pharmacy() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const { title, subtitle, description } = textOptions[currentTextIndex];

  
  const handleShopNowClick = () => {
    window.scrollTo({
      top: window.pageYOffset + 700,
      behavior: 'smooth'
    });
  };

  return (
    <>
    <div className="relative" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <div className="absolute inset-0 backdrop-blur-lg bg-white/40 flex flex-col justify-center items-center z-10">
        <div className="text-center">
          <h1 className="text-5xl font-semibold mb-4">{title}</h1>
          <h2 className="text-6xl font-bold mb-6">{subtitle}</h2>
          <p className="text-xl mb-8">{description}</p>
          <button onClick={handleShopNowClick} className="bg-blue-600 mx-52 text-white rounded-full px-10 py-3 hover:bg-blue-900 transition duration-300 ease-in flex items-center">
            <TbShoppingBag className="mr-2 size-6" />
            Shop Now
          </button>
        </div>
      </div>
    </div>
    {/* <h1 className='text-3xl ml-24 mt-40'>Most Popular Products</h1> */}
    <PharmacyProducts />
    </>
  );
}

export default Pharmacy;

import React from 'react';
import Home from '../pages/Home';
import Doctors from '../pages/Doctors';
import Services from '../pages/Services';
import AboutUs from '../pages/AboutUs';
import { FiSearch } from "react-icons/fi";

function Navbar() {
  return (
      <nav className='absolute top-0 right-0 left-0 flex flex-row space-x-6 justify-end mr-32 text-xl pt-16 text-white'>
        <Home />
        <Doctors />
        <Services />
        <AboutUs />
        <FiSearch />
        <button className='bg-emerald-600 rounded-full w-40 h-12 text-white hover:bg-blue-800 hover:ease-in duration-300'>Emergency</button>
      </nav>
  );
}

export default Navbar;

import React from 'react';
import { FiSearch } from "react-icons/fi";

function Navbar() {
  return (
      <nav className='absolute top-0 right-0 left-0 flex flex-row space-x-6 justify-end mr-32 text-xl pt-16 text-white'>
        <ul className='flex flex-row space-x-6  mt-4 justify-end'>
          <h2 className=''>Home</h2>
          <h2>Doctors</h2>
          <h2>Services</h2>
          <h2>About Us</h2>
          <h2><FiSearch /> </h2>
        </ul>
        <button className='bg-emerald-600 rounded-full w-40 h-12 text-white hover:bg-blue-800 hover:ease-in duration-300'>Emergency</button>
      </nav>
  );
}

export default Navbar;

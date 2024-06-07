import React from 'react';
import { FiSearch } from "react-icons/fi";

function Navbar() {
  return (
    <nav className='absolute top-0 left-0 right-0 flex justify-between items-center p-6 bg-transparent text-white z-10'>
      <div className='flex space-x-6 text-xl'>
        <h2 className='cursor-pointer'>Home</h2>
        <h2 className='cursor-pointer'>Doctors</h2>
        <h2 className='cursor-pointer'>Services</h2>
        <h2 className='cursor-pointer'>About Us</h2>
      </div>
      <div className='flex space-x-6 items-center'>
        <FiSearch className='text-2xl cursor-pointer' />
        <button className='bg-blue-500 rounded-full w-40 h-12 text-white hover:bg-blue-800 transition duration-300'>
          Emergency
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

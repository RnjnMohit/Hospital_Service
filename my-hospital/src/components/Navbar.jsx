import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from "react-icons/fi";

function Navbar() {
  return (
    <nav className='fixed top-0 left-0 right-0 flex justify-between items-center p-6 bg-transparent text-blue-950 font-bold z-10'>
      <div className='flex space-x-6 text-xl'>
        <Link to="/" className='cursor-pointer'>Home</Link>
        <Link to="/doctors" className='cursor-pointer'>Doctors</Link>
        <Link to="/appointments" className='cursor-pointer'>Appointments</Link>
        <Link to="/aboutus" className='cursor-pointer'>About Us</Link>
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

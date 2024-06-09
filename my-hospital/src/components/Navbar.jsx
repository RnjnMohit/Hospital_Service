import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineEmergency } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import SearchBar from './SearchBar';

function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchClick = () => {
    setIsSearchOpen(true);
  };

  const handleCloseSearch = () => {
    setIsSearchOpen(false);
  };

  return (
    <>
      <nav className='fixed top-0 left-0 right-0 flex justify-between items-center p-6 bg-transparent text-blue-950 font-bold z-10'>
        <div className='flex space-x-6 text-xl'>
          <Link to="/" className='cursor-pointer hover:scale-105 ease-in-out duration-300'>Home</Link>
          <Link to="/doctors" className='cursor-pointer hover:scale-105 ease-in-out duration-300'>Doctors</Link>
          <Link to="/appointments" className='cursor-pointer hover:scale-105 ease-in-out duration-300'>Appointments</Link>
          <Link to="/aboutus" className='cursor-pointer hover:scale-105 ease-in-out duration-300'>About Us</Link>
        </div>
        <div className='flex space-x-6 items-center'>
          <FiSearch className='text-3xl cursor-pointer' onClick={handleSearchClick} />
          <button className='bg-blue-500 flex items-center justify-center rounded-full w-40 h-12 text-white hover:bg-blue-800 hover:scale-105 ease-in-out transition duration-300'>
            <MdOutlineEmergency className='text-2xl' />
            Emergency
          </button>
        </div>
      </nav>
      <SearchBar isOpen={isSearchOpen} onClose={handleCloseSearch} />
    </>
  );
}

export default Navbar;

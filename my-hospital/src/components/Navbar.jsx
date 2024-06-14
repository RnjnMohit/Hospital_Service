import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineEmergency,MdOutlineLocalPharmacy } from "react-icons/md";
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
          <Link to="/service" className='cursor-pointer hover:scale-105 ease-in-out duration-300'>Services</Link>
          <Link to="/appointments" className='cursor-pointer hover:scale-105 ease-in-out duration-300'>Appointments</Link>
          <Link to="/aboutus" className='cursor-pointer hover:scale-105 ease-in-out duration-300'>About Us</Link>
        </div>
        <div className='flex space-x-6 items-center'>
          <FiSearch className='text-3xl cursor-pointer' onClick={handleSearchClick} />
          <button className='group bg-white flex items-center justify-center rounded-full border-custom-blue w-40 h-12 border-2 hover:bg-custom-blue hover:scale-105 ease-in-out transition duration-300'>
            <MdOutlineEmergency className='text-2xl text-custom-blue group-hover:text-white' />
            <span className='ml-2 text-custom-blue group-hover:text-white'>Emergency</span>
          </button>
        </div>
      </nav>
      <SearchBar isOpen={isSearchOpen} onClose={handleCloseSearch} />

      <Link to="/pharmacy" className='flex group z-50 rounded-full h-12 w-fit p-2 bg-custom-blue hover:bg-white fixed bottom-8 right-8'>
        <span className='text-xl px-2 text-white group-hover:text-custom-blue'>Shop</span>
        <MdOutlineLocalPharmacy className='justify-center size-7 text-white group-hover:text-custom-blue' />
      </Link>
    </>
  );
}

export default Navbar;

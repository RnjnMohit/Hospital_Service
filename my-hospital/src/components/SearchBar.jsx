import React, { useState } from 'react';
import { FaSearchPlus } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

function SearchBar({ isOpen, onClose }) {
  if (!isOpen) return null;
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    console.log('Search query:', query);
  }


  const handleInputChange = (e) => {
    setQuery(e.target.value);
  }

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20 space-x-4'>
      <div className='bg-custom-blue p-4 shadow-lg w-full max-w-md rounded-full flex items-center space-x-4'>
        <input
          type='text'
          value={query}
          placeholder='Search your Query...'
          onChange={handleInputChange}
          className='w-80 p-4 bg-blue-950 border-none rounded-full'
        />
        <button onClick={handleSearch} className='bg-slate-800 rounded-full text-3xl w-16 h-16 flex items-center justify-center hover:scale-105 ease-in-out duration-300'>
          <FaSearchPlus className='text-custom-blue' />
        </button>
      </div>
      <div>
        <button
          onClick={onClose}
          className='bg-custom-blue text-gray-500 hover:text-gray-700 hover:scale-110 duration-300 ease-in-out rounded-full w-20 h-20 flex items-center justify-center'
        >
          <IoMdCloseCircle className='text-6xl' />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;

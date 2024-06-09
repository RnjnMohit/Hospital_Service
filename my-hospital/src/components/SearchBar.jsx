import React from 'react';
import { FaSearchPlus } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

function SearchBar({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20 space-x-4'>
      <div className='bg-pink-950 p-4 shadow-lg w-full max-w-md rounded-full flex items-center space-x-4'>
        <input
          type='text'
          placeholder='Search...'
          className='w-80 p-4 bg-pink-950 border-none rounded-full'
        />
        <button className='bg-slate-400 rounded-full text-3xl w-16 h-16 flex items-center justify-center hover:scale-105 ease-in-out duration-300'>
          <FaSearchPlus />
        </button>
      </div>
      <div>
        <button
          onClick={onClose}
          className='bg-blue-950 text-gray-500 hover:text-gray-700 hover:scale-110 duration-300 ease-in-out rounded-full w-20 h-20 flex items-center justify-center'
        >
          <IoMdCloseCircle className='text-6xl' />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;

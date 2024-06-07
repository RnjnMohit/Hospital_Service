import React from 'react';
import thermoImage from './thermo.jpg';
import mask from '../../assets/pharmacybg_files/mask.jpg';
import ashw from  '../../assets/pharmacybg_files/ashw.jpg';
import dettol from '../../assets/pharmacybg_files/dettol.jpg';

const products = [
  {
    id: 1,
    name: 'Thermometer',
    price: '$10.00',
    image: thermoImage,
  },
  {
    id: 2,
    name: 'Mask',
    price: '$20.00',
    image: mask
  },
  { 
    id: 3,
    name: 'Ashwagandha',
    price: '$30.00',
    image: ashw,
  },
  {
    id: 4,
    name: 'Dettol',
    price: '$40.00',
    image: dettol,
  },
  {
    id: 4,
    name: 'Dettol',
    price: '$40.00',
    image: dettol,
  },
  {
    id: 4,
    name: 'Dettol',
    price: '$40.00',
    image: dettol,
  },
  {
    id: 4,
    name: 'Dettol',
    price: '$40.00',
    image: dettol,
  },
];

function PharmacyProducts() {
  return (
    <>
    <h1 className='mt-20 text-custom-blue ml-28 text-4xl'>Most Popular Products...</h1>
    <div className="flex flex-wrap justify-between p-28 space-x-4">
      {products.map((product, index) => (
        <div
          key={index}
          className="p-2 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 w-1/4"
        >
          <img className="w-full mb-4" src={product.image} alt={product.name} />
          <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
          <p className="text-gray-800 text-lg mb-4">{product.price}</p>
        </div>
      ))}
      {/* Add empty divs to ensure alignment of the last row */}
      {[...Array(4 - (products.length % 4))].map((_, index) => (
        <div key={index} className="w-1/4"></div>
      ))}
    </div>
    </>
  );
}

export default PharmacyProducts;

import React, { useEffect, useState } from 'react';
import thermoImage from './thermo.jpg';
import mask from '../../assets/pharmacybg_files/mask.jpg';
import ashw from  '../../assets/pharmacybg_files/ashw.jpg';
import dettol from '../../assets/pharmacybg_files/dettol.jpg';

const placeholderImages = {
  Thermometer: thermoImage,
  Mask: mask,
  Ashwagandha: ashw,
  Dettol: dettol,
};


function PharmacyProducts() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try{
        const response = await fetch("http://localhost:4000/getproducts");
        const data = await response.json();

        const productWithImages = data.map(product => ({
          ...product,
          image: placeholderImages[product.name] || product.image,
        }));

        setProducts(productWithImages);
        
      }catch(error){
        console.error('Error fetching Products',error);
      }
    };
    fetchProducts();
  }, []);

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

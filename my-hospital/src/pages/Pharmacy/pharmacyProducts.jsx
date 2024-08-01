import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import thermoImage from './thermo.jpg';
import mask from '../../assets/pharmacybg_files/mask.jpg';
import ashw from '../../assets/pharmacybg_files/ashw.jpg';
import dettol from '../../assets/pharmacybg_files/dettol.jpg';
import preg from '../../assets/pharmacybg_files/preg.jpg';
import sani from '../../assets/pharmacybg_files/sani.jpg';
import grip from '../../assets/pharmacybg_files/medigrip.jpg';
import steth from '../../assets/pharmacybg_files/stethoscope.jpg';
import equi from '../../assets/pharmacybg_files/equipment.jpg';
import oxi from '../../assets/pharmacybg_files/oxi.jpg';
import { FaArrowCircleRight, FaShoppingCart } from 'react-icons/fa';

const placeholderImages = {
  'Thermometer': thermoImage,
  'Mask': mask,
  'Ashwagandha': ashw,
  'Dettol': dettol,
  'Pregnancy News': preg,
  'Sanitizer': sani,
  'Stethoscope': steth,
  'Medigrip': grip,
  'Equipment': equi,
  'Oximeter': oxi,
};

function PharmacyProducts() {
  const [products, setProducts] = useState([
    {id:'1', name: 'Thermometer', price: '10', image: placeholderImages['Thermometer'] },
    {id:'2', name: 'Mask', price: '5', image: placeholderImages['Mask'] },
    {id:'3', name: 'Ashwagandha', price: '15', image: placeholderImages['Ashwagandha'] },
    {id:'4', name: 'Dettol', price: '8', image: placeholderImages['Dettol'] },
    {id:'5', name: 'Pregnancy News', price: '20', image: placeholderImages['Pregnancy News'] },
    {id:'6', name: 'Sanitizer', price: '3', image: placeholderImages['Sanitizer'] },
    {id:'7', name: 'Stethoscope', price: '30', image: placeholderImages['Stethoscope'] },
    {id:'8', name: 'Medigrip', price: '2', image: placeholderImages['Medigrip'] },
    {id:'9', name: 'Equipment', price: '50', image: placeholderImages['Equipment'] },
    {id:'10', name: 'Oximeter', price: '25', image: placeholderImages['Oximeter'] },
  ]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:4000/getproducts");
        const data = await response.json();
        console.log(data);

        const productWithImages = data.map(product => ({
          ...product,
          image: placeholderImages[product.name] || product.image,
        }));

        setProducts(productWithImages);

      } catch (error) {
        console.error('Error fetching Products', error);
      }
    };
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} has been added to your cart`);
    console.log(cart);
  };

  const navigate = useNavigate();

  const handleAddToCartClick = () => {
    navigate('/cart');
  };

  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.style.transition = 'transform 0.5s ease';
        carouselRef.current.style.transform = 'translateX(-20%)';

        setTimeout(() => {
          const firstChild = carouselRef.current.children[0];
          carouselRef.current.appendChild(firstChild);
          carouselRef.current.style.transition = 'none';
          carouselRef.current.style.transform = 'translateX(0)';
        }, 2000);
      }
    }, 3100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1 className='mt-20 text-custom-blue ml-28 text-5xl font-extrabold'>Most Popular Products...</h1>
      <div className='overflow-hidden w-full mb-7'>
        <div
          ref={carouselRef}
          className="flex"
          style={{ width: '100%' }}
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="group w-1/5 flex-shrink-0 rounded-3xl border-x border-gray-100 px-4 mt-7"
            >
              <img className="w-full h-96 object-cover rounded-t-3xl" src={product.image} alt={product.name} />
              <div
                className='mb-10 -mt-24 group-hover:h-44 bg-slate-100 rounded-b-3xl group-hover:-translate-y-2 transition-all transform ease-in-out duration-500'
              >
                <h2 className="text-3xl font-semibold text-center py-2">{product.name}</h2>
                <p className="text-3xl font-semibold text-center py-2 text-violet-900">₹{product.price}</p>
                <button
                  onClick={() => addToCart(product)}
                  className='hidden group-hover:flex  m-auto mt-5 h-1/4 text-2xl bg-violet-200 w-5/6 rounded-2xl hover:bg-violet-400 transform duration-500  items-center justify-center'
                >
                  <FaArrowCircleRight className='mr-2 text-3xl items-center' /> Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handleAddToCartClick}
        className="m-auto bg-green-600 text-white rounded-full px-8 py-4 hover:bg-green-900 transition duration-300 ease-in flex items-center"
      >
        <FaShoppingCart className="mr-2 text-2xl" /> Go to Cart
      </button>
    </>
  );
}

export default PharmacyProducts;

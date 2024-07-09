
import React, { useState, useRef, useEffect } from 'react';
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
import { FaArrowCircleRight } from 'react-icons/fa';


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
}

function PharmacyProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try{
        const response = await fetch("http://localhost:4000/getproducts");
        const data = await response.json();
        console.log(data);

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

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} has been added to your cartt`);
    console.log(cart);
  }


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
      <div className='overflow-hidden w-full mb-7' >

        <div
          ref={carouselRef}
          className="flex "
          style={{ width: '100%' }}
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="group w-1/5 flex-shrink-0 rounded-3xl border-x border-gray-100 px-4 mt-7"
            >
              <img className="w-full h-96 " src={product.image} alt={product.name} />
              <div
                className=' mb-10  -mt-24 group-hover:h-44 bg-slate-100 rounded-3xl group-hover:-translate-y-2 transition-all transform ease-in-out duration-500'
              >
                <h2 className="text-3xl font-semibold text-center py-2">{product.name}</h2>
                <p className="text-3xl font-semibold text-center py-2 text-violet-900">{product.price}</p>
                <button onClick={() => addToCart(product)} className='hidden group-hover:block   mx-6 mb-2 mt-3 py-3 text-2xl bg-violet-200 w-5/6 rounded-2xl hover:bg-violet-400 transform duration-500'>
                  <div className='flex justify-center'>
                    <FaArrowCircleRight className='py-2 pr-2 text-4xl'></FaArrowCircleRight> <span className='text-center '>Add to cart</span>
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

    </>
  );
}

export default PharmacyProducts;

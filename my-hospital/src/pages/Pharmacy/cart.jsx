import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaPrint, FaPhoneAlt, FaEnvelope, FaShareAlt, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Cart() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(savedCart);
    }, []);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleQuantityChange = (id, delta) => {
        const updatedCart = cart.map(item =>
            item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
        );
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const handleRemove = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <>
            <div className="pb-4 pt-1 bg-gradient-to-b from-gray-300 to-white">
                <div className="mt-32 rounded-2xl h-60 ml-5 mr-5" style={{ backgroundImage: `url('https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/04/bg23.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div className="bg-gray-100 rounded-2xl shadow-lg px-6 pb-6 flex relative ml-10 mr-10 pt-16 -mt-20 text-xl">
                    <div className="flex w-2/3">
                        <h1 className="text-5xl font-bold text-gray-900 pt-5 pl-5 h-fit">Cart <span className="font-normal"></span></h1>
                    </div>
                    <div className="flex flex-col space-x-4 w-1/3 items-end">
                        <div className="group flex space-x-4 items-center p-2 rounded-full bg-white w-fit hover:bg-green-500 hover:scale-105 ease-in-out transition duration-300">
                            <FaPhoneAlt className="ml-3 text-green-500 group-hover:text-white" />
                            <span className="text-green-700 group-hover:text-white font-semibold px-2 py-2">CALL: +91 99876 54321</span>
                        </div>
                        <div className="flex justify-end p-2 relative">
                            <button className="bg-purple-200 p-3 m-2 rounded-full text-purple-600 hover:bg-purple-600 hover:text-purple-200 ease-linear transition-all">
                                <FaPrint className="text-xl" />
                            </button>
                            <button className="bg-purple-200 p-3 m-2 rounded-full text-purple-600 hover:bg-purple-600 hover:text-purple-200 ease-linear transition-all">
                                <FaEnvelope className="text-xl" />
                            </button>
                            <button className="bg-purple-200 p-3 m-2 rounded-full text-purple-600 hover:bg-purple-600 hover:text-purple-200 ease-linear transition-all" onClick={toggleDropdown}>
                                <FaShareAlt className="text-xl" />
                            </button>
                            {dropdownOpen && (
                                <div className="absolute top-16 right-0 bg-white shadow-lg rounded-lg p-2 flex flex-col space-y-2 transition-all duration-300 ease-in-out">
                                    <a href="https://www.facebook.com/" className="flex items-center justify-center p-2 rounded-full hover:bg-gray-200">
                                        <FaFacebook className="text-blue-600 text-xl" />
                                    </a>
                                    <a href="https://www.linkedin.com/" className="flex items-center justify-center p-2 rounded-full hover:bg-gray-200">
                                        <FaLinkedin className="text-blue-700 text-xl" />
                                    </a>
                                    <a href="https://www.twitter.com/" className="flex items-center justify-center p-2 rounded-full hover:bg-gray-200">
                                        <FaTwitter className="text-blue-400 text-xl" />
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto p-4">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="text-start">Product</th>
                            <th className="text-start">Name</th>
                            <th className="text-start">Unit Price</th>
                            <th className="text-start">Quantity</th>
                            <th className="text-start">Subtotal</th>
                            <th className="text-start">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(item => (
                            <tr key={item.id} className="border-t">
                                <td className="py-2"><img src={item.image} alt={item.name} className="h-16 w-16 object-cover" /></td>
                                <td className="py-2">{item.name}</td>
                                <td className="py-2">Rs. {item.price}</td>
                                <td className="py-2 flex items-center">
                                    <button className="px-2 py-1" onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                                    <span className="mx-2">{item.quantity}</span>
                                    <button className="px-2 py-1" onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                                </td>
                                <td className="py-2">Rs. {(item.price * item.quantity).toFixed(2)}</td>
                                <td className="py-2">
                                    <button className="text-red-600" onClick={() => handleRemove(item.id)}>Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="mt-4">
                    <span className="font-bold text-2xl">Total: Rs. {totalPrice.toFixed(2)}</span>
                </div>
                <button
                    onClick={() => navigate('/checkout')}
                    className="w-full mt-6"
                >
                    <span className="px-4 py-2 font-bold text-2xl bg-blue-500 text-white transform duration-500 rounded-3xl hover:bg-blue-700">Proceed to Checkout</span>
                </button>
            </div>
        </>
    );
}

export default Cart;

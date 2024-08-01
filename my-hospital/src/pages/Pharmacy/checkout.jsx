import React, { useEffect, useState } from "react";
import { FaPrint, FaPhoneAlt, FaEnvelope, FaShareAlt, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Checkout() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(storedItems);
    }, []);

    const calculateSubtotal = (item) => {
        return (parseFloat(item.price) * (item.quantity || 1)).toFixed(2);
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + parseFloat(calculateSubtotal(item)), 0).toFixed(2);
    };

    return (
        <>
            <div className="pb-4 pt-1 bg-gradient-to-b from-gray-300 to-white">
                <div className="mt-32 rounded-2xl h-60 ml-5 mr-5" style={{ backgroundImage: `url('https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/04/bg20.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div className="bg-gray-100 rounded-2xl shadow-lg px-6 pb-6 flex relative ml-10 mr-10 pt-16 -mt-20 text-xl">
                    <div className="flex w-2/3">
                        <h1 className="text-5xl font-bold text-gray-900 pt-5 pl-5 h-fit">Checkout</h1>
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
            <div className="flex mx-28 my-5">
                <div className="p-6 bg-white rounded-md shadow-md w-2/3">
                    <h2 className="text-2xl font-bold mb-4">Billing Details</h2>
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">First name</label>
                                <input type="text" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Last name</label>
                                <input type="text" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Company name (optional)</label>
                            <input type="text" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Country / Region</label>
                            <select className="mt-1 p-2 block w-full border border-gray-300 rounded-md">
                                <option>India </option>
                                <option>Pakistan </option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Street address</label>
                            <input type="text" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" placeholder="House number and street name" />
                            <input type="text" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" placeholder="Apartment, suite, unit, etc. (optional)" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Town / City</label>
                            <input type="text" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">State</label>
                                <select className="mt-1 p-2 block w-full border border-gray-300 rounded-md">
                                    <option>Gujarat</option>
                                    <option>Bihar</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">ZIP Code</label>
                                <input type="text" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Phone</label>
                            <input type="text" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email address</label>
                            <input type="email" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Order notes (optional)</label>
                            <textarea className="mt-1 p-2 block w-full border border-gray-300 rounded-md" rows="3"></textarea>
                        </div>
                    </form>
                </div>
                <div className="p-6 bg-white rounded-md shadow-md w-1/3">
                    <h2 className="text-2xl font-bold mb-4">Your order</h2>
                    <table className="w-full text-left">
                        <thead>
                            <tr>
                                <th className="py-2">Product</th>
                                <th className="py-2">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr key={item.id}>
                                    <td className="py-2">{item.name} x {item.quantity || 1}</td>
                                    <td className="py-2">₹{calculateSubtotal(item)}</td>
                                </tr>
                            ))}
                            <tr className="font-bold">
                                <td className="py-2">Total</td>
                                <td className="py-2">₹{calculateTotal()}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="w-full mt-6 px-4 py-2 font-bold text-2xl bg-emerald-500 text-white transform duration-300 rounded-3xl hover:bg-emerald-700">
                        Place Order
                    </button>
                </div>
            </div>
        </>
    );
}

export default Checkout;

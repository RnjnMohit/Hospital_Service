import React, { useState, useEffect, useRef } from 'react';
import { FaPhoneAlt, FaPrint, FaEnvelope, FaShareAlt, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import img from '../../assets/bg_s.jpg';

function Andrologists() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [doctors, setDoctors] = useState([]);
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const carouselRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (carouselRef.current) {
                carouselRef.current.style.transition = 'transform 0.5s ease';
                carouselRef.current.style.transform = 'translateX(-25%)';

                setTimeout(() => {
                    const firstChild = carouselRef.current.children[0];
                    carouselRef.current.appendChild(firstChild);
                    carouselRef.current.style.transition = 'none';
                    carouselRef.current.style.transform = 'translateX(0)';
                }, 2000);
            }
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await fetch("http://localhost:4000/getdoctors");
                const data = await response.json();
                const andrologists = data.filter(doctor => doctor.department === "Andrologist");
                setDoctors(andrologists);
                console.log(andrologists);
            } catch (error) {
                console.error("Error fetching data of Andrologists", error);
            }
        };
        fetchDoctors();
    }, []);

    return (
        <div className='min-h-screen'>
            <div className="pb-4 pt-1 bg-gradient-to-b from-gray-300 to-white">
                <div className="mt-32 rounded-2xl h-60 ml-5 mr-5" style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }}></div>
                <div className="bg-gray-100 rounded-2xl shadow-lg px-6 pb-6 flex relative ml-10 mr-10 pt-16 -mt-20 text-xl">
                    <div className="flex w-2/3">
                        <h1 className="text-5xl font-bold text-gray-900 pt-5 pl-5 h-fit">Andrologists</h1>
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

            <div className='relative flex p-6 mx-12'>
                <div className='w-4/12 h-full bg-emerald-100 my-2 mx-6 rounded-2xl'>
                    <table className='flex flex-col my-7 font-semibold'>
                        <a className='p-2 pl-6 m-2 text-xl border-2 border-white hover:bg-white mx-10 rounded-full transform duration-500' href='/service/nephrology'>Nephrology</a>
                        <a className='p-2 pl-6 m-2 text-xl border-2 border-white hover:bg-white mx-10 rounded-full transform duration-500' href='/service/cardiology'>Cardiology</a>
                        <a className='p-2 m-2 pl-6 text-xl border-2 border-white hover:bg-white mx-10 rounded-full transform duration-500' href='/service/neurology'>Neurology</a>
                        <a className='p-2 m-2 pl-6 text-xl border-2 border-white hover:bg-white mx-10 rounded-full transform duration-500' href='/service/orthopedic'>Orthopedic</a>
                        <a className='p-2 pl-6 m-2 text-xl border-2 border-white hover:bg-white mx-10 rounded-full transform duration-500' href='/service/psychiatrist'>Psychiatrist</a>
                        <a className='p-2 m-2 pl-6 text-xl border-2 border-white hover:bg-white mx-10 rounded-full transform duration-500' href='/service/dentist'>Dentist</a>
                        <a className='p-2 m-2 pl-6 text-xl border-2 border-white hover:bg-white mx-10 rounded-full transform duration-500' href='/service/andrologists'>Andrologists</a>
                        <a className='p-2 m-2 pl-6 text-xl border-2 border-white hover:bg-white mx-10 rounded-full transform duration-500' href='/service/gynecologist'>Gynecologist</a>
                    </table>
                </div>
                <div className='relative w-8/12 flex flex-col my-2 mx-6'>
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-full">
                            <img src={'https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/03/services-details.jpg'} alt="Description of the image" className="w-full h-auto object-cover rounded-3xl" />
                        </div>
                    </div>
                    <h1 className="text-5xl font-semibold text-gray-800 pt-10 pb-4 mb-3 pl-3">Andrologists</h1>
                    <div className='text-lg h-auto text-gray-500 mb-4'>
                        Andrology is a medical specialty focusing on male health, particularly related to the male reproductive system and urological issues. Andrologists diagnose, treat, and manage conditions affecting male fertility, sexual health, and hormone levels, playing a crucial role in men's overall well-being.
                    </div>
                    <div className='text-lg h-auto text-gray-500 my-4'>
                        Andrologists investigate causes of infertility such as low sperm count, poor sperm motility, and abnormal sperm morphology. They conduct various tests, including semen analysis and hormonal evaluations, to identify underlying issues. Treatments for male infertility may involve lifestyle modifications, medications, hormone therapy, or assisted reproductive techniques like in vitro fertilization (IVF) and intracytoplasmic sperm injection (ICSI).
                    </div>
                    <div className='text-lg h-auto text-gray-500 mt-4'>
                        Andrologists also manage hormonal disorders, particularly low testosterone levels, which can affect libido, energy levels, and overall health. Hormone replacement therapy (HRT) may be prescribed to restore hormone balance and alleviate symptoms associated with low testosterone.
                    </div>

                    <h1 className="text-5xl font-semibold text-gray-800 pt-10 pb-4 mb-3 pl-3">Doctors Under Andrologists</h1>
                    <div className="overflow-hidden w-full max-w-5xl mx-auto">
                        <div
                            ref={carouselRef}
                            className="flex transition-transform duration-500"
                            style={{ width: '100%' }}
                        >
                            {doctors.length > 0 ? (
                                doctors.map((doctor, index) => (
                                    <div key={index} className="w-1/4 flex-shrink-0 p-4">
                                        <img src={doctor.imageUrl || 'https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/04/doctor8.jpg'} alt={doctor.name} className='w-full h-auto object-cover rounded-xl' />
                                        <div className='text-3xl font-semibold text-center mt-6'>Dr. {doctor.firstName} {doctor.lastName}</div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center w-full text-lg text-gray-500">No doctors available</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Andrologists;

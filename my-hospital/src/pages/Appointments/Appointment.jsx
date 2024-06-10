import React, { useState } from 'react';
import Services from './Services';
import BasicDetails from './BasicDetails';
import Summary from './Summary';
import { FaPhoneAlt, FaPrint, FaEnvelope, FaShareAlt, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import bg from '../../assets/bg5.png';

function Appointment() {
  const [currentStep, setCurrentStep] = useState('services');
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    timeSlot: '',
  });
  const [selectedService, setSelectedService] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDetailsChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setCurrentStep('basic-details');
  };

  const handleSubmitDetails = (e) => {
    e.preventDefault();
    console.log(userDetails);
    setCurrentStep('summary');
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 'services':
        return <Services onSelectService={handleServiceSelect} />;
      case 'basic-details':
        return (
          <BasicDetails
            userDetails={userDetails}
            handleDetailsChange={handleDetailsChange}
            handleSubmit={handleSubmitDetails}
          />
        );
      case 'summary':
        return <Summary userDetails={userDetails} selectedService={selectedService} />;
      default:
        return <Services onSelectService={handleServiceSelect} />;
    }
  };

  return (
    <div className="min-h-screen">
      <div className="pb-4 pt-1 bg-gradient-to-b from-gray-300 to-white">
        <div className=" mt-28 rounded-2xl h-60 ml-5 mr-5" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="bg-gray-100 rounded-2xl shadow-lg px-6 pb-6 flex relative ml-10 mr-10 pt-16 -mt-28 text-xl">
          <div className="flex w-2/3">
            <h1 className="text-5xl font-bold text-gray-900 pt-5 pl-5 h-fit">Book An <span className="font-normal">Appointment</span></h1>
          </div>
          <div className="flex flex-col space-x-4 w-1/3 items-end">
            <div className="group flex space-x-4 items-center p-2 rounded-full bg-white w-fit hover:bg-green-500 hover:scale-105 ease-in-out transition duration-300">
              <FaPhoneAlt className="ml-3  text-green-500 group-hover:text-white" />
              <span className="text-green-700 group-hover:text-white font-semibold px-2 py-2">CALL: +91 99876 54321</span>
            </div>
            <div className="flex justify-end p-2 relative">
              <button className="bg-purple-200 p-3 m-2 rounded-full text-purple-600 hover:bg-purple-600 hover:text-purple-200 ease-linear transition-all">
                <FaPrint className="text-xl " />
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
                  <a href="https://www.linkdin.com/" className="flex items-center justify-center p-2 rounded-full hover:bg-gray-200">
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
      <div className="text-center">
        <p className="text-sky-600 font-semibold mt-12">APPOINTMENT BOOKING</p>
        <h1 className="text-black font-semibold text-5xl">
          Please <span className="font-bold">Fill In</span> The Form
        </h1>
      </div>
      <div className="border-2 rounded-2xl border-black p-2 w-fit m-auto mt-10 flex justify-evenly">
        <button
          onClick={() => setCurrentStep('services')}
          className="text-white bg-blue-500 w-20 rounded-lg h-12 mr-2 hover:bg-blue-700 "
        >
          Services
        </button>
        <button
          onClick={() => selectedService && setCurrentStep('basic-details')}
          className={`text-white bg-blue-500 rounded-lg h-12 mr-2 hover:bg-blue-700 p-2  ${!selectedService ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={!selectedService}
        >
          Basic Details
        </button>
        <button
          onClick={() => userDetails.name && userDetails.email && userDetails.phone && userDetails.date && userDetails.timeSlot && setCurrentStep('summary')}
          className={`text-white bg-blue-500 w-20 rounded-lg h-12 hover:bg-blue-700  ${!(userDetails.name && userDetails.email && userDetails.phone && userDetails.date && userDetails.timeSlot) ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={!(userDetails.name && userDetails.email && userDetails.phone && userDetails.date && userDetails.timeSlot)}
        >
          Summary
        </button>
      </div>
      <div className="mt-8">
        {renderStep()}
      </div>
    </div>
  );
}

export default Appointment;

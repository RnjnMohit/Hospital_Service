import React, { useState } from 'react';
import Services from './Services';
import BasicDetails from './BasicDetails';
import Summary from './Summary';

function Appointment() {
  const [currentStep, setCurrentStep] = useState('services'); // Default to 'services'
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    timeSlot: '',
  });
  const [selectedService, setSelectedService] = useState(null);

  const handleDetailsChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setCurrentStep('basic-details'); // Move to next step after selecting a service
  };

  const handleSubmitDetails = (e) => {
    e.preventDefault();
    // Process the form data
    console.log(userDetails);
    // Navigate to the summary step after submitting details
    setCurrentStep('summary');
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
    <div className='min-h-screen'>
      <div>
        <h1>All the headers to be passed By apurv..</h1>
      </div>
      <div className='text-center'>
        <p className='text-sky-600 font-semibold mt-12'>APPOINTMENT BOOKING</p>
        <h1 className='text-black font-semibold text-5xl'>
          Please <span className='font-bold'>Fill In</span> The Form
        </h1>
      </div>
      <div className='border-2 rounded-2xl border-black p-2 w-fit m-auto mt-10 flex justify-evenly'>
        <button
          onClick={() => setCurrentStep('services')}
          className='text-white bg-blue-500 w-20 rounded-lg h-12 mr-2 hover:bg-blue-700 focus:bg-blue-900'
        >
          Services
        </button>
        <button
          onClick={() => selectedService && setCurrentStep('basic-details')}
          className={`text-white bg-blue-500 rounded-lg h-12 mr-2 hover:bg-blue-700 p-2 focus:bg-blue-900 ${!selectedService ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={!selectedService}
        >
          Basic Details
        </button>
        <button
          onClick={() => userDetails.name && userDetails.email && userDetails.phone && userDetails.date && userDetails.timeSlot && setCurrentStep('summary')}
          className={`text-white bg-blue-500 w-20 rounded-lg h-12 hover:bg-blue-700 focus:bg-blue-900 ${!(userDetails.name && userDetails.email && userDetails.phone && userDetails.date && userDetails.timeSlot) ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={!(userDetails.name && userDetails.email && userDetails.phone && userDetails.date && userDetails.timeSlot)}
        >
          Summary
        </button>
      </div>
      <div className='mt-8'>
        {renderStep()}
      </div>
    </div>
  );
}

export default Appointment;

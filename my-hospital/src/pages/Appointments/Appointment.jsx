import React, { useState } from 'react';
import Services from './Services';
import BasicDetails from './BasicDetails';
import Summary from './Summary';

function Appointment() {
  const [currentStep, setCurrentStep] = useState('');

  const renderStep = () => {
    switch (currentStep) {
      case 'services':
        return <Services />;
      case 'basic-details':
        return <BasicDetails />;
      case 'summary':
        return <Summary />;
      default:
        return <Services />;
    }
  };

  return (
    <div className='min-h-screen'>
      <div>
        <h1>All the headers to be passed By apurv..</h1>
      </div>
      <div className='text-center'>
        <p className='text-blue-500 font-semibold'>APPOINTMENT BOOKING</p>
        <h1 className='text-blue-900 font-semibold text-5xl'>
          Please <span className='text-6xl font-bold'>Fill In</span> The Form
        </h1>
      </div>
      <div className='bg-gray-800 h-14 mt-8 w-1/4 place-content-center m-auto rounded-lg flex space-x-8 border-none'>
        <button
          onClick={() => setCurrentStep('services')}
          className='text-white bg-custom-rally-green w-20 rounded-lg h-12 mt-1 hover:w-full hover:bg-blue-700'>
          Services
        </button>
        <button
          onClick={() => setCurrentStep('basic-details')}
          className='text-white bg-custom-rally-green rounded-lg h-12 mt-1 hover:w-full hover:bg-blue-700'>
          Basic Details
        </button>
        <button
          onClick={() => setCurrentStep('summary')}
          className='text-white bg-custom-rally-green w-20 rounded-lg h-12 mt-1 hover:w-full hover:bg-blue-700'>
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

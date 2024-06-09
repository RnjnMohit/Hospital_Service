import React from 'react';

const Summary = ({ userDetails, selectedService }) => (
  <div className='w-10/12 ml-32 p-5 rounded-2xl border-black border-x-2 border-y-2 '>
    <h2 className="text-2xl font-bold mb-4">Appointment Summary</h2>
    <p className="mb-4">Please review your appointment details.</p>
    <div className="space-y-4">
      <div>
        <h3 className="text-xl font-semibold">Personal Details</h3>
        <p>Name: {userDetails.name}</p>
        <p>Email: {userDetails.email}</p>
        <p>Phone: {userDetails.phone}</p>
        <p>Date: {userDetails.date}</p>
        <p>Time Slot: {userDetails.timeSlot}</p>
      </div>
      {selectedService && (
        <div>
          <h3 className="text-xl font-semibold">Service Details</h3>
          <p>Category: {selectedService.category}</p>
          <p>Doctor: {selectedService.doctor}</p>
          <p>Duration: {selectedService.duration}</p>
          <p>Price: {selectedService.price}</p>
        </div>
      )}
    </div>
  </div>
);

export default Summary;

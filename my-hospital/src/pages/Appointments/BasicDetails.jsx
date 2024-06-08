import React from 'react';

const BasicDetails = ({ userDetails, handleDetailsChange }) => {
  const today = new Date().toISOString().split('T')[0];
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 3);
  const formattedMaxDate = maxDate.toISOString().split('T')[0];

  return (
    <div className="w-10/12 ml-32 p-5 rounded-2xl border-black border-x-2 border-y-2">
      <h2 className="text-2xl font-bold mb-4">Enter Basic Details</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={userDetails.name}
            onChange={handleDetailsChange}
            className="w-full p-2 border border-gray-300 rounded focus:border-blue-900 focus:ring focus:ring-blue-200"
          />
        </div>
        <div>
          <label className="block mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={userDetails.email}
            onChange={handleDetailsChange}
            className="w-full p-2 border border-gray-300 rounded focus:border-blue-900 focus:ring focus:ring-blue-200"
          />
        </div>
        <div>
          <label className="block mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            value={userDetails.phone}
            onChange={handleDetailsChange}
            className="w-full p-2 border border-gray-300 rounded focus:border-blue-900 focus:ring focus:ring-blue-200"
          />
        </div>
        <div>
          <label className="block mb-2">Date</label>
          <input
            type="date"
            name="date"
            value={userDetails.date}
            onChange={handleDetailsChange}
            min={today}
            max={formattedMaxDate}
            className="w-full p-2 border border-gray-300 rounded focus:border-blue-900 focus:ring focus:ring-blue-200"
          />
        </div>
        <div>
          <label className="block mb-2">Time Slot</label>
          <select
            name="timeSlot"
            value={userDetails.timeSlot}
            onChange={handleDetailsChange}
            className="w-full p-2 border border-gray-300 rounded focus:border-blue-900 focus:ring focus:ring-blue-200"
          >
            <option disabled value="">
              Select your slot
            </option>
            <option disabled>10:00 AM - 11:00 AM</option>
            <option>11:00 AM - 12:00 PM</option>
            <option>12:00 PM - 01:00 PM</option>
            <option>02:00 PM - 03:00 PM</option>
            <option>03:00 PM - 04:00 PM</option>
          </select>
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BasicDetails;

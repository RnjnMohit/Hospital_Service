import React, { useState } from 'react';

const services = [
  { id: 1, category: 'Cardiology', name: 'Cardiologists', duration: '30 m', price: 'Rs 500.00' },
  { id: 2, category: 'Psychiatry', name: 'Psychiatrists', duration: '45 m', price: 'Rs 1000.00' },
  { id: 3, category: 'Gynecology', name: 'Gynecologists', duration: '60 m', price: 'Rs 1500.00' },
];

const Services = ({ onSelectService }) => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const filteredServices = selectedCategory === 'ALL'
    ? services
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="w-10/12 ml-32 p-5 rounded-2xl border-black border-x-2 border-y-2">
      <div className="h-full">
        <h2 className="text-2xl font-bold mb-4">Select Category</h2>
        <div className="flex space-x-4 mb-4">
          {['ALL', 'Cardiology', 'Psychiatry', 'Gynecology'].map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-white text-black'
                } hover:bg-blue-700 hover:ease-in-out transition duration-300 hover:text-white`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <h3 className="text-xl font-semibold mb-4">Select Service</h3>
        <div className="space-y-4">
          {filteredServices.map(service => (
            <div
              key={service.id}
              className="p-4 bg-white rounded shadow border border-gray-200 cursor-pointer hover:bg-gray-100"
              onClick={() => onSelectService(service)}
            >
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold">{service.name}</h4>
                  <p>
                    Duration: {service.duration} &nbsp;
                    Price: <span className="text-black">{service.price}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

import React from 'react';
import { FaInfoCircle, FaStethoscope, FaAmbulance, FaPhone, FaLongArrowAltRight } from 'react-icons/fa';

const InfoBoxes = () => {
  const boxes = [
    {
      title: "VISITOR INFORMATION",
      description: "View all information of the visitors and follow all terms & conditions.",
      icon: <FaInfoCircle />,
      color: "bg-blue-100",
      hoverColor: "hover:bg-blue-200",
    },
    {
      title: "FIND A DOCTOR",
      description: "View all information of the visitors and follow all terms & conditions.",
      icon: <FaStethoscope />,
      color: "bg-green-100",
      hoverColor: "hover:bg-green-200",
    },
    {
      title: "OUR LOCATIONS",
      description: "View all information of the visitors and follow all terms & conditions.",
      icon: <FaAmbulance />,
      color: "bg-purple-100",
      hoverColor: "hover:bg-purple-200",
    },
    {
      title: "CONNECT WITH US",
      description: "View all information of the visitors and follow all terms & conditions.",
      icon: <FaPhone />,
      color: "bg-pink-100",
      hoverColor: "hover:bg-pink-200",
    },
  ];

  return (

    // <div className="flex justify-between p-4 space-x-4 ">
    //   {boxes.map((box, index) => (
    //     <div
    //       key={index}
    //       className={`p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 ${box.color} ${box.hoverColor} w-1/4 `}
    //     >
    //       <div className="text-3xl mb-4">{box.icon}</div>
    //       <h2 className="text-xl font-semibold mb-2">{box.title}</h2>
    //       <p className="text-gray-700 mb-4">{box.description}</p>
    //       <a href="#" className="group text-custom-blue hover:underline flex flex-row items-center space-x-2">
    //         <FaLongArrowAltRight className='transition-transform duration-700 group-hover:translate-x-24' />
    //         <span className='transition-transform duration-700 group-hover:-translate-x-6'>Learn More</span>
    //       </a>
    //     </div>
    //   ))}
    // </div>

<div className="flex flex-wrap justify-between p-4">
{boxes.map((box, index) => (
  <div
    key={index}
    className={`p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 ${box.color} ${box.hoverColor} w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1rem)] mb-4`}
  >
    <div className="text-3xl mb-4">{box.icon}</div>
    <h2 className="text-xl font-semibold mb-2">{box.title}</h2>
    <p className="text-gray-700 mb-4">{box.description}</p>
    <a href="#" className="group text-custom-blue hover:underline flex flex-row items-center space-x-2">
      <FaLongArrowAltRight className='transition-transform duration-700 group-hover:translate-x-24' />
      <span className='transition-transform duration-700 group-hover:-translate-x-6'>Learn More</span>
    </a>
  </div>
))}
</div>



  );
};

export default InfoBoxes;

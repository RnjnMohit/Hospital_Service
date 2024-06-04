import React from 'react';

const InfoBoxes = () => {
  const boxes = [
    {
      title: "VISITOR INFORMATION",
      description: "View all information of the visitors and follow all terms & conditions.",
      icon: "❗",
      color: "bg-blue-100",
    },
    {
      title: "FIND A DOCTOR",
      description: "View all information of the visitors and follow all terms & conditions.",
      icon: "🩺",
      color: "bg-green-100",
    },
    {
      title: "OUR LOCATIONS",
      description: "View all information of the visitors and follow all terms & conditions.",
      icon: "🚑",
      color: "bg-purple-100",
    },
    {
      title: "CONNECT WITH US",
      description: "View all information of the visitors and follow all terms & conditions.",
      icon: "📞",
      color: "bg-pink-100",
    },
  ];

  return (
    <div className="flex justify-between space-x-4 p-4">
      {boxes.map((box, index) => (
        <div key={index} className={`p-6 rounded-lg ${box.color}`}>
          <div className="text-3xl mb-4">{box.icon}</div>
          <h2 className="text-xl font-semibold mb-2">{box.title}</h2>
          <p className="text-gray-700 mb-4">{box.description}</p>
          <a href="#" className="text-blue-500 hover:underline">
            Learn More
          </a>
        </div>
      ))}
    </div>
  );
};

export default InfoBoxes;

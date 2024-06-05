import React from 'react';
import '../index.css';

function Home() {
  const rollingAnimation = {
    animation: 'rolling 40s linear infinite',
    whiteSpace: 'nowrap',
  };

  return (
    <div className="flex flex-col items-center justify-center  bg-white">
      <div className="overflow-hidden whitespace-nowrap relative w-full max-h-screen font-bold">
        <div style={rollingAnimation} className="inline-block pl-full text-8xl text-gray-300 h-50 ">
          <h1>
			<span>We are Your Trusted Friend</span>
			<sup>   *   </sup>
			<span> We are Your Trusted Friend</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Home;

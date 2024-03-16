import React from 'react';
import Navbar from '../Navbar/Navbar';

const Hero = () => {
  return (
    <div className="relative h-screen bg-green-500">
      <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url('https://st2.depositphotos.com/3489481/12351/i/450/depositphotos_123515046-stock-photo-collage-group-of-sad-depressed.jpg')`}}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">Discover a Path to</h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">Mental Wellness</h1>
        </div>
        <div className="relative">
        <Navbar/>   
        </div>
      </div>
    </div>
  );
};

export default Hero;

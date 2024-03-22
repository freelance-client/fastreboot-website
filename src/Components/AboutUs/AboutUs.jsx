import React from 'react';
import Navbar from '../Navbar/Navbar';

const AboutUs = () => {
  return (
    
    <div className='container mx-auto max-w-full h-screen  relative'>
      <div className="relative">
        <Navbar/>
      </div>
      <div className='flex items-center'>
      {/* background image */}
      {/* <div className='absolute inset-0 w-full h-full bg-center bg-cover md:hidden' style={{ backgroundImage: `url('/src/assets/Img/mh-hero.jpg')`, }}></div> */}
      {/* text */}
      <div className='w-full md:w-1/2 p-4 md:relative text-white md:text-black '>
        <h2 className='font-bold  text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-3 text-left md:text-center'>Welcome to Fastreboot</h2>
        <p className='font-normal text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl mb-3 text-left md:text-center'>We're here to support your mental well-being</p>
      </div>
      {/*right side image */}
      <div className='hidden md:block md:w-1/2'>
        <img src="/src/assets/Img/mh-hero.jpg" alt="" className='h-auto w-full object-cover' />
      </div>
      </div>
    </div>
      
  );
};

export default AboutUs;

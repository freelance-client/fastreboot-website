import React, { lazy } from 'react'
import Gallery from '../../Components/Gallery/Gallery';

// importing components

const Hero = lazy(()=>import('../../Components/Hero/Hero'));
const Impact = lazy(()=>import('../../Components/Impactt/impact'));
const Banner = lazy(()=>import('../../Components/banner/Banner'));
const Assessment = lazy(()=>import('../../Components/Assessment/Assessment'));
const Testimonials = lazy(()=>import('../../Components/Testimonials/Testimonials'));
const Footer = lazy(()=>import('../../Components/Footer/Footer'));
// const FAQ = lazy(()=>import('../../Components/FAQ/FAQ'));
const DemoContents = lazy(()=>import('../../Components/DemoContents/DemoContents'));




const Home = () => {
  return (
    <div>
      

      
      
      <Hero/>
      <Impact/>
      <Banner/>
      <Gallery/>
      <Assessment/>
      <Testimonials/>
      <DemoContents/>
      {/* <FAQ/> */}
      <Footer/>
    </div>
  )
}

export default Home

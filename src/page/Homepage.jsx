import React from 'react';
import Navbar from '../Navbar';
import HeroSection from '../HeroSection';
import About from '../About';
import Skills from '../Skills';
import ContactForm from '../form';
import FlexDisplay from '../Projects';
function HomePage() {
    return (
      <>
        <Navbar />
        <HeroSection/>
        <About/>
        <Skills/>
        <FlexDisplay/>

        <ContactForm/>
       
      </>
    );
  }
  
  export default HomePage;
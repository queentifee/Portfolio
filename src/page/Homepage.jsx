import React from 'react';
import Navbar from '../Navbar';
import HeroSection from '../HeroSection';
import About from '../About';
import Skills from '../Skills';
import ContactForm from '../form';
import FlexDisplay from '../Projects';
import Footer from '../Footer';
function HomePage() {
  return (
    <>
      <Navbar />
      <section id="hero"><HeroSection /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><FlexDisplay /></section>
      <section id="contact"><ContactForm /></section>
      <Footer/>
    </>
    );
  }
  
  export default HomePage;
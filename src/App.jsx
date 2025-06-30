import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import SmoothScroll from "smooth-scroll";

function App() {
  useEffect(() => {
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 600,
      offset: 80, // adjust for your fixed navbar height
      speedAsDuration: true,
    });
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 800,  // animation duration in ms
      once: true,     // only animate once per scroll
    });
  }, []);
  return (
   <>
     <Navbar/>
    <div className='pt-16 md:px-20  flex flex-col justify-center items-center'>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
      <Footer/>
   </>
  )
}

export default App

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import VolunteerForm from './components/VolunteerForm';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <VolunteerForm/>
      <Footer/>
    </>
  );
}

export default App;

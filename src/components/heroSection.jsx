import React from 'react'
import Navbar from './navbar';
import banner from '../assets/banner-img.png'
import HeroSection2 from './heroSection2';
import Footer from './footer';
import Login from './login';
import Demo from './demo';
import { Navigate, useNavigate } from 'react-router-dom';

function HeroSection() {
    const navigate = useNavigate();
  return (
    <div>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <Navbar />
      <section className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col-reverse md:flex-row items-center justify-between py-12 md:py-20 gap-8">
        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 text-gray-900 drop-shadow">
            Save your Engineering <br className="hidden md:block"/> Bandwidth
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
            Your time matters. Let us help you streamline your hiring or technical interview process and boost your team's productivity.
          </p>
          <button
            onClick={() => { navigate('/demo') }}
            className="bg-black hover:bg-gray-700 transition-colors duration-200 text-white px-5 py-2 md:px-8 md:py-3 text-base md:text-lg rounded-lg font-semibold shadow-lg"
          >
            Request demo
          </button>
        </div>
        {/* Banner Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div >
            <img
              src={banner}
              alt="banner"
              className="w-= h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

      </section>
      
    </div>
    <HeroSection2 />
    <Demo/>
    <Footer />
    </div>
    
  )
}

export default HeroSection;

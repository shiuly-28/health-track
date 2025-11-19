"use client"
// components/Navbar.jsx   (JavaScript version - no TypeScript)

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // npm install lucide-react

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'AboutUs', href: '/aboutUs' },
    { label: 'Services', href: '/service' },
    { label: 'Doctors', href: '/doctors' },
    { label: 'Appointment', href: '/appointment' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/40 border-b border-white/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-blue-700">
                HealTrack
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleDrawer}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer (Right Side) */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-48 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-2xl font-bold text-blue-700">HealTrack</h2>
            <button
              onClick={toggleDrawer}
              className="text-gray-600 hover:text-gray-900"
            >
              <X size={28} />
            </button>
          </div>

          {/* Drawer Menu Items */}
          <div className="flex-1 px-6 py-8 space-y-6">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={toggleDrawer}
                className="block text-xl text-gray-800 hover:text-blue-600 font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Optional Footer in Drawer */}
          <div className="p-6 border-t">
            <p className="text-sm text-gray-500">© 2025 HealTrack Hospital</p>
          </div>
        </div>
      </div>

      {/* Overlay when drawer is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleDrawer}
        />
      )}
    </>
  );
}





  // <Image
  //         src="https://i.postimg.cc/nr3Tztnb/premium-photo-1664475450083-5c9eef17a191.jpg"
  //         alt="HealTrack Hospital"
  //         fill
  //         priority
  //         className="object-cover opacity-50"
  //       />

        // <div className="relative z-10 flex items-center min-h-screen">
        //   <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center lg:text-left">
        //     <div className="max-w-5xl mx-auto lg:mx-0 space-y-8">
        //       <div className="inline-block px-8 py-4 bg-red-600/90 backdrop-blur-md rounded-full text-white font-bold text-lg animate-pulse">
        //         24/7 Emergency Service Available
        //       </div>

        //       <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
        //         Welcome to <span className="text-cyan-400">HealTrack</span> Hospital
        //       </h1>

        //       <p className="text-2xl sm:text-3xl text-cyan-200 font-semibold">
        //         Advanced Healthcare with Compassion
        //       </p>

        //       <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto lg:mx-0">
        //         Experience world-class medical care with cutting-edge technology, 
        //         50+ specialist doctors, and 24/7 emergency support.
        //       </p>

        //       <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-6">
        //         <Link
        //           href="/appointment"
        //           className="group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold text-xl rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
        //         >
        //           Book Appointment
        //           <ArrowRight className="ml-3 group-hover:translate-x-3 transition-transform" size={28} />
        //         </Link>

        //         <a
        //           href="tel:+8801234567890"
        //           className="inline-flex items-center justify-center px-10 py-5 bg-white/20 backdrop-blur-lg border-2 border-white/40 text-white hover:bg-white/30 font-bold text-xl rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
        //         >
        //           <Phone className="mr-3" size={28} />
        //           +880 1234-567890
        //         </a>
        //       </div>

        //       <div className="grid grid-cols-3 gap-8 pt-12 text-white">
        //         <div className="text-center">
        //           <Heart className="w-14 h-14 mx-auto text-red-400 mb-3 animate-pulse" />
        //           <div className="text-3xl font-bold">10K+</div>
        //           <div className="text-gray-300">Happy Patients</div>
        //         </div>
        //         <div className="text-center">
        //           <Activity className="w-14 h-14 mx-auto text-green-400 mb-3" />
        //           <div className="text-3xl font-bold">50+</div>
        //           <div className="text-gray-300">Expert Doctors</div>
        //         </div>
        //         <div className="text-center">
        //           <Ambulance className="w-14 h-14 mx-auto text-yellow-400 mb-3" />
        //           <div className="text-3xl font-bold">24/7</div>
        //           <div className="text-gray-300">Emergency Care</div>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </div> 
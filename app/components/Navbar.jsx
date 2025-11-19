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
    { label: 'Services', href: '/services' },
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
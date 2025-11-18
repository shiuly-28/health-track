// components/HeroWithImageCards.jsx → Final Premium Version 2025

"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, Heart, Activity, Ambulance } from "lucide-react";

export default function HeroWithImageCards() {
  const services = [
    {
      title: "Cardiology",
      patients: "5,200+ Patients",
      image: "https://i.postimg.cc/bJRWFDks/360-F-276021384-p9d1Hkgn4d5LYX1Fn-CQRSLw76YX7754n.jpg",
      gradient: "from-red-500 to-pink-600",
    },
    {
      title: "Neurology",
      patients: "3,800+ Patients",
      image: "https://i.postimg.cc/MG2L6bY9/istockphoto-962094986-612x612.jpg",
      gradient: "from-purple-500 to-indigo-600",
    },
    {
      title: "Orthopedics",
      patients: "7,100+ Patients",
      image: "https://i.postimg.cc/Gpmys6K6/Is-There-A-Difference-Between-An-Orthopedic-Doctor-and-An-Orthopedic-Surgeon.jpg",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      title: "Pediatrics",
      patients: "9,400+ Patients",
      image: "https://i.postimg.cc/qByzgk0C/FAMILY-DOCTOR.webp",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      title: "Ophthalmology",
      patients: "4,600+ Patients",
      image: "https://i.postimg.cc/BZTn4McR/Side-perspective-of-an-eye-doctor-using-a-microscope-and-slit-lamp-to-view-a-patients-eye.png",
      gradient: "from-orange-500 to-amber-600",
    },
    {
      title: "General Medicine",
      patients: "12,000+ Patients",
      image: "https://i.postimg.cc/6pgXdvfG/senior-doctor-sitting-office-23-2147896126.avif",
      gradient: "from-teal-500 to-cyan-700",
    },
  ];

  return (
    <>
      {/* Premium Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 overflow-hidden">
        <Image
          src="https://i.postimg.cc/nr3Tztnb/premium-photo-1664475450083-5c9eef17a191.jpg"
          alt="HealTrack Hospital"
          fill
          priority
          className="object-cover opacity-50"
        />

        <div className="relative z-10 flex items-center min-h-screen">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center lg:text-left">
            <div className="max-w-5xl mx-auto lg:mx-0 space-y-8">
              <div className="inline-block px-8 py-4 bg-red-600/90 backdrop-blur-md rounded-full text-white font-bold text-lg animate-pulse">
                24/7 Emergency Service Available
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
                Welcome to <span className="text-cyan-400">HealTrack</span> Hospital
              </h1>

              <p className="text-2xl sm:text-3xl text-cyan-200 font-semibold">
                Advanced Healthcare with Compassion
              </p>

              <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto lg:mx-0">
                Experience world-class medical care with cutting-edge technology, 
                50+ specialist doctors, and 24/7 emergency support.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-6">
                <Link
                  href="/appointment"
                  className="group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold text-xl rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
                >
                  Book Appointment
                  <ArrowRight className="ml-3 group-hover:translate-x-3 transition-transform" size={28} />
                </Link>

                <a
                  href="tel:+8801234567890"
                  className="inline-flex items-center justify-center px-10 py-5 bg-white/20 backdrop-blur-lg border-2 border-white/40 text-white hover:bg-white/30 font-bold text-xl rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
                >
                  <Phone className="mr-3" size={28} />
                  +880 1234-567890
                </a>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-12 text-white">
                <div className="text-center">
                  <Heart className="w-14 h-14 mx-auto text-red-400 mb-3 animate-pulse" />
                  <div className="text-3xl font-bold">10K+</div>
                  <div className="text-gray-300">Happy Patients</div>
                </div>
                <div className="text-center">
                  <Activity className="w-14 h-14 mx-auto text-green-400 mb-3" />
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-gray-300">Expert Doctors</div>
                </div>
                <div className="text-center">
                  <Ambulance className="w-14 h-14 mx-auto text-yellow-400 mb-3" />
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-gray-300">Emergency Care</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Emergency Button */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 lg:hidden">
          <a
            href="tel:+8801234567890"
            className="flex items-center gap-3 px-8 py-5 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-full shadow-2xl animate-pulse"
          >
            <Ambulance size={28} />
            Emergency Call
          </a>
        </div>
      </section>

      {/* 6 Image-Based Department Cards – 3 Column Responsive */}
      <section className="relative bg-gray-50 py-20 -mt-20 lg:-mt-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Our Specialized Departments
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Expert care across all major medical specialties
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl shadow-2xl overflow-hidden cursor-pointer transform hover:scale-105 hover:-translate-y-6 transition-all duration-500"
              >
                {/* Department Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  
                  {/* Gradient Badge */}
                  <div className={`absolute top-6 left-6 px-5 py-2 bg-gradient-to-r ${service.gradient} text-white font-bold rounded-full text-sm`}>
                    {service.title}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8 text-center space-y-4 bg-white">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                  <p className={`text-3xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    {service.patients}
                  </p>
                  <p className="text-gray-600">Successfully Treated</p>

                  <div className="pt-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <Link
                      href={`/departments/${service.title.toLowerCase()}`}
                      className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all"
                    >
                      Explore Department <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 ring-4 ring-transparent group-hover:ring-blue-300/30 transition-all duration-500 rounded-3xl" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
// app/services/page.jsx   ← ব্যানার ছাড়া, শুধু কার্ড

"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, Heart, Activity, Stethoscope, Brain, Baby, Eye } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      slug: "cardiology",
      title: "Cardiology",
      icon: Heart,
      color: "from-red-500 to-pink-600",
      desc: "Advanced heart care with latest technology & experienced cardiologists.",
      img: "https://i.postimg.cc/bJRWFDks/360-F-276021384-p9d1Hkgn4d5LYX1Fn-CQRSLw76YX7754n.jpg",
    },
    {
      slug: "neurology",
      title: "Neurology",
      icon: Brain,
      color: "from-purple-500 to-indigo-600",
      desc: "Expert treatment for brain, spine & nervous system disorders.",
      img: "https://i.postimg.cc/MG2L6bY9/istockphoto-962094986-612x612.jpg",
    },
    {
      slug: "orthopedics",
      title: "Orthopedics",
      icon: Activity,
      color: "from-blue-500 to-cyan-600",
      desc: "Joint replacement, sports injury & fracture management.",
      img: "https://i.postimg.cc/Gpmys6K6/orthopedics-doctor.jpg",
    },
    {
      slug: "pediatrics",
      title: "Pediatrics",
      icon: Baby,
      color: "from-green-500 to-emerald-600",
      desc: "Complete child healthcare from newborn to teenage.",
      img: "https://i.postimg.cc/qByzgk0C/FAMILY-DOCTOR.webp",
    },
    {
      slug: "ophthalmology",
      title: "Ophthalmology",
      icon: Eye,
      color: "from-orange-500 to-amber-600",
      desc: "Cataract, LASIK, glaucoma & retina treatment.",
      img: "https://i.postimg.cc/BZTn4McR/eye-doctor.jpg",
    },
    {
      slug: "general-medicine",
      title: "General Medicine",
      icon: Stethoscope,
      color: "from-teal-500 to-cyan-700",
      desc: "Diabetes, hypertension & general health checkup.",
      img: "https://i.postimg.cc/6pgXdvfG/senior-doctor-sitting-office.jpg",
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* Page Title – ব্যানারের বদলে সিম্পল টাইটেল */}
      <div className="text-center py-16 px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
          Our <span className="text-blue-600">Services</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
          World-class medical treatment with modern technology and expert doctors
        </p>
      </div>

      {/* Services Cards Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.slug}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden"
            >
              {/* Card Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.img}
                  alt={`${service.title} - HealTrack Hospital`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                
                {/* Badge */}
                <div className={`absolute bottom-4 left-4 px-5 py-2 bg-gradient-to-r ${service.color} text-white font-bold rounded-full shadow-lg`}>
                  {service.title}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 text-center space-y-6">
                {/* Icon – পারফেক্ট সেন্টার */}
                <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-xl`}>
                  <service.icon size={36} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>

                {/* Learn More Button */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow"
                  >
                    Learn More <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 py-16">
        <div className="max-w-4xl mx-auto text-center text-white px-6">
          <Phone size={64} className="mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">24/7 Emergency Service</h2>
          <p className="text-xl mb-8"> always here when you need us</p>
          <a
            href="tel:+8801234567890"
            className="inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-full text-xl font-bold hover:bg-gray-100 transition shadow-2xl"
          >
            <Phone size={28} />
            Call Now: +880 1234-567890
          </a>
        </div>
      </section>
    </div>
  );
}
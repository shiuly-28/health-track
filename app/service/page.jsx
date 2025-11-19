// app/services/page.jsx   ← ছোট ছবি + শুধু কার্ড + সুপার ক্লিন

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
    <div className="pt-20 min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Page Title – সিম্পল + ক্লিন */}
      <div className="text-center py-12 px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-3">
          Our <span className="text-blue-600">Services</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600">Choose from our specialized departments</p>
      </div>

      {/* Services Grid – ছোট ছবি */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.slug}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* ছোট ছবি – মাত্র 140px উঁচু */}
              <div className="relative h-36 overflow-hidden">
                <Image
                  src={service.img}
                  alt={`${service.title} - HealTrack Hospital`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white font-bold text-lg">
                  {service.title}
                </div>
              </div>

              {/* কন্টেন্ট */}
              <div className="p-6 space-y-5">
                {/* আইকন – পারফেক্ট সেন্টার */}
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg`}>
                  <service.icon size={32} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center text-sm leading-relaxed">{service.desc}</p>

                {/* Learn More – হোভারে দেখাবে */}
                <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-2">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition"
                  >
                    Learn More <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 py-14">
        <div className="max-w-4xl mx-auto text-center text-white px-6">
          <Phone size={56} className="mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-3">24/7 Emergency Available</h2>
          <p className="text-lg mb-6">Call us anytime for immediate medical attention</p>
          <a
            href="tel:+8801234567890"
            className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition shadow-xl"
          >
            <Phone size={24} />
            +880 1234-567890
          </a>
        </div>
      </section>
    </div>
  );
}
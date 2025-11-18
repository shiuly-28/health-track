"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Product() {
  const services = [
    {
      title: "Cardiology",
      patients: "5,200+ Patients",
      image:
        "https://i.postimg.cc/bJRWFDks/360-F-276021384-p9d1Hkgn4d5LYX1Fn-CQRSLw76YX7754n.jpg",
      gradient: "from-red-500 to-pink-600",
      slug: "cardiology",
    },
    {
      title: "Neurology",
      patients: "3,800+ Patients",
      image: "https://i.postimg.cc/MG2L6bY9/istockphoto-962094986-612x612.jpg",
      gradient: "from-purple-500 to-indigo-600",
      slug: "neurology",
    },
    {
      title: "Orthopedics",
      patients: "7,100+ Patients",
      image:
        "https://i.postimg.cc/Gpmys6K6/Is-There-A-Difference-Between-An-Orthopedic-Doctor-and-An-Orthopedic-Surgeon.jpg",
      gradient: "from-blue-500 to-cyan-600",
      slug: "orthopedics",
    },
    {
      title: "Pediatrics",
      patients: "9,400+ Patients",
      image: "https://i.postimg.cc/qByzgk0C/FAMILY-DOCTOR.webp",
      gradient: "from-green-500 to-emerald-600",
      slug: "pediatrics",
    },
    {
      title: "Ophthalmology",
      patients: "4,600+ Patients",
      image:
        "https://i.postimg.cc/BZTn4McR/Side-perspective-of-an-eye-doctor-using-a-microscope-and-slit-lamp-to-view-a-patients-eye.png",
      gradient: "from-orange-500 to-amber-600",
      slug: "ophthalmology",
    },
    {
      title: "General Medicine",
      patients: "12,000+ Patients",
      image:
        "https://i.postimg.cc/6pgXdvfG/senior-doctor-sitting-office-23-2147896126.avif",
      gradient: "from-teal-500 to-cyan-700",
      slug: "general-medicine",
    },
  ];

  return (
    <section className="relative bg-gray-50 py-20 -mt-20 lg:-mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Our Specialized Departments
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Expert care across all major medical specialties
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <Link key={service.slug} href={`/departments/${service.slug}`}>

              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="group relative bg-white rounded-3xl shadow-2xl overflow-hidden cursor-pointer"
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  <div
                    className={`absolute top-6 left-6 px-5 py-2 bg-gradient-to-r ${service.gradient} text-white font-bold rounded-full text-sm`}
                  >
                    {service.title}
                  </div>
                </div>

                {/* Text Section */}
                <div className="p-8 text-center space-y-4 bg-white">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {service.title}
                  </h3>

                  <p
                    className={`text-3xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                  >
                    {service.patients}
                  </p>

                  <p className="text-gray-600">Successfully Treated</p>

                  <div className="pt-4">
                    <span className="inline-flex items-center gap-2 text-blue-600 font-bold group-hover:gap-4 transition-all duration-300">
                      Explore Department <ArrowRight size={20} />
                    </span>
                  </div>
                </div>

                {/* Hover Border */}
                <div className="absolute inset-0 ring-4 ring-transparent group-hover:ring-blue-300/20 transition-all duration-500 rounded-3xl" />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// app/doctors/page.jsx   ← সম্পূর্ণ ফিক্সড + কোনো এরর নেই

"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Calendar, Stethoscope, Award, Users, Heart } from "lucide-react";

export default function DoctorsPage() {
  const doctors = [
    {
      name: "Dr. Mohammad Rahman",
      degree: "MBBS, FCPS (Cardiology)",
      specialty: "Senior Cardiologist",
      experience: "18+ Years",
      image: "https://i.postimg.cc/9fCm5Cq5/forbes-cardiologist-X1280.webp",
      phone: "+880 1711-223344",
      email: "rahman@healtrack.com",
    },
    {
      name: "Dr. Fatima Akter",
      degree: "MBBS, MD (Neurology)",
      specialty: "Neurologist & Stroke Specialist",
      experience: "15+ Years",
      image: "https://i.postimg.cc/Hxfbd6Dk/MVPADMA.jpg",
      phone: "+880 1711-223355",
      email: "fatima@healtrack.com",
    },
    {
      name: "Dr. Arif Hossain",
      degree: "MBBS, MS (Orthopedics)",
      specialty: "Orthopedic Surgeon",
      experience: "20+ Years",
      image: "https://i.postimg.cc/Hnc3tJHF/dr-kiran-kumar-mannava-consultant-orthopedics.png",  // এই লাইনটা ফিক্স করা হয়েছে
      phone: "+880 1711-223366",
      email: "arif@healtrack.com",
    },
    {
      name: "Dr. Sabrina Islam",
      degree: "MBBS, FCPS (Pediatrics)",
      specialty: "Child Specialist",
      experience: "12+ Years",
      image: "https://i.postimg.cc/BQCNBGGJ/6669ee6d926229a70e5c0557-getty-images-o-Ui-UZ-Zs-YBk-unsplash.webp",
      phone: "+880 1711-223377",
      email: "sabrina@healtrack.com",
    },
    {
      name: "Dr. Kamal Uddin",
      degree: "MBBS, DOMS (Eye)",
      specialty: "Eye Specialist & Surgeon",
      experience: "16+ Years",
      image: "https://i.postimg.cc/L6hhNzcX/istockphoto-692381656-612x612.jpg",
      phone: "+880 1711-223388",
      email: "kamal@healtrack.com",
    },
    {
      name: "Dr. Nasrin Sultana",
      degree: "MBBS, FCPS (Medicine)",
      specialty: "Internal Medicine Specialist",
      experience: "14+ Years",
      image: "https://i.postimg.cc/8P8P8P8P/doctor6.jpg",
      phone: "+880 1711-223399",
      email: "nasrin@healtrack.com",
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Page Header */}
      <div className="text-center py-16 px-6 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Meet Our <span className="text-yellow-300">Expert Doctors</span>
        </h1>
        <p className="text-xl md:text-2xl opacity-95 max-w-4xl mx-auto">
          Highly qualified and experienced specialists dedicated to your health
        </p>
      </div>

      {/* Doctors Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              {/* Doctor Image */}
              <div className="relative h-80 overflow-hidden bg-gradient-to-b from-blue-100 to-white">
                <Image
                  src={doctor.image}
                  alt={`Dr. ${doctor.name} - ${doctor.specialty} at HealTrack Hospital`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
                {/* Specialty Badge */}
                <div className="absolute bottom-2 right-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-5 py-2 rounded-full font-bold text-sm shadow-lg">
                  {doctor.specialty}
                </div>

              </div>

              {/* Doctor Info */}
              <div className="p-8 text-center space-y-5">
                <h3 className="text-2xl font-bold text-gray-900">{doctor.name}</h3>
                <p className="text-lg font-semibold text-blue-600">{doctor.degree}</p>
                <p className="text-gray-600">{doctor.specialty}</p>

                <div className="flex items-center justify-center gap-2 text-green-600 font-bold">
                  <Award size={20} />
                  <span>{doctor.experience} Experience</span>
                </div>

                {/* Contact Info */}
                <div className="space-y-3 pt-4 border-t border-gray-200">
                  <a
                    href={`tel:${doctor.phone}`}
                    className="flex items-center justify-center gap-3 text-gray-700 hover:text-blue-600 transition"
                  >
                    <Phone size={18} />
                    <span className="text-sm">{doctor.phone}</span>
                  </a>
                  <a
                    href={`mailto:${doctor.email}`}
                    className="flex items-center justify-center gap-3 text-gray-700 hover:text-blue-600 transition"
                  >
                    <Mail size={18} />
                    <span className="text-sm">Send Email</span>
                  </a>
                </div>

                {/* Appointment Button */}
                <Link
                  href="/appointment"
                  className="block w-full mt-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-2xl font-bold hover:shadow-xl transition-shadow flex items-center justify-center gap-3"
                >
                  <Calendar size={22} />
                  Book Appointment
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="bg-gradient-to-r from-blue-700 to-cyan-700 py-16 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <div>
              <Users className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-5xl font-bold">50+</h3>
              <p className="text-xl mt-2">Expert Doctors</p>
            </div>
            <div>
              <Stethoscope className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-5xl font-bold">20+</h3>
              <p className="text-xl mt-2">Departments</p>
            </div>
            <div>
              <Award className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-5xl font-bold">15+</h3>
              <p className="text-xl mt-2">Years of Service</p>
            </div>
            <div>
              <Heart className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-5xl font-bold">50K+</h3>
              <p className="text-xl mt-2">Happy Patients</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Emergency CTA */}
      {/* <section className="bg-red-600 py-12">
        <div className="max-w-4xl mx-auto text-center text-white px-6">
          <Phone size={60} className="mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-3">24/7 Emergency Service</h2>
          <a
            href="tel:+8801711223344"
            className="inline-flex items-center gap-3 bg-white text-red-600 px-10 py-5 rounded-full text-2xl font-bold hover:bg-gray-100 transition shadow-2xl"
          >
            <Phone size={32} />
            Call: +880 1711-223344
          </a>
        </div>
      </section> */}
    </div>
  );
}
"use client";
import { Phone, CheckCircle, Users, Award, Heart, Brain, Activity, Baby, Eye, Stethoscope } from "lucide-react";
import { useState } from "react";

const servicesData = [
  {
    slug: "cardiology",
    name: "Cardiology",
    icon: Heart,
    color: "from-red-500 to-pink-600",
    short: "Advanced Heart Care",
    desc: "Our Cardiology Department offers comprehensive cardiac care with cutting-edge technology including angioplasty, bypass surgery, pacemaker implantation, and cardiac rehabilitation.",
    image: "https://i.postimg.cc/bJRWFDks/360-F-276021384-p9d1Hkgn4d5LYX1Fn-CQRSLw76YX7754n.jpg",
    features: [
      "24/7 Cardiac Emergency",
      "Coronary Angiography & Angioplasty",
      "Open Heart Surgery (CABG)",
      "Pacemaker & ICD Implantation",
      "Cardiac ICU & Rehabilitation",
    ],
    doctors: 12,
    patients: "5,200+",
    successRate: "98%",
  },
  {
    slug: "neurology",
    name: "Neurology",
    icon: Brain,
    color: "from-purple-500 to-indigo-600",
    short: "Brain & Spine Care",
    desc: "Advanced treatment for stroke, epilepsy, Parkinson's, migraine, and spinal disorders using modern neuro-imaging and neurophysiology labs.",
    image: "https://i.postimg.cc/MG2L6bY9/istockphoto-962094986-612x612.jpg",
    features: ["Stroke Unit", "EEG & EMG", "Epilepsy Clinic", "Headache Treatment", "Spine Surgery"],
    doctors: 10,
    patients: "3,800+",
    successRate: "96%",
  },
  {
    slug: "orthopedics",
    name: "Orthopedics",
    icon: Activity,
    color: "from-blue-500 to-cyan-600",
    short: "Bone & Joint Specialist",
    desc: "Expert care for joint replacement, sports injuries, fracture management, and spine surgery with modern operation theaters.",
    image: "https://i.postimg.cc/Gpmys6K6/orthopedics-doctor.jpg",
    features: ["Knee & Hip Replacement", "Arthroscopy Surgery like ACL", "Spine Surgery", "Trauma Care", "Sports Medicine"],
    doctors: 15,
    patients: "7,100+",
    successRate: "97%",
  },
  {
    slug: "pediatrics",
    name: "Pediatrics",
    icon: Baby,
    color: "from-green-500 to-emerald-600",
    short: "Child Healthcare",
    desc: "Complete care for children from newborn to teenage with NICU, vaccination, growth monitoring, and pediatric surgery.",
    image: "https://i.postimg.cc/qByzgk0C/FAMILY-DOCTOR.webp",
    features: ["Neonatal ICU (NICU)", "Vaccination Program", "Growth Checkup", "Pediatric Surgery", "Asthma Clinic"],
    doctors: 18,
    patients: "9,400+",
    successRate: "99%",
  },
  {
    slug: "ophthalmology",
    name: "Ophthalmology",
    icon: Eye,
    color: "from-orange-500 to-amber-600",
    short: "Eye Care Center",
    desc: "Complete eye care including cataract surgery, LASIK, glaucoma treatment, and retina services with latest equipment.",
    image: "https://i.postimg.cc/BZTn4McR/eye-doctor.jpg",
    features: ["Phaco Cataract Surgery", "LASIK & Refractive", "Glaucoma Clinic", "Retina Treatment", "Optical Shop"],
    doctors: 8,
    patients: "4,600+",
    successRate: "99%",
  },
  {
    slug: "general-medicine",
    name: "General Medicine",
    icon: Stethoscope,
    color: "from-teal-500 to-cyan-700",
    short: "Daily Healthcare",
    desc: "Diagnosis and treatment of diabetes, hypertension, fever, respiratory issues, and general health checkups.",
    image: "https://i.postimg.cc/6pgXdvfG/senior-doctor-sitting-office.jpg",
    features: ["Diabetes Management", "Hypertension Clinic", "Health Checkup Packages", "Fever & Infection Care", "Geriatric Care"],
    doctors: 20,
    patients: "12,000+",
    successRate: "95%",
  },
];

export default function ServiceDetail() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {!selectedService ? (
        // Services Grid - যখন কোনো service select হয়নি
        <>
          <div className="text-center py-12 px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-3">
              Our <span className="text-blue-600">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600">Click on any service to see details</p>
          </div>

          <section className="max-w-7xl mx-auto px-6 pb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((service) => (
                <div
                  key={service.slug}
                  onClick={() => setSelectedService(service)}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 overflow-hidden border border-gray-100 cursor-pointer"
                >
                  {/* ছোট ছবি */}
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src={service.image}
                      alt={`${service.name} - HealTrack Hospital`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 text-white font-bold text-lg">
                      {service.name}
                    </div>
                  </div>

                  {/* কন্টেন্ট */}
                  <div className="p-6 space-y-5">
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg`}>
                      <service.icon size={32} />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 text-center">{service.name}</h3>
                    <p className="text-gray-600 text-center text-sm leading-relaxed">{service.short}</p>

                    <div className="text-center pt-2">
                      <span className="text-blue-600 font-semibold text-sm">Click to view details →</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      ) : (
        // Service Details - যখন একটা service select করা হয়েছে
        <>
          {/* Back Button */}
          <div className="max-w-7xl mx-auto px-6 py-6">
            <button
              onClick={() => setSelectedService(null)}
              className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition"
            >
              ← Back to Services
            </button>
          </div>

          {/* Page Title */}
          <div className="text-center py-6 px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              {selectedService.name}
            </h1>
            <p className="text-lg md:text-xl text-gray-600">{selectedService.short}</p>
          </div>

          {/* Content */}
          <section className="max-w-7xl mx-auto px-6 pb-16">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Main Content Card */}
              <div className="md:col-span-2 space-y-6">
                {/* Image Card */}
                <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                  <div className="relative h-64">
                    <img 
                      src={selectedService.image} 
                      alt={selectedService.name} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Department</h2>
                    <p className="text-base text-gray-700 leading-relaxed">{selectedService.desc}</p>
                  </div>
                </div>

                {/* Services Card */}
                <div className="bg-white rounded-2xl shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-5">Our Services</h3>
                  <ul className="space-y-3">
                    {selectedService.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700">
                        <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                        <span className="text-base">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Stats Sidebar */}
              <div className="space-y-6">
                {/* Patients Card */}
                <div className="bg-white rounded-2xl shadow-md p-6 text-center">
                  <Users className="w-12 h-12 mx-auto text-blue-600 mb-3" />
                  <p className="text-3xl font-bold text-gray-900">{selectedService.patients}</p>
                  <p className="text-gray-600 text-sm mt-1">Patients Treated</p>
                </div>

                {/* Success Rate Card */}
                <div className="bg-white rounded-2xl shadow-md p-6 text-center">
                  <Award className="w-12 h-12 mx-auto text-green-600 mb-3" />
                  <p className="text-3xl font-bold text-gray-900">{selectedService.successRate}</p>
                  <p className="text-gray-600 text-sm mt-1">Success Rate</p>
                </div>

                {/* Doctors Card */}
                <div className="bg-white rounded-2xl shadow-md p-6 text-center">
                  <div className="text-4xl mb-3">👨‍⚕️</div>
                  <p className="text-3xl font-bold text-gray-900">{selectedService.doctors}+</p>
                  <p className="text-gray-600 text-sm mt-1">Expert Doctors</p>
                </div>

                {/* Call Card */}
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-6 text-white text-center">
                  <Phone size={40} className="mx-auto mb-3" />
                  <p className="text-lg font-bold mb-4">24/7 Available</p>
                  <a 
                    href="tel:+8801234567890" 
                    className="block bg-white text-blue-600 py-3 rounded-full font-semibold text-sm hover:bg-blue-50 transition"
                  >
                    Call for Appointment
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Emergency CTA */}
          <section className="bg-gradient-to-r from-blue-600 to-cyan-600 py-12">
            <div className="max-w-4xl mx-auto text-center text-white px-6">
              <Phone size={48} className="mx-auto mb-3" />
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Need Immediate Care?</h2>
              <p className="text-base mb-5">Our {selectedService.name} specialists are available 24/7</p>
              <a
                href="tel:+8801234567890"
                className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-3 rounded-full text-base font-bold hover:bg-gray-100 transition shadow-lg"
              >
                <Phone size={20} />
                +880 1234-567890
              </a>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
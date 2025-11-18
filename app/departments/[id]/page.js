// app/departments/[slug]/page.jsx
"use client"
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { Heart, Activity, Users, Award, Clock, Phone } from "lucide-react";

// Department data (পরে API থেকে আনতে পারো)
const departmentsData = [
  {
    slug: "cardiology",
    name: "Cardiology",
    shortDesc: "Advanced heart care with cutting-edge technology",
    fullDesc:
      "Our Cardiology Department is equipped with state-of-the-art facilities and staffed by highly experienced cardiologists. We provide comprehensive cardiac care including preventive cardiology, interventional procedures, cardiac surgery, and rehabilitation services.",
    image: "https://i.postimg.cc/bJRWFDks/360-F-276021384-p9d1Hkgn4d5LYX1Fn-CQRSLw76YX7754n.jpg",
    stats: [
      { icon: Heart, label: "Heart Surgeries", value: "1,200+" },
      { icon: Activity, label: "Angiography", value: "5,200+" },
      { icon: Users, label: "Patients Yearly", value: "8,000+" },
    ],
    services: [
      "Coronary Angiography & Angioplasty",
      "Heart Bypass Surgery (CABG)",
      "Pacemaker Implantation",
      "ECG, Echo & Stress Test",
      "Cardiac ICU & Rehabilitation",
    ],
    doctors: 12,
    available: "24/7 Emergency Cardiac Care",
  },
  {
    slug: "neurology",
    name: "Neurology",
    shortDesc: "Expert care for brain, spine & nervous system",
    fullDesc:
      "The Neurology Department offers advanced diagnosis and treatment for neurological disorders including stroke, epilepsy, Parkinson’s disease, migraine, and spinal conditions using modern neuro-imaging and neurophysiology labs.",
    image: "https://i.postimg.cc/MG2L6bY9/istockphoto-962094986-612x612.jpg",
    stats: [
      { icon: Activity, label: "Stroke Cases", value: "980+" },
      { icon: Users, label: "EEG Tests", value: "3,800+" },
      { icon: Award, label: "Success Rate", value: "96%" },
    ],
    services: [
      "Stroke Management & Thrombolysis",
      "Epilepsy Treatment & EEG",
      "Parkinson’s & Movement Disorders",
      "Headache & Migraine Clinic",
      "Spine & Nerve Conduction Studies",
    ],
    doctors: 10,
    available: "24/7 Stroke Emergency Unit",
  },
  {
    slug: "orthopedics",
    name: "Orthopedics",
    shortDesc: "Joint replacement & sports injury specialists",
    fullDesc:
      "Our Orthopedics Department provides comprehensive bone and joint care including joint replacement, arthroscopy, trauma surgery, and spine surgery with modern operation theaters and rehabilitation support.",
    image: "https://i.postimg.cc/Gpmys6K6/Is-There-A-Difference-Between-An-Orthopedic-Doctor-and-An-Orthopedic-Surgeon.jpg",
    stats: [
      { icon: Award, label: "Joint Replacements", value: "2,400+" },
      { icon: Activity, label: "Arthroscopy", value: "3,100+" },
      { icon: Users, label: "Fracture Cases", value: "7,100+" },
    ],
    services: [
      "Total Knee & Hip Replacement",
      "Arthroscopic ACL/Meniscus Surgery",
      "Spine Surgery & Disc Treatment",
      "Trauma & Fracture Management",
      "Sports Injury Rehabilitation",
    ],
    doctors: 15,
    available: "24/7 Trauma & Emergency Care",
  },
  {
    slug: "pediatrics",
    name: "Pediatrics",
    shortDesc: "Complete child healthcare from newborn to teenage",
    fullDesc:
      "We provide compassionate and expert care for children of all ages with dedicated pediatric ICU, vaccination center, growth monitoring, and child development services.",
    image: "https://i.postimg.cc/qByzgk0C/FAMILY-DOCTOR.webp",
    stats: [
      { icon: Users, label: "Happy Kids", value: "9,400+" },
      { icon: Heart, label: "Vaccinations", value: "25,000+" },
      { icon: Award, label: "NICU Survival", value: "98%" },
    ],
    services: [
      "Neonatal Intensive Care (NICU)",
      "Child Vaccination Program",
      "Growth & Development Checkup",
      "Pediatric Surgery",
      "Asthma & Allergy Clinic",
    ],
    doctors: 18,
    available: "24/7 Pediatric Emergency",
  },
  {
    slug: "ophthalmology",
    name: "Ophthalmology",
    shortDesc: "Advanced eye care & vision correction",
    fullDesc:
      "Complete eye care services including cataract surgery, LASIK, glaucoma treatment, retina care, and pediatric ophthalmology with latest diagnostic equipment.",
    image: "https://i.postimg.cc/BZTn4McR/Side-perspective-of-an-eye-doctor-using-a-microscope-and-slit-lamp-to-view-a-patients-eye.png",
    stats: [
      { icon: Activity, label: "Cataract Surgeries", value: "4,600+" },
      { icon: Award, label: "LASIK Procedures", value: "2,100+" },
      { icon: Users, label: "Eye Checkups", value: "18,000+" },
    ],
    services: [
      "Phaco Cataract Surgery",
      "LASIK & Refractive Surgery",
      "Glaucoma Treatment",
      "Retina & Vitreous Services",
      "Contact Lens & Optical Shop",
    ],
    doctors: 8,
    available: "Mon-Sat 9AM - 8PM",
  },
  {
    slug: "general-medicine",
    name: "General Medicine",
    shortDesc: "Comprehensive healthcare for all ages",
    fullDesc:
      "Our General Medicine department provides diagnosis, treatment, and preventive care for a wide range of medical conditions with experienced physicians and modern diagnostic facilities.",
    image: "https://i.postimg.cc/6pgXdvfG/senior-doctor-sitting-office-23-2147896126.avif",
    stats: [
      { icon: Users, label: "Patients Treated", value: "12,000+" },
      { icon: Activity, label: "Health Checkups", value: "8,500+" },
      { icon: Award, label: "Diabetes Control", value: "94%" },
    ],
    services: [
      "Diabetes & Hypertension Management",
      "Infectious Disease Treatment",
      "Executive Health Checkup",
      "Fever & Respiratory Care",
      "Geriatric (Elderly) Care",
    ],
    doctors: 20,
    available: "24/7 OPD & Emergency",
  },
];

export default function DepartmentPage() {
  const params = useParams();
  const department = departmentsData.find((d) => d.slug == params.id);

  if (!department) {
    notFound(); // 404 page চলে যাবে
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <Image
          src={department.image}
          alt={department.name}
          fill
          priority
          className=""
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">{department.name}</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl">{department.shortDesc}</p>
            <div className="flex items-center gap-4 mt-6">
              <span className="px-6 py-3 bg-green-600 rounded-full font-semibold">
                {department.doctors} Specialist Doctors
              </span>
              <span className="px-6 py-3 bg-blue-600 rounded-full font-semibold flex items-center gap-2">
                <Clock size={20} /> {department.available}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          {/* Left Column - Description */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Department</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{department.fullDesc}</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Services</h3>
              <ul className="grid sm:grid-cols-2 gap-4">
                {department.services.map((service, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="text-cyan-600 mt-1">Check</span>
                    <span className="text-base">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Department Statistics</h3>
              <div className="space-y-6">
                {department.stats.map((stat, i) => (
                  <div key={i} className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white">
                      <stat.icon size={28} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-gray-600">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl p-8 text-white text-center">
              <Phone size={48} className="mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Need Consultation?</h3>
              <p className="text-lg mb-6 opacity-90">Book an appointment with our specialists</p>
              <a
                href="tel:+8801234567890"
                className="inline-block px-8 py-4 bg-white text-cyan-700 font-bold rounded-full hover:bg-gray-100 transition"
              >
                Call Now: +880 1234-567890
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
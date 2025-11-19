"use client";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { Phone, ArrowRight, CheckCircle, Clock, Users, Award } from "lucide-react";


const servicesData = [
  {
    slug: "cardiology",
    name: "Cardiology",
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
  const params = useParams();
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) notFound();

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative h-96">
        <Image src={service.image} alt={service.name} fill className="object-cover brightness-75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 text-white p-10">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">{service.name}</h1>
            <p className="text-2xl opacity-90">{service.short}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About This Department</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">{service.desc}</p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Services</h3>
            <ul className="space-y-4">
              {service.features.map((feat, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="text-green-600" size={24} />
                  <span className="text-lg">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats Sidebar */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
              <Users className="w-16 h-16 mx-auto text-blue-600 mb-4" />
              <p className="text-4xl font-bold text-gray-900">{service.patients}</p>
              <p className="text-gray-600">Patients Treated</p>
            </div>
            <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
              <Award className="w-16 h-16 mx-auto text-green-600 mb-4" />
              <p className="text-4xl font-bold text-gray-900">{service.successRate}</p>
              <p className="text-gray-600">Success Rate</p>
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 text-white text-center">
              <Phone size={48} className="mx-auto mb-4" />
              <p className="text-xl font-bold mb-4">24/7 Available</p>
              <a href="tel:+8801234567890" className="block bg-white text-blue-600 py-4 rounded-full font-bold">
                Call for Appointment
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
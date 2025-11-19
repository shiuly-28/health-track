// app/components/ServicesWithAppointment.jsx
"use client";

import { useState } from "react";
import { 
  Heart, 
  Stethoscope, 
  Brain, 
  Baby, 
  Eye, 
  Activity,
  Phone,
  Calendar,
  User,
  MessageCircle,
  X,
  Menu
} from "lucide-react";

export default function Appointment() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const services = [
    { icon: Heart, title: "Cardiology", desc: "Advanced heart care with latest technology" },
    { icon: Stethoscope, title: "General Medicine", desc: "Complete health checkup & treatment" },
    { icon: Brain, title: "Neurology", desc: "Expert care for brain & nervous system" },
    { icon: Baby, title: "Pediatrics", desc: "Caring for your little ones with love" },
    { icon: Eye, title: "Ophthalmology", desc: "Complete eye care & vision solutions" },
    { icon: Activity, title: "Orthopedics", desc: "Bone & joint treatment by experts" },
  ];

  return (
    <>
      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Our Medical Services
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We provide world-class healthcare with experienced doctors and modern equipment
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 p-8 text-center border border-gray-100"
                >
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon size={40} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-10 py-5 rounded-full text-xl font-bold shadow-2xl hover:shadow-cyan-500/50 transition-all hover:scale-105"
            >
              <Calendar size={28} />
              Book Appointment Now
            </button>
          </div>
        </div>
      </section>

      {/* Mobile Drawer + Desktop Modal */}
      {isDrawerOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
            onClick={() => setIsDrawerOpen(false)}
          />

          {/* Mobile Drawer (Right Side) */}
          <div className={`fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-500 ease-in-out ${
            isDrawerOpen ? "translate-x-0" : "translate-x-full"
          } lg:hidden`}>
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-gray-900">Book Appointment</h2>
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="p-3 hover:bg-gray-100 rounded-full transition"
                >
                  <X size={28} />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6 overflow-y-auto h-full">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <div className="flex items-center gap-3 border border-gray-300 rounded-xl px-4 py-3">
                    <User size={20} className="text-gray-500" />
                    <input type="text" placeholder="Enter your name" className="w-full outline-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <div className="flex items-center gap-3 border border-gray-300 rounded-xl px-4 py-3">
                    <Phone size={20} className="text-gray-500" />
                    <input type="tel" placeholder="+880 1xxx-xxxxxx" className="w-full outline-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Department</label>
                  <select className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none">
                    <option>Cardiology</option>
                    <option>Neurology</option>
                    <option>Pediatrics</option>
                    <option>Orthopedics</option>
                    <option>General Medicine</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                  <input type="date" className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                  <div className="flex items-start gap-3 border border-gray-300 rounded-xl px-4 py-3">
                    <MessageCircle size={20} className="text-gray-500 mt-1" />
                    <textarea rows={3} placeholder="Any health issue?" className="w-full outline-none resize-none"></textarea>
                  </div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-5 rounded-2xl font-bold text-xl shadow-xl hover:shadow-cyan-500/50 transition transform hover:scale-105">
                Confirm Appointment
              </button>

              <p className="text-center text-sm text-gray-500">
                We will call you within 10 minutes to confirm
              </p>
            </div>
          </div>

          {/* Desktop Modal */}
          <div className="hidden lg:flex fixed inset-0 bg-black/60 backdrop-blur-sm z-50 items-center justify-center p-6">
            <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-10 relative">
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="absolute top-6 right-6 p-3 hover:bg-gray-100 rounded-full transition"
              >
                <X size={28} />
              </button>

              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Book Your Appointment</h2>
              
              {/* Same form as mobile */}
              <div className="space-y-6">
                {/* একই ফর্ম ফিল্ডস */}
                <div className="grid grid-cols-2 gap-6">
                  <input type="text" placeholder="Full Name" className="border border-gray-300 rounded-xl px-6 py-4" />
                  <input type="tel" placeholder="Phone Number" className="border border-gray-300 rounded-xl px-6 py-4" />
                </div>
                {/* বাকি ফিল্ডস... */}
                <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-5 rounded-2xl font-bold text-xl">
                  Confirm Appointment
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
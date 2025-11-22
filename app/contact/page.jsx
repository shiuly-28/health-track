// app/components/ContactSection.jsx
"use client";

import { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  User, 
  MessageCircle,
  X
} from "lucide-react";

export default function Contact() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Get in Touch With Us
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We are here to help you 24/7. Feel free to reach out anytime.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 p-10 text-center border border-gray-100">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Call Us</h3>
              <p className="text-gray-600 mb-2">Emergency & Appointment</p>
              <a href="tel:+8801711223344" className="text-2xl font-bold text-green-600 hover:text-green-700 transition">
                +880 1711-223344
              </a>
              <p className="text-sm text-gray-500 mt-2">24/7 Available</p>
            </div>

            {/* Email */}
            <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 p-10 text-center border border-gray-100">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Email Us</h3>
              <p className="text-gray-600 mb-2">For any inquiry</p>
              <a href="mailto:info@medicare.com" className="text-xl font-bold text-blue-600 hover:text-blue-700 transition break-all">
                info@medicarehospital.com
              </a>
            </div>

            {/* Location */}
            <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 p-10 text-center border border-gray-100">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <MapPin size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Visit Us</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                House 15, Road 12, Block C<br />
                Banani, Dhaka 1213<br />
                Bangladesh
              </p>
              <div className="flex items-center justify-center gap-2 text-purple-600">
                <Clock size={20} />
                <span className="font-medium">Open 24 Hours</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-5 rounded-full text-xl font-bold shadow-2xl hover:shadow-pink-500/50 transition-all hover:scale-105"
            >
              <MessageCircle size={28} />
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* Mobile Drawer (Right Side) + Desktop Modal */}
      {isDrawerOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            onClick={() => setIsDrawerOpen(false)}
          />

          {/* Mobile Drawer - Right Side */}
          <div className={`fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-500 ease-in-out ${
            isDrawerOpen ? "translate-x-0" : "translate-x-full"
          } lg:hidden`}>
            <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Contact Us</h2>
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition"
                >
                  <X size={28} />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6 overflow-y-auto h-full">
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                  <div className="flex items-center gap-3 border-2 border-gray-300 rounded-2xl px-5 py-4 focus-within:border-purple-500 transition">
                    <User size={22} className="text-gray-500" />
                    <input type="text" placeholder="John Doe" className="w-full outline-none text-lg" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <div className="flex items-center gap-3 border-2 border-gray-300 rounded-2xl px-5 py-4 focus-within:border-purple-500 transition">
                    <Mail size={22} className="text-gray-500" />
                    <input type="email" placeholder="you@example.com" className="w-full outline-none text-lg" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <div className="flex items-center gap-3 border-2 border-gray-300 rounded-2xl px-5 py-4 focus-within:border-purple-500 transition">
                    <Phone size={22} className="text-gray-500" />
                    <input type="tel" placeholder="+880 1xxx-xxxxxx" className="w-full outline-none text-lg" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message</label>
                  <div className="flex items-start gap-3 border-2 border-gray-300 rounded-2xl px-5 py-4 focus-within:border-purple-500 transition">
                    <MessageCircle size={22} className="text-gray-500 mt-1" />
                    <textarea rows={5} placeholder="How can we help you?" className="w-full outline-none resize-none text-lg"></textarea>
                  </div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-5 rounded-2xl font-bold text-xl shadow-xl hover:shadow-pink-500/50 transition transform hover:scale-105 flex items-center justify-center gap-3">
                <Send size={28} />
                Send Message
              </button>

              <p className="text-center text-sm text-gray-500">
                We usually reply within <span className="font-bold text-purple-600">1 hour</span>
              </p>
            </div>
          </div>

          {/* Desktop Modal */}
          <div className="hidden lg:flex fixed inset-0 bg-black/70 backdrop-blur-sm z-50 items-center justify-center p-6">
            <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-10 relative">
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="absolute top-6 right-6 p-3 hover:bg-gray-100 rounded-full transition"
              >
                <X size={28} />
              </button>

              <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Contact Us</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <input type="text" placeholder="Your Name" className="border-2 border-gray-300 rounded-2xl px-6 py-5 focus:border-purple-500 outline-none transition" />
                  <input type="email" placeholder="Email Address" className="border-2 border-gray-300 rounded-2xl px-6 py-5 focus:border-purple-500 outline-none transition" />
                </div>
                <input type="tel" placeholder="Phone Number" className="w-full border-2 border-gray-300 rounded-2xl px-6 py-5 focus:border-purple-500 outline-none transition" />
                <textarea rows={6} placeholder="Your Message" className="w-full border-2 border-gray-300 rounded-2xl px-6 py-5 focus:border-purple-500 outline-none transition resize-none"></textarea>
                
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-5 rounded-2xl font-bold text-xl shadow-xl hover:shadow-pink-500/50 transition transform hover:scale-105">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
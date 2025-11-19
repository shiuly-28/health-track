// app/pricing/page.jsx   ← তোমার নতুন কার্ড ভিত্তিক Marque/Pricing পেজ

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Phone, ArrowRight, Heart, Activity, Stethoscope } from "lucide-react";

export default function PricingPage() {
  const plans = [
    {
      name: "Essential",
      price: "$25",
      period: "/month",
      popular: false,
      features: [
        "General Checkup",
        "Blood Test (Basic)",
        "X-Ray & ECG",
        "Doctor Consultation",
        "Prescription",
        "24/7 Helpline",
      ],
      color: "border-gray-300",
      btn: "bg-gray-800 hover:bg-gray-900",
    },
    {
      name: "Advanced",
      price: "$50",
      period: "/month",
      popular: true,
      features: [
        "Everything in Essential",
        "Full Body Checkup",
        "Ultrasound & MRI",
        "Specialist Consultation",
        "Medicine Delivery",
        "Priority Appointment",
        "Health Report Analysis",
      ],
      color: "border-red-500 shadow-2xl shadow-red-500/20",
      btn: "bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700",
    },
    {
      name: "Premium",
      price: "$500",
      period: "/year",
      popular: false,
      features: [
        "Everything in Advanced",
        "Yearly Full Health Package",
        "Home Visit Doctor",
        "Free Ambulance (2 times)",
        "Family Member Coverage (up to 4)",
        "VIP Room Access",
        "Dedicated Health Manager",
      ],
      color: "border-purple-600",
      btn: "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      {/* Hero Section */}
      <section className="py-20 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Choose the right <span className="text-red-600">package</span> for you
          </h1>
          <p className="text-xl text-gray-600">
            Flexible plans designed for your health needs
          </p>
        </motion.div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`relative bg-white rounded-3xl border-2 ${plan.color} p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 py-2 rounded-full font-bold text-sm shadow-lg">
                  MOST POPULAR
                </div>
              )}

              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-6xl font-extrabold text-gray-900">{plan.price}</span>
                  <span className="text-xl text-gray-600">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-5 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-4">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/appointment"
                className={`block w-full text-center text-white font-bold py-5 rounded-2xl transition transform hover:scale-105 ${plan.btn}`}
              >
                {plan.popular ? "Get Started Now" : "Select Plan"}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="bg-gradient-to-r from-red-600 to-pink-600 py-16">
        <div className="max-w-4xl mx-auto text-center text-white px-6">
          <Heart className="w-16 h-16 mx-auto mb-6 animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Need Immediate Help?</h2>
          <p className="text-xl mb-8">Our emergency team is available 24/7</p>
          <a
            href="tel:+8801711223344"
            className="inline-flex items-center gap-3 bg-white text-red-600 px-10 py-5 rounded-full text-2xl font-bold hover:bg-gray-100 transition shadow-2xl"
          >
            <Phone size={32} />
            Call Now: +880 1711-223344
          </a>
        </div>
      </section>
    </div>
  );
}
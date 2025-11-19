"use client"

export default function AboutUsPage() {
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8">
          About <span className="text-blue-600">HealTrack Hospital</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
          We are a leading multi-specialty hospital committed to delivering world-class 
          healthcare with compassion, advanced technology, and expert medical professionals.
        </p>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white p-12 rounded-3xl shadow-2xl hover:shadow-3xl transition">
            <h3 className="text-5xl font-bold text-blue-600">15+</h3>
            <p className="text-xl text-gray-600 mt-4">Years of Excellence</p>
          </div>
          <div className="bg-white p-12 rounded-3xl shadow-2xl hover:shadow-3xl transition">
            <h3 className="text-5xl font-bold text-blue-600">50+</h3>
            <p className="text-xl text-gray-600 mt-4">Specialist Doctors</p>
          </div>
          <div className="bg-white p-12 rounded-3xl shadow-2xl hover:shadow-3xl transition">
            <h3 className="text-5xl font-bold text-blue-600">24/7</h3>
            <p className="text-xl text-gray-600 mt-4">Emergency Service</p>
          </div>
        </div>
      </div>
    </div>
  );
}
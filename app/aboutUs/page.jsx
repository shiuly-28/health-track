"use client"

export default function AboutUsPage() {
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8">
          About <span className="text-blue-600">HealTrack Hospital</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
          We are a leading multi-specialty hospital committed to delivering world-class 
          healthcare with compassion, advanced technology, and expert medical professionals.
        </p>

        {/* Stats Section */}
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

      {/* Our Story Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Our Story
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded in 2010, HealTrack Hospital began with a simple yet powerful vision: 
                to provide accessible, high-quality healthcare to our community. What started 
                as a modest clinic has grown into a comprehensive medical facility serving 
                thousands of patients annually.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, we stand as a beacon of medical excellence, combining cutting-edge 
                technology with personalized care. Our team of dedicated healthcare professionals 
                works tirelessly to ensure every patient receives the attention and treatment 
                they deserve.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-6">
                To deliver exceptional healthcare services that improve lives through 
                innovation, compassion, and unwavering commitment to patient wellbeing.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be the most trusted healthcare provider, recognized for clinical excellence, 
                patient-centered care, and continuous innovation in medical services.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">❤️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Compassion</h3>
              <p className="text-gray-600">
                We treat every patient with empathy, respect, and genuine care.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We pursue the highest standards in everything we do.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">
                We uphold ethical practices and transparency in all our operations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously adopt advanced technologies and medical practices.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Facilities Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Our Facilities
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Advanced ICU</h3>
              <p className="text-gray-600">
                State-of-the-art intensive care units equipped with the latest monitoring 
                and life-support systems.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Modern Operation Theaters</h3>
              <p className="text-gray-600">
                Fully equipped OTs with advanced surgical equipment for complex procedures.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Diagnostic Center</h3>
              <p className="text-gray-600">
                Comprehensive diagnostic services including MRI, CT scan, X-ray, and 
                laboratory testing.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Pharmacy</h3>
              <p className="text-gray-600">
                24/7 in-house pharmacy stocked with all essential medications.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Ambulance Service</h3>
              <p className="text-gray-600">
                Round-the-clock emergency ambulance service with trained paramedics.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Patient Rooms</h3>
              <p className="text-gray-600">
                Comfortable private and semi-private rooms with modern amenities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Specialties Section */}
      <div className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Our Specialties
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[
              'Cardiology',
              'Neurology',
              'Orthopedics',
              'Pediatrics',
              'Gynecology',
              'Oncology',
              'Gastroenterology',
              'Nephrology',
              'ENT',
              'Dermatology'
            ].map((specialty) => (
              <div key={specialty} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
                <p className="text-gray-800 font-semibold">{specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience Healthcare Excellence
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of satisfied patients who trust HealTrack Hospital for their healthcare needs.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition">
            Book an Appointment
          </button>
        </div>
      </div>
    </div>
  );
}
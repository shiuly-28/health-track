// components/Footer.jsx   (JavaScript - No TypeScript)

import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Youtube, 
  Twitter, 
  Linkedin,
  Clock,
  Heart,
  Stethoscope
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Doctors', href: '/doctors' },
    { name: 'Appointment', href: '/appointment' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    'Emergency Care',
    'Cardiology',
    'Neurology',
    'Pediatrics',
    'Orthopedics',
    'Diagnostic Lab',
  ];

  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand & About */}
          <div className="space-y-5">
            <div className="flex items-center space-x-3">
              <Stethoscope className="w-10 h-10 text-cyan-400" />
              <h2 className="text-3xl font-bold">HealTrack</h2>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Your trusted healthcare partner providing world-class medical services 
              with compassion and excellence since 2020.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="bg-blue-800/50 p-3 rounded-full hover:bg-cyan-500 transition-all hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-blue-800/50 p-3 rounded-full hover:bg-cyan-500 transition-all hover:scale-110">
                <Youtube size={20} />
              </a>
              <a href="#" className="bg-blue-800/50 p-3 rounded-full hover:bg-cyan-500 transition-all hover:scale-110">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-blue-800/50 p-3 rounded-full hover:bg-cyan-500 transition-all hover:scale-110">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Heart className="w-6 h-6 mr-2 text-cyan-400" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-blue-200 hover:text-cyan-400 transition-colors flex items-center group"
                  >
                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                    <span className="ml-2">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3 text-blue-200">
              {services.map((service) => (
                <li key={service} className="flex items-center hover:text-cyan-400 transition-colors">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Clock className="w-6 h-6 mr-2 text-cyan-400" />
              Contact & Hours
            </h3>
            <div className="space-y-4 text-blue-200">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-cyan-400 mt-1" />
                <p className="text-sm">123 Health Street, Dhaka 1207, Bangladesh</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-cyan-400" />
                <p className="text-sm">+880 1234-567890</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-cyan-400" />
                <p className="text-sm">info@healtrackhospital.com</p>
              </div>
              <div className="pt-4">
                <p className="text-cyan-400 font-medium">24/7 Emergency Service</p>
                <p className="text-xs text-blue-300 mt-1">OPD: 8:00 AM - 10:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-blue-800 flex flex-col md:flex-row justify-between items-center text-sm text-blue-300">
          <p>© {currentYear} HealTrack Hospital. All rights reserved.</p>
          <p className="mt-4 md:mt-0">
            Made with <span className="text-red-500">❤</span> for better healthcare
          </p>
        </div>
      </div>
    </footer>
  );
}
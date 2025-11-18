// "use client";

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, EffectFade } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/effect-fade';
// import Link from 'next/link';
// import Image from 'next/image';
// import { Phone, ArrowRight, Heart, Activity } from 'lucide-react';

// export default function Hero() {
//   const slides = [
//     {
//       title: "Welcome to HealTrack Hospital",
//       subtitle: "Advanced Healthcare You Can Trust",
//       desc: "Experience world-class treatment with cutting-edge technology and compassionate care from Bangladesh's leading medical experts.",
//       image: "https://i.postimg.cc/1t68W08N/Adobe-Stock-103968342.jpg",
//       alt: "Professional doctor at HealTrack Hospital",
//     },
//     {
//       title: "24/7 Emergency Service",
//       subtitle: "We're Here When You Need Us Most",
//       desc: "Immediate care with modern ICU, expert doctors, and fully equipped emergency department — available 24 hours a day.",
//       image: "https://i.postimg.cc/nr3Tztnb/premium-photo-1664475450083-5c9eef17a191.jpg",
//       alt: "Emergency care team in action",
//       emergency: true,
//     },
//     {
//       title: "Expert Doctors & Modern Facilities",
//       subtitle: "Healing with Care & Precision",
//       desc: "Over 50+ specialist doctors, advanced diagnostic labs, and patient-first approach for the best outcomes.",
//       image: "https://i.postimg.cc/dQN8L68K/wysiwyg-uploads-1569586526901-doctor.jpg",
//       alt: "Modern hospital facility",
//     },
//   ];

//   return (
//     <section className="relative min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
//       <Swiper
//         modules={[Autoplay, EffectFade]}
//         spaceBetween={0}
//         slidesPerView={1}
//         loop={true}
//         autoplay={{ delay: 5500, disableOnInteraction: false }}
//         effect="fade"
//         speed={1400}
//         className="h-screen"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div className="h-full">
//               <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center h-full py-16 lg:py-0">

//                   {/* Left Side - Image */}
//                   <div className="order-2 lg:order-1 flex justify-center lg:justify-end">
//                     <div className="relative group">
//                       <div className="relative overflow-hidden rounded-3xl shadow-2xl">
//                         <Image
//                           src={slide.image}
//                           alt={slide.alt}
//                           width={700}
//                           height={800}
//                           className="object-cover w-full h-[450px] sm:h-[550px] lg:h-[700px] rounded-3xl transform group-hover:scale-105 transition-transform duration-700"
//                           priority={index === 0}
//                           placeholder="blur"
//                           blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNMQzhD6XPb8o66AtPYMh1i2wW6wW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6rW6r"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-3xl" />
//                         {slide.emergency && (
//                           <div className="absolute top-6 left-6 bg-red-600 text-white px-6 py-3 rounded-full font-bold animate-pulse shadow-2xl text-sm sm:text-base">
//                             24/7 Emergency
//                           </div>
//                         )}
//                       </div>
//                       <div className="absolute -top-8 -right-8 w-40 h-40 bg-cyan-500/30 rounded-full blur-3xl animate-pulse" />
//                       <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-blue-600/30 rounded-full blur-3xl animate-pulse delay-700" />
//                     </div>
//                   </div>

//                   {/* Right Side - Text */}
//                   <div className="order-1 lg:order-2 text-center lg:text-left space-y-6 lg:space-y-8">
//                     {slide.emergency && (
//                       <span className="inline-block px-5 py-2 bg-red-100 text-red-700 font-bold rounded-full text-sm mb-4 animate-bounce">
//                         Available 24/7
//                       </span>
//                     )}
//                     <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
//                       {slide.title}
//                     </h1>
//                     <p className="text-2xl sm:text-3xl text-blue-700 font-semibold">
//                       {slide.subtitle}
//                     </p>
//                     <p className="text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
//                       {slide.desc}
//                     </p>

//                     <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
//                       <Link
//                         href="/appointment"
//                         className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
//                       >
//                         Book Appointment
//                         <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
//                       </Link>
//                       <a
//                         href="tel:+8801234567890"
//                         className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
//                       >
//                         <Phone className="mr-3" size={24} />
//                         Call Now: +880 1234-567890
//                       </a>
//                     </div>

//                     <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8 text-gray-700">
//                       <div className="flex items-center gap-3">
//                         <Heart className="w-8 h-8 text-red-500" />
//                         <span className="font-medium">10,000+ Happy Patients</span>
//                       </div>
//                       <div className="flex items-center gap-3">
//                         <Activity className="w-8 h-8 text-green-500" />
//                         <span className="font-medium">50+ Expert Doctors</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Mobile Emergency Button */}
//       <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 lg:hidden">
//         <a
//           href="tel:+8801234567890"
//           className="flex items-center gap-3 px-8 py-5 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-full shadow-2xl animate-pulse"
//         >
//           <Phone size={28} />
//           Emergency Call
//         </a>
//       </div>
//     </section>
//   );
// }
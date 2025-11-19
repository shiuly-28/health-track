// // app/components/TwoSeparateMarquee.jsx
// "use client";

// export default function ScrollingMarquee() {
//   return (
//     <>
//       {/* লাইন ১ – বাম থেকে ডানে (উপরে) */}
//       <div className="bg-gradient-to-r from-red-600 to-pink-600 py-4 overflow-hidden border-b-4 border-white/30">
//         <div className="flex animate-leftToRight whitespace-nowrap">
//           {/* কনটেন্ট */}
//           <div className="flex items-center gap-12 md:gap-20 px-4">
//             <span className="text-white text-lg md:text-2xl font-bold tracking-wider">
//               24/7 EMERGENCY SERVICE AVAILABLE
//             </span>
//             <span className="text-yellow-300 text-base md:text-xl font-semibold">
//               CALL NOW: +880 1711-223344
//             </span>
//             <span className="text-white text-lg md:text-2xl font-bold">
//               FREE HEALTH CAMP – 25 DEC
//             </span>
//             <span className="text-cyan-300 text-base md:text-xl font-semibold">
//               50+ SPECIALIST DOCTORS
//             </span>
//             <span className="text-white text-lg md:text-2xl font-bold">
//               GET 30% OFF ON ONLINE BOOKING
//             </span>
//           </div>
//           {/* ডুপ্লিকেট – লুপের জন্য */}
//           <div className="flex items-center gap-12 md:gap-20 px-4">
//             <span className="text-white text-lg md:text-2xl font-bold tracking-wider">
//               24/7 EMERGENCY SERVICE AVAILABLE
//             </span>
//             <span className="text-yellow-300 text-base md:text-xl font-semibold">
//               CALL NOW: +880 1711-223344
//             </span>
//             <span className="text-white text-lg md:text-2xl font-bold">
//               FREE HEALTH CAMP – 25 DEC
//             </span>
//             <span className="text-cyan-300 text-base md:text-xl font-semibold">
//               50+ SPECIALIST DOCTORS
//             </span>
//             <span className="text-white text-lg md:text-2xl font-bold">
//               GET 30% OFF ON ONLINE BOOKING
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* লাইন ২ – ডান থেকে বামে (নিচে) */}
//       <div className="bg-gradient-to-r from-pink-600 to-red-700 py-4 overflow-hidden mt-5">
//         <div className="flex animate-rightToLeft whitespace-nowrap">
//           {/* কনটেন্ট */}
//           <div className="flex items-center gap-12 md:gap-20 px-4">
//             <span className="text-white/90 text-base md:text-xl font-medium">
//               BOOK APPOINTMENT NOW
//             </span>
//             <span className="text-yellow-200 text-lg md:text-2xl font-bold">
//               1200+ HAPPY PATIENTS THIS MONTH
//             </span>
//             <span className="text-white/90 text-base md:text-xl font-medium">
//               24/7 AMBULANCE READY
//             </span>
//             <span className="text-cyan-200 text-lg md:text-2xl font-bold">
//               WORLD-CLASS TREATMENT
//             </span>
//             <span className="text-white/90 text-base md:text-xl font-medium">
//               YOUR HEALTH IS OUR PRIORITY
//             </span>
//           </div>
//           {/* ডুপ্লিকেট */}
//           <div className="flex items-center gap-12 md:gap-20 px-4">
//             <span className="text-white/90 text-base md:text-xl font-medium">
//               BOOK APPOINTMENT NOW
//             </span>
//             <span className="text-yellow-200 text-lg md:text-2xl font-bold">
//               1200+ HAPPY PATIENTS THIS MONTH
//             </span>
//             <span className="text-white/90 text-base md:text-xl font-medium">
//               24/7 AMBULANCE READY
//             </span>
//             <span className="text-cyan-200 text-lg md:text-2xl font-bold">
//               WORLD-CLASS TREATMENT
//             </span>
//             <span className="text-white/90 text-base md:text-xl font-medium">
//               YOUR HEALTH IS OUR PRIORITY
//             </span>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
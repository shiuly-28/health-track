// // app/components/SixCardGrid.jsx
// "use client";

// import { useState } from "react";
// import { Star, Search, Heart, ShoppingCart } from "lucide-react";

// const products = [
//   {
//     id: 1,
//     title: "Digital X-Ray Machine",
//     price: 2200.00,
//     oldPrice: 3000.00,
//     rating: 5,
//     badge: "NEW",
//     image: "https://i.postimg.cc/K8zvKKVw/SLH-25-P053-05-1024x769.jpg",
//     hoverImage: "https://i.postimg.cc/W15RkXr5/pngtree-medical-device-featuring-white-modern-technology-for-advanced-healthcare-equipment-and-png-i.png",
//   },
//   {
//     id: 2,
//     title: "Ultrasound Scanner Pro",
//     price: 1850.00,
//     rating: 5,
//     image: "https://i.postimg.cc/X7my9GGT/G03.jpg",
//     hoverImage: "https://i.postimg.cc/9FKJzfWn/hospital-medical-diagnostic-equipment-medical-devices-1253202-594.avif",
//   },
//   {
//     id: 3,
//     title: "Hospital Ventilator",
//     price: 3200.00,
//     oldPrice: 4200.00,
//     rating: 5,
//     image: "https://i.postimg.cc/V6MX3ZWL/hospital-ventilator-2020-VR0q-JV7-600.jpg",
//     hoverImage: "https://i.postimg.cc/Gm57RNGQ/Shockwave-Therapy-Machines-1.webp",
//   },
//   {
//     id: 4,
//     title: "CT Scan Machine",
//     price: 8900.00,
//     oldPrice: 12000.00,
//     rating: 5,
//     badge: "SALE",
//     image: "https://i.postimg.cc/Kvv50MYD/Medical-Equipment-Hospital-Clinic-Surgical-Operation-Room-Anestesia-Equipment-Anesthesia-Machine.avif",
//     hoverImage: "https://i.postimg.cc/X7my9GGT/G03.jpg",
//   },
//   {
//     id: 5,
//     title: "Dental Chair Premium",
//     price: 4500.00,
//     oldPrice: 6990.00,
//     rating: 4,
//     image: "https://i.postimg.cc/hGXY7gcZ/ct-scan-machine-992.jpg",
//     hoverImage: "https://i.postimg.cc/K8zvKKVw/SLH-25-P053-05-1024x769.jpg",
//   },

//   {
//     id: 6,
//     title: "Shockwave Therapy",
//     price: 3800.00,
//     rating: 5,
//     image: "https://i.postimg.cc/Gm57RNGQ/Shockwave-Therapy-Machines-1.webp",
//     hoverImage: "https://i.postimg.cc/sgZq0sZV/General-Medicine.jpg",
//   },
// ];

// function StarRating({ rating }) {
//   return (
//     <div className="flex justify-center gap-1">
//       {[...Array(5)].map((_, i) => (
//         <Star
//           key={i}
//           size={16}
//           className={i < rating ? "fill-blue-600 text-blue-600" : "text-gray-300"}
//         />
//       ))}
//     </div>
//   );
// }

// export default function SixCardGrid() {
//   const [hoveredId, setHoveredId] = useState(null);

//   return (
//     <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Title */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
//             Featured Medical Equipment
//           </h2>
//           <p className="mt-4 text-lg text-gray-600">
//             Advanced technology for modern healthcare
//           </p>
//         </div>

//         {/* 6 Cards - 3 per row on desktop */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-6 cursor-pointer overflow-hidden border border-gray-100"
//               onMouseEnter={() => setHoveredId(product.id)}
//               onMouseLeave={() => setHoveredId(null)}
//             >
//               {/* Badge */}
//               {product.badge && (
//                 <div className={`absolute top-6 left-6 z-30 px-5 py-2 rounded-full text-sm font-bold text-white shadow-xl ${
//                   product.badge === "NEW" ? "bg-black" : "bg-red-600"
//                 }`}>
//                   {product.badge}
//                 </div>
//               )}

//               {/* Image with Animation */}
//               <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden">
//                 <img
//                   src={hoveredId === product.id ? product.hoverImage : product.image}
//                   alt={product.title}
//                   className={`w-full h-full object-cover transition-all duration-700 ${
//                     hoveredId === product.id ? "animate-zoomInDown" : ""
//                   } group-hover:scale-110`}
//                 />

//                 {/* Overlay Icons */}
//                 <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-6">
//                   <button className="p-2 bg-white rounded-full shadow-2xl hover:bg-cyan-600 transition">
//                     <Search size={20} className="text-gray-800" />
//                   </button>
//                   <button className="p-2 bg-white rounded-full shadow-2xl hover:bg-cyan-600 transition">
//                     <Heart size={20} className="text-red-600" />
//                   </button>
//                   <button className="p-2 bg-white rounded-full shadow-2xl hover:bg-cyan-600 transition">
//                     <ShoppingCart size={20} className="text-blue-600" />
//                   </button>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-8 text-center space-y-5">
//                 <StarRating rating={product.rating} />
//                 <h3 className="text-2xl font-bold text-gray-800">
//                   {product.title}
//                 </h3>
//                 <div className="flex items-center justify-center gap-4">
//                   <span className="text-4xl font-bold text-gray-900">
//                     ${product.price.toFixed(2)}
//                   </span>
//                   {product.oldPrice && (
//                     <span className="text-xl text-gray-500 line-through">
//                       ${product.oldPrice.toFixed(2)}
//                     </span>
//                   )}
//                 </div>
                
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
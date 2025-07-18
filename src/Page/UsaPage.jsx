// import React from "react";
// import BgImg from "../assets/HeroImg/Background.png";
// import MapImg from "../assets/HeroImg/map.png"; 
// import ReasonsToChooseUSA from "../components/Usa/ChooseUsa";

// const USAPage = () => {
//   return (
//     <div className="w-full min-h-screen bg-gray-100">
//       <div
//         className="w-full h-[300px] bg-cover bg-center flex items-center justify-center"
//         style={{ backgroundImage: `url(${BgImg})` }}
//       >
//         <h1 className="text-5xl font-bold text-white">USA</h1>
//       </div> 
//       <div className="w-full bg-gradient-to-b from-white to-gray-100 py-16 px-6 md:px-20">
//         <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl p-10">
//           <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
//             Why Choose USA?
//           </h2>
//           <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
//             <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
//               🎓 USA is home to many of the world’s top-ranked universities and colleges.
//             </li>
//             <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
//               📈 Cutting-edge research facilities and innovation-driven education.
//             </li>
//             <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
//               💰 Wide range of scholarships and assistantships available for international students.
//             </li>
//             <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
//               🎁 Opportunities for merit-based and need-based financial aid.
//             </li>
//             <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
//               🏫 Globally recognized institutions like Harvard, MIT, Stanford, and more.
//             </li>
//             <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
//               🏦 Robust job market with excellent career opportunities post-study.
//             </li>
//             <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
//               🏙️ High standard of living and access to world-class infrastructure.
//             </li>
//             <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
//               🕒 Option to work part-time (up to 20 hours/week) during academic sessions.
//             </li>
//             <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
//               📄 Optional Practical Training (OPT) and STEM extensions up to 3 years.
//             </li>
//             <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
//               🧑‍💼 Internship and Co-op programs with leading global companies.
//             </li>
//             <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
//               🌎 Diverse, multicultural society and inclusive campus environments.
//             </li>
//             <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
//               🏆 Long-term career growth and immigration pathways for skilled graduates.
//             </li>
//           </ul>
//         </div>
//       </div>

//       <div className="mt-12">
//         <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">🎯 Upcoming Intakes</h3>
//         <div className="flex flex-wrap justify-center gap-6">
//           {["January", "May", "September"].map((month) => (
//             <div
//               key={month}
//               className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium shadow-md hover:bg-blue-700 transition transform hover:scale-105"
//             >
//               {month}
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="w-full py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
//         <div className="max-w-5xl mx-auto text-center">
//           <h3 className="text-2xl font-bold text-gray-800 mb-6">📍 Explore USA</h3>
//           <div className="rounded-2xl overflow-hidden shadow-xl transition-transform hover:scale-105 duration-300 border border-gray-200">
//             <img
//               src={MapImg}
//               alt="USA Map"
//               className="w-full object-cover"
//             />
//           </div>
//           <p className="mt-4 text-gray-600 text-base">
//             The USA features dynamic student cities such as New York, Boston, Los Angeles, Chicago, and San Francisco.
//           </p>
//         </div>
//       </div>
//       <ReasonsToChooseUSA />
//     </div>
//   );
// };

// export default USAPage;

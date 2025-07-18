import React from "react";
import MapImg from "../assets/Country/dubaimap.jpg";
import ReasonsToChooseDubai from "../components/Dubai/ChooseDubai";
import DubaiHeader from "../components/Dubai/DubaiHeader";

const DubaiPage = () => {
  return (
    <div className="w-full text-center min-h-screen from-gray-100 to-gray-600">
      <DubaiHeader />
      <div className="w-full bg-gradient-to-b from-white to-gray-100 py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl p-10">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
            Why Choose Dubai?
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              🎓 Dubai hosts internationally accredited universities and
              colleges.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              🌍 A truly multicultural city with residents from over 200
              countries.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              🏙️ Safe, modern, and innovative urban environment.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              🏫 Wide range of courses and degrees across multiple disciplines.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              💼 Strong industry connections and career opportunities.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              ✈️ Strategic location with easy global travel connections.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              🏖️ High quality of life with luxury, leisure, and adventure
              options.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              🏦 Growing economy with a focus on innovation and
              entrepreneurship.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              🛠️ Internship and part-time job opportunities during studies.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              🧑‍🎓 Post-graduation work visas and career pathways.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              📈 Rapidly expanding sectors like technology, business, and
              tourism.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              🏆 Global events and exposure to international networks.
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          🎯 Upcoming Intakes
        </h3>
        <div className="flex mb-10 flex-wrap justify-center gap-6">
          {["January", "May", "September"].map((month) => (
            <div
              key={month}
              className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium shadow-md hover:bg-blue-700 transition transform hover:scale-105"
            >
              {month}
            </div>
          ))} 
        </div>
      </div>

      <div className="w-full   py-16 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            📍 Explore Dubai
          </h3>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <img
              src={MapImg}
              alt="Dubai Map"
              className="w-[500px] h-[500px] object-cover mx-auto"
            />
          </div>
          <p className="mt-4 py-4 text-gray-600 text-base">
            Dubai is a global hub for education, business, and tourism, offering
            students world-class opportunities in a vibrant, dynamic city.
          </p>
        </div>
      </div>

      <ReasonsToChooseDubai />
    </div>
  );
};

export default DubaiPage;

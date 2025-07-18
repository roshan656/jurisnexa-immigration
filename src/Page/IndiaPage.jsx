import React from "react";
import MapImg from "../assets/Country/indiamap.avif";
import ReasonsToChooseIndia from "../components/India/ChooseIndia";
import IndiaHeader from "../components/India/IndiaHeader";

export default function IndiaPage() {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <IndiaHeader />

      <div className="w-full bg-gradient-to-b from-white to-gray-100 py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl p-10">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
            Why Choose India?
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              🎓 India is home to prestigious institutions like IITs, IIMs, and
              AIIMS.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              📈 Rapidly growing economy with emerging global opportunities.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              💰 Affordable education and living costs compared to many
              countries.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              🎁 Wide range of scholarships available for international
              students.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              🏫 Strong emphasis on STEM (Science, Technology, Engineering,
              Mathematics) fields.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              🏦 Booming tech industry with companies like Infosys, TCS, Wipro.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              🏙️ Rich culture, heritage, and diverse lifestyles.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              🕒 Opportunities for internships and part-time jobs during study.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              📄 Strong alumni networks and global career support.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              🧑‍💼 Training and placement cells in universities to assist in
              employment.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              🌎 Experience India's vibrant festivals, cuisine, and
              multicultural environment.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              🏆 Opportunities in startups, research, innovation, and
              entrepreneurship.
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          🎯 Upcoming Intakes
        </h3>
        <div className="flex mb-10 flex-wrap justify-center gap-6">
          {["January", "July", "September"].map((month) => (
            <div
              key={month}
              className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium shadow-md hover:bg-blue-700 transition transform hover:scale-105"
            >
              {month}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full py-16 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            📍 Explore India
          </h3>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <img
              src={MapImg}
              alt="India Map"
              className="w-[500px] h-[600px] object-cover mx-auto"
            />
          </div>
          <p className="mt-4 py-4 text-gray-600 text-base">
            India boasts educational hubs like Delhi, Mumbai, Bangalore,
            Hyderabad, and Chennai.
          </p>
        </div>
      </div>

      <ReasonsToChooseIndia />
    </div>
  );
}

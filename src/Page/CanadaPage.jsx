import MapImg from "../assets/Country/canadamap.avif";
import CanadaHeader from "../components/Canada/CanadaHeader";
import ReasonsToChooseCanada from "../components/Canada/ChooseCanada";

const CanadaPage = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <CanadaHeader />
      <div className="w-full bg-gradient-to-b from-white to-gray-100 py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl p-10">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
            Why Choose Canada?
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              🎓 Canada is globally recognized for high-quality education and
              top-ranked universities.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              📈 High academic standards and excellent research opportunities.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              💰 Affordable education with various funding and scholarship
              options.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              🎁 Scholarships and grants offered by universities and government.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              🏫 Home to globally ranked institutions like University of
              Toronto, UBC, McGill, etc.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              🏦 Strong and growing economy with high employment prospects for
              graduates.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              🏙️ High standard of living and quality infrastructure.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              🕒 Work part-time (up to 20 hours/week) while studying.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              📄 Post Graduate Work Permit (PGWP) up to 3 years.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              🧑‍💼 Co-op programs and hands-on industry experience.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              🌎 Multicultural, inclusive, and safe environment for
              international students.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              🏆 Pathways to permanent residency for qualified graduates.
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          🎯 Upcoming Intakes
        </h3>
        <div className="flex  mb-10 flex-wrap justify-center gap-6">
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

      <div className="w-full py-16 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            📍 Explore Canada
          </h3>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <img
              src={MapImg}
              alt="Canada Map"
              className="w-[500px] h-[500px] object-cover mx-auto"
            />
          </div>
          <p className="mt-4 py-4 text-gray-600 text-base">
            Canada is home to vibrant student cities like Toronto, Vancouver,
            Montreal, Calgary, and Ottawa.
          </p>
        </div>
      </div>
      <ReasonsToChooseCanada />
    </div>
  );
};

export default CanadaPage;

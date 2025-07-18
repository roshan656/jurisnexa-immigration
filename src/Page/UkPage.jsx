import MapImg from "../assets/Country/ukmap.avif";
import ReasonsToChooseUK from "../components/UnitedKingdom/ChooseUk";
import UnitedHeader from "../components/UnitedKingdom/UnitedHeader";
const UkPage = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <UnitedHeader />

      <div className="w-full bg-gradient-to-b from-white to-gray-100 py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl p-10">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
            Why Choose the UK?
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              🎓 The UK is home to world-renowned universities like Oxford,
              Cambridge, and Imperial College.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              📚 Globally recognized degrees with high academic standards.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              💸 Scholarships and bursaries available from universities and the
              UK government.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              🎁 Chevening and Commonwealth scholarships for international
              students.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              🏛️ One-year Master’s programs save time and money.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              🌐 Multicultural society with students from over 180 countries.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              🕒 Work part-time up to 20 hours/week during studies.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              📄 Post Study Work (PSW) Visa: Stay and work in the UK for up to 2
              years after graduation.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              🧑‍💼 Career-focused education and internship opportunities.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              🚆 Well-connected cities with excellent public transport and
              travel options.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              🏆 Strong pathways to employment and PR (via Global Talent/Skilled
              Worker routes).
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              🌍 Safe and friendly student cities like London, Manchester,
              Edinburgh, and Birmingham.
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


      <div className="w-full py-16 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            📍 Explore the UK
          </h3>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <img
              src={MapImg}
              alt="Uk Map"
              className="w-[500px] h-[500px] object-cover mx-auto"
            />
          </div>
          <p className="mt-4 py-4 text-gray-600 text-base">
          The UK offers diverse study destinations including London,
          Manchester, Edinburgh, and Glasgow.
          </p>
        </div>
      </div>
      <ReasonsToChooseUK />
    </div>
  );
};

export default UkPage;

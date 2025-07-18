import MapImg from "../assets/HeroImg/map.png"; 
import ScholarshipHeader from "../components/Scholarship/ScholarshipHeader";
import ContactUs from '../components/Home/ContactUs';
const Scholarship = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100">     
      <ScholarshipHeader />
      <div className="w-full bg-gradient-to-b from-white to-gray-100 py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl p-10">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
            Why Apply for Scholarships?
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              🎓 Reduce the burden of tuition fees and living expenses.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              💰 Get financial aid based on merit, need, or both.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              🌐 Available for undergraduate, graduate, and doctoral programs globally.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              📈 Boosts your resume and academic profile.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              🏅 Recognizes your academic excellence or special talents.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              🧾 Many scholarships don’t require repayment.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              🌎 International students can also access a wide variety of scholarships.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              📝 Simple online application process in most cases.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              🕒 Apply early to increase your chances of receiving aid.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              📅 Offered by universities, governments, and private organizations.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              👩‍🎓 Encourages students from diverse backgrounds to pursue higher education.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              🚀 Helps you focus on studies without financial stress.
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">📅 Common Scholarship Deadlines</h3>
        <div className="flex mb-10 flex-wrap justify-center gap-6">
          {["January", "April", "September"].map((month) => (
            <div
              key={month}
              className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium shadow-md hover:bg-blue-700 transition transform hover:scale-105"
            >
              {month}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">🎯 Explore Opportunities</h3>
          <div className="rounded-2xl overflow-hidden shadow-xl transition-transform hover:scale-105 duration-300 border border-gray-200">
            <img
              src={MapImg}
              alt="Scholarship Visual"
              className="w-full object-cover"
            />
          </div>
          <p className="mt-4 text-gray-600 text-base">
            Discover various national and international scholarships that support your academic dreams.
          </p>
        </div>
      </div>
      <ContactUs />
    </div>
  );
};

export default Scholarship;

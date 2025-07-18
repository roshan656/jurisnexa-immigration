import { useState } from "react";

export default function EducationConsultantServices() {
  const [activeTab, setActiveTab] = useState("visa");

  return (
    <div className="bg-gray-50  py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-10">
          <button
            onClick={() => setActiveTab("visa")}
            className={`px-6 py-3 rounded-full text-sm font-semibold border-2 transition-all duration-300 ${
              activeTab === "visa"
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            🛂 Visa Assistance
          </button>

          <button
            onClick={() => setActiveTab("higher")}
            className={`px-6 py-3 rounded-full text-sm font-semibold border-2 transition-all duration-300 ${
              activeTab === "higher"
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            🎓 Higher Education
          </button>

          <button
            onClick={() => setActiveTab("professional")}
            className={`px-6 py-3 rounded-full text-sm font-semibold border-2 transition-all duration-300 ${
              activeTab === "professional"
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            📝 Professional Courses
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 text-gray-700 space-y-6 transition-all duration-300">
          {activeTab === "visa" && (
            <>
              <h2 className="text-2xl font-bold text-blue-500">Visa Assistance</h2>
              <p>
                Obtaining a visa is a crucial step in the study abroad process. Without a visa, students cannot depart to their destination. Most countries have
                stringent visa rules, and the process can be complex and time-consuming.
              </p>
              <p>
                Vinay Hari Education Consultant provides visa assistance to students who are planning to study abroad. Our counselors are trained and tested on
                the visa rules of different countries. We can help students with the entire visa application process, from gathering the required documents to
                preparing for the interview.
              </p>
              <p>
                We provide visa assistance to students who are planning to study in the following countries:
                <span className="block mt-2 font-semibold">
                  United Kingdom, United States, Canada, Europe, Asia, Australia, New Zealand, Turkey, Russia
                </span>
              </p>
              <p>
                We understand that the visa process can be stressful, and we are here to help make it as smooth as possible. We will work with you every step of the
                way to ensure that you have the best chance of obtaining a visa.
              </p>
              <p>
                Please note that we cannot guarantee the approval of a visa. However, we can guarantee that we will follow the process completely and provide you
                with the best possible assistance.
              </p>
            </>
          )}

          {activeTab === "higher" && (
            <>
              <h2 className="text-2xl font-bold text-blue-500">Higher Education</h2>
              <p>
                Vinay Hari Education Consultant is an educational consultancy that helps students gain academic admission to Bachelor's, Master's, and PhD
                programs in America, Canada, Australia, New Zealand, the United Kingdom, Asia, and Europe.
              </p>
              <p>
                Studying abroad is a major life-changing decision for most students, and there are many important questions that require professional advice and
                assistance. At Ezone, we are available to help answer these questions and help our students make informed choices and achieve their dreams of
                studying abroad.
              </p>
            </>
          )}

          {activeTab === "professional" && (
            <>
              <h2 className="text-2xl font-bold text-blue-500">Professional Courses</h2>
              <p>
                In many countries, earning a degree is not the end of the educational journey. Students in certain fields, such as accounting, finance, engineering,
                law, medicine, dentistry, teaching, nursing, and marketing, are required to pass professional exams and gain experience in order to practice their
                professions. These exams are administered by professional associations, and upon passing, students become associates or fellows of the
                association and are allowed to use the association's initials after their names.
              </p>
              <p>
                Vinay Hari Education Consultant helps students register for these professional exams, track their progress, and facilitate the exams. We are
                committed to helping students achieve their professional goals.
              </p>
            </>
          )}
        </div>

      </div>
    </div>
  );
}

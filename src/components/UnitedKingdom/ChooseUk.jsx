import { useState } from "react";

export default function ReasonsToChooseUK() {
  const [expanded, setExpanded] = useState(null);

  const reasons = [
    {
      title: "World-class education",
      description: "UK universities, such as Oxford and Cambridge, are globally renowned for their academic excellence and research opportunities.",
    },
    {
      title: "Globally recognized qualifications",
      description: "Degrees and qualifications from UK institutions are highly respected by employers and academic institutions worldwide.",
    },
    {
      title: "Shorter degree programs",
      description: "Undergraduate degrees in the UK typically take three years, and postgraduate degrees one year, saving time and money compared to other countries.",
    },
    {
      title: "Diverse study options",
      description: "The UK offers a wide range of courses, from traditional subjects to specialized programs, including vocational training and professional qualifications.",
    },
    {
      title: "Rich cultural heritage",
      description: "The UK is home to historic landmarks, vibrant cities, and a multicultural society, offering a unique cultural experience for students.",
    },
    {
      title: "Unique natural beauty",
      description: "From the rolling hills of the Cotswolds to the rugged Scottish Highlands, the UK boasts diverse and picturesque landscapes.",
    },
  ];

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto p-15 mt-10 mb-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        REASONS TO CHOOSE UNITED KINGDOM
      </h1>

      <p className="text-center mb-8 text-gray-700">
        The United Kingdom is a top destination for international students, known for its prestigious education system. With four of its universities consistently ranked among the world’s top 10, the UK offers unparalleled academic opportunities. Qualifications from UK institutions are recognized and valued globally by employers and universities alike.
      </p>

      <div className="space-y-4">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="border-l-4 border-red-500 pl-4 py-2 hover:bg-gray-50 transition-colors"
          >
            <div
              className="flex items-start cursor-pointer"
              onClick={() => toggleExpand(index)}
            >
              <div className="flex-shrink-0 mr-3 mt-1">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {reason.title}
                </h2>
                <p
                  className={`text-gray-700 mt-1 ${
                    expanded === index ? "" : "line-clamp-2"
                  }`}
                >
                  {reason.description}
                </p>
                {reason.description.length > 150 && (
                  <button
                    className="text-blue-500 text-sm mt-1 focus:outline-none"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleExpand(index);
                    }}
                  >
                    {expanded === index ? "Read less" : "Read more"}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center mt-8 text-gray-700 italic">
        If you are seeking a world-class education with globally recognized qualifications, the United Kingdom is an excellent choice. The country offers diverse academic programs, rich cultural experiences, and stunning natural landscapes.
      </p>
    </div>
  );
}
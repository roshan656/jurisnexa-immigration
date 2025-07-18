import { useState } from "react";

export default function ReasonsToChooseAustralia() {
  const [expanded, setExpanded] = useState(null);

  const reasons = [
    {
      title: "High-quality education ",
      description: "Australian universities are consistently ranked among the best in the world. ",
    },
    {
      title: "Accredited degrees ",
      description: "Degrees earned from Australian universities are recognized and respected by employers and schools around the globe. ",
    },
    {
      title: "Affordable living costs ",
      description: "Compared to the United States and the United Kingdom, living expenses and tuition costs in Australia are more affordable. ",
    },
    {
      title: "A variety of options ",
      description: "Students have a variety of options to choose from, including universities, vocational education, and English language training. ",
    },
    {
      title: "Beautiful country ",
      description: "Australia is a beautiful country with diverse landscapes, including stunning coastlines, expansive outback regions, and modern cities. ",
    },
    {
      title: "Beautiful couUnique wildlife ",
      description: "Australia is home to unique marsupials such as kangaroos, koalas, wombats, and quokkas.ntry: Australia is a beautiful country with diverse landscapes, including stunning coastlines, expansive outback regions, and modern cities. ",
    },
  ];

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto p-15  mt-10 mb-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        REASONS TO CHOOSE AUSTRALIA
      </h1>

      <p className="text-center mb-8 text-gray-700">
        Australia is a popular destination for international students, ranking
        third among English-speaking countries after the United States and the
        United Kingdom. The country’s educational system is highly regarded,
        with seven Australian universities ranked among the top 100 in the
        world. Degrees earned from Australian institutions are recognized and
        respected by employers and schools around the globe.
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
      If you are looking for a high-quality education at an affordable price, Australia is a great option. The country offers a variety of options to choose from, and it is home to beautiful landscapes and unique wildlife.
      </p>
    </div>
  );
}

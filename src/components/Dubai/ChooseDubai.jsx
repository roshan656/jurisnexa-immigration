import { useState } from "react";

export default function ReasonsToChooseDubai() {
  const [expanded, setExpanded] = useState(null);

  const reasons = [
    {
      title: "World-class education",
      description: "Dubai offers a growing number of internationally accredited universities and institutions, providing students with high-quality education across diverse fields.",
    },
    {
      title: "Global recognition",
      description: "Degrees earned in Dubai are widely recognized and respected by employers and academic institutions around the world.",
    },
    {
      title: "Multicultural environment",
      description: "Dubai is a melting pot of cultures, with residents from over 200 nationalities, offering students a truly global experience.",
    },
    {
      title: "Safe and modern city",
      description: "Dubai is known for its low crime rate, excellent infrastructure, and modern amenities, ensuring a safe and comfortable living environment for students.",
    },
    {
      title: "Strategic location",
      description: "Located at the crossroads of Europe, Asia, and Africa, Dubai offers easy access to major global destinations, making travel convenient for students.",
    },
    {
      title: "Vibrant lifestyle and innovation",
      description: "From iconic landmarks like the Burj Khalifa to cutting-edge innovation hubs, Dubai offers an exciting and dynamic lifestyle filled with opportunities.",
    },
  ];

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto p-15 mt-10 mb-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        REASONS TO CHOOSE DUBAI
      </h1>

      <p className="text-center mb-8 text-gray-700">
        Dubai has rapidly become a top destination for international students seeking a unique educational experience. 
        With world-class universities, a vibrant multicultural environment, and a reputation for innovation, 
        Dubai offers unparalleled opportunities for academic and personal growth.
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
        If you are looking for a high-quality education in a safe, vibrant, and globally connected city, Dubai is an excellent choice. 
        With a multicultural atmosphere, strategic location, and cutting-edge opportunities, Dubai opens doors to a bright future.
      </p>
    </div>
  );
}

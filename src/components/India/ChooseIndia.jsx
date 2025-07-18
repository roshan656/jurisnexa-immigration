import { useState } from 'react';

export default function ReasonsToChooseIndia() {
  const [expanded, setExpanded] = useState(null);
  
  const reasons = [
    {
      title: "World-Class Education",
      description: "India is home to renowned institutions like the IITs, IIMs, and AIIMS, offering high-quality education in diverse fields such as engineering, management, medicine, and humanities."
    },
    {
      title: "Affordable Tuition and Living Costs",
      description: "Compared to many Western countries, the cost of studying and living in India is significantly lower, making it a highly affordable destination for international students."
    },
    {
      title: "Cultural Diversity",
      description: "India’s vibrant cultural heritage, with its festivals, traditions, and diverse communities, offers students a unique intercultural experience that enriches both personal and academic life."
    },
    {
      title: "Strong Academic Programs in English",
      description: "Many universities in India offer programs taught entirely in English, making it accessible for international students and easing the transition into a new academic environment."
    },
    {
      title: "Emerging Global Economy",
      description: "India's rapidly growing economy presents students with ample opportunities for internships, research collaborations, and future career growth across various sectors."
    },
    {
      title: "Innovation and Research Opportunities",
      description: "With significant government and private sector investment in research and technology, India offers budding researchers a chance to work on cutting-edge projects and innovations."
    },
    {
      title: "Rich Historical and Natural Attractions",
      description: "From ancient monuments like the Taj Mahal to breathtaking natural landscapes, India provides students with countless opportunities to explore and experience history and nature."
    },
    {
      title: "Warm and Welcoming Environment",
      description: "Known for its hospitality, India offers a welcoming environment for international students, ensuring a comfortable and enriching stay throughout their academic journey."
    }
  ];

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto p-15 mt-10 mb-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">REASONS TO CHOOSE INDIA</h1>
      
      <p className="text-center mb-8 text-gray-700">
        India is an increasingly popular destination for international students. 
        Here are some top reasons why choosing to study in India can be a rewarding experience:
      </p>

      <div className="space-y-4">
        {reasons.map((reason, index) => (
          <div key={index} className="border-l-4 border-red-500 pl-4 py-2 hover:bg-gray-50 transition-colors">
            <div 
              className="flex items-start cursor-pointer"
              onClick={() => toggleExpand(index)}
            >
              <div className="flex-shrink-0 mr-3 mt-1">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-800">{reason.title}</h2>
                <p className={`text-gray-700 mt-1 ${expanded === index ? '' : 'line-clamp-2'}`}>
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
                    {expanded === index ? 'Read less' : 'Read more'}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center mt-8 text-gray-700 italic">
        If you are looking for a high-quality education combined with cultural richness and affordable costs, India is an excellent choice for your academic journey.
      </p>
    </div>
  );
}

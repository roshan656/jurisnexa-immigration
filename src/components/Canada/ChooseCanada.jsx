import { useState } from 'react';

export default function ReasonsToChooseCanada() {
  const [expanded, setExpanded] = useState(null);
  
  const reasons = [
    {
      title: "High-quality education",
      description: "Canadian universities are known for their high-quality education. They are ranked among the best in the world, and their graduates are highly sought-after by employers."
    },
    {
      title: "Affordable tuition",
      description: "Tuition fees in Canada are generally lower than in other popular study destinations, such as the United States and the United Kingdom. This makes Canada an affordable option for many students."
    },
    {
      title: "Diversity",
      description: " Canada is a diverse country, and its universities reflect this diversity. Students from all over the world come to Canada to study, and they have the opportunity to learn about different cultures and perspectives."
    },
    {
      title: "Safety",
      description: "Canada is a safe country, and its universities are no exception. Students can feel safe and secure on campus and in the surrounding community."
    },
    {
      title: "Work opportunities",
      description: " International students in Canada are allowed to work part-time while they are studying. This gives them the opportunity to gain valuable work experience and earn money to help support their studies"
    },
    {
      title: "Post-graduation work permit program",
      description: "After completing their studies, international students in Canada are eligible to apply for a post-graduation work permit. This permit allows them to work in Canada for up to three years. This is a great way to gain Canadian work experience and improve their chances of getting a permanent job in Canada."
    },
    {
      title: "Vibrant campus life",
      description: "Canadian campuses are vibrant and active places. There are always events, festivals, and activities happening on campus. This provides students with the opportunity to get involved and make friends."
    }
    
  ];

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto p-15  mt-10 mb-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">REASONS TO CHOOSE CANADA</h1>
      
      <p className="text-center mb-8 text-gray-700">
      Canada is a popular destination for international students for a number of reasons.
      Here are some of the top reasons why students choose to study in Canada:
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
    </div>
  );
}
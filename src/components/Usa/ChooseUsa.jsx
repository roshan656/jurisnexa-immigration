import { useState } from 'react';

export default function ReasonsToChooseUSA() {
  const [expanded, setExpanded] = useState(null);
  
  const reasons = [
    {
      title: "Prestigious Universities",
      description: "The United States is home to some of the most prestigious and top-ranked universities in the world, making it an attractive destination for international students. In addition to its academic excellence, the United States also offers a rich tapestry of diversity and variety, both in terms of its people and educational opportunities."
    },
    {
      title: "English Language Immersion",
      description: "One of the biggest advantages of studying in the United States is the opportunity to enhance English language proficiency. The United States is the world's largest English-speaking country, and students who study here will have the chance to immerse themselves in the language and culture. This can be a valuable asset for students who are looking to advance their careers in an English-speaking environment."
    },
    {
      title: "Intercultural Experience",
      description: "In addition to the language benefits, studying in the United States can also provide students with valuable intercultural experience. The United States is a melting pot of cultures, and students will have the opportunity to meet people from all over the world. This can help students to develop a better understanding of different cultures and perspectives, which can be a valuable asset in the globalized workplace."
    },
    {
      title: "Variety of Degree Programs",
      description: "The United States also offers a wide range of degree programs to choose from. Students can find programs in a variety of fields, from business and engineering to the arts and humanities. This diversity of programs allows students to find a program that is a good fit for their interests and career goals."
    },
    {
      title: "Community College Options",
      description: "In addition to universities, the United States also has a number of community colleges. Community colleges offer two-year associate degrees and certificates, and they can be a good option for students who are looking for a more affordable option or who want to transfer to a four-year university after completing their associate degree."
    },
    {
      title: "Small Class Sizes",
      description: "Small class sizes are another common feature of American universities. This allows students to receive more personalized attention from their professors and to get involved in more hands-on learning experiences."
    },
    {
      title: "Campus Experience",
      description: "Finally, living on or near campus can provide students with the opportunity to fully immerse themselves in the college experience. This can include participating in extracurricular activities, joining clubs and organizations, and making new friends."
    },
    {
      title: "Overall Benefits",
      description: "Overall, the United States offers a number of benefits for international students. The country's excellent universities, diverse population, and wide range of programs make it an attractive destination for students who are looking to advance their education and their careers."
    }
  ];

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto p-15  mt-10 mb-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">REASONS TO CHOOSE USA</h1>
      
      <p className="text-center mb-8 text-gray-700">
        USA is a popular destination for international students for a number of reasons. 
        Here are some of the top reasons why students choose to study in USA
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
        If you are looking for a high-quality education at an affordable price, Australia is a great option. 
        The country offers a variety of options to choose from, and it is home to beautiful landscapes and unique wildlife.
      </p>
    </div>
  );
}
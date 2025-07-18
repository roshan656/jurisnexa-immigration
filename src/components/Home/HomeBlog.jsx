import React from "react";
import Trudeaus from "../../assets/Blog/Trudeaus.jpeg";
import American from "../../assets/Blog/American.jpeg";
import Cultural from "../../assets/Blog/Cultural.jpeg";
import Exploiting from "../../assets/Blog/Exploiting.jpeg";
import Studying from "../../assets/Blog/Studying.jpeg";
import WantedAustralia from "../../assets/Blog//WantedAustralia.jpeg";

export default function HomeBlog() {
  const blogPosts = [
    {
      id: 1,
      category: "Study Visa",
      title: "Trudeau's Regime: Catalyst for Change or Setback for the Education Industry?",
      snippet: "Justin Trudeau's tenure as Canada's P...",
      image: Trudeaus,
      author: "Rohit Sethi",
      date: "February 5, 2023",
      readMoreLink: "#"
    },
    {
      id: 2,
      category: "Study Visa",
      title: "Is the American Dream Still Possible for Indian Students?",
      snippet: "As the clock ticks down to President-elect Donald...",
      image: American,
      author: "Rohit Sethi",
      date: "January 23, 2023",
      readMoreLink: "#"
    },
    {
      id: 3,
      category: "Study Visa",
      title: "Cultural Competence: A Must-Have Skill for Indian Students Studying Abroad",
      snippet: "What is one of the best ways to experience differ...",
      image: Cultural,
      author: "Rohit Sethi",
      date: "January 3, 2023",
      readMoreLink: "#"
    },
    {
      id: 4,
      category: "Study Visa",
      title: "Who's Exploiting Whom? The Canadian Visa Industry Under Scrutiny",
      snippet: "In the past two years, opportunistic operators ha...",
      image: Exploiting,
      author: "Rohit Sethi",
      date: "January 1, 2023",
      readMoreLink: "#"
    },
    {
      id: 5,
      category: "Study Visa",
      title: "How Studying Abroad Leads to Personal and Career Excellence",
      snippet: "It is said that life teaches us many things when...",
      image: Studying,
      author: "Rohit Sethi",
      date: "December 26, 2024",
      readMoreLink: "#"
    },
    {
      id: 6,
      category: "Study Visa",
      title: "MATES Wanted: Australia is Calling All Young Professionals",
      snippet: "In a world where talent is the most sought-after...",
      image: WantedAustralia,
      author: "Rohit Sethi",
      date: "December 24, 2024",
      readMoreLink: "#"
    }
  ];

  return (
    <div className="bg-white py-12">
      <div className=" container w-100% justify-center mx-auto ">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Our Blogs</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-0 md:px-4">
          {blogPosts.slice(0, 6).map((post) => (
            <div key={post.id} className="bg-white border border-gray-200 rounded overflow-hidden hover:shadow-md transition-shadow">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="text-blue-600 text-xs font-medium mb-2">{post.category}</div>
                <h3 className="text-gray-900 font-semibold text-sm mb-2">{post.title}</h3>
                <p className="text-gray-600 text-xs mb-3">{post.snippet}</p>
                <a href={post.readMoreLink} className="text-blue-600 text-xs font-medium">Read More</a>
                
                <div className="mt-3 pt-3 flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-xs text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 inline mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                      </svg>
                      {post.author}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 inline mr-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 9.75v7.5" />
                    </svg>
                    {post.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <button className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-2 rounded text-sm font-medium transition-colors">
            More Posts
          </button>
        </div>
      </div>
    </div>
  );
}
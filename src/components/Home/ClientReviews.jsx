import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Shilpa Kundal",
    source: "via google.com",
    rating: 4,
    content: "Great service and cooperative staff ... Vinay sir is also such a nice person who guides every needed person very nicely!!😊😊",
    googleIcon: true
  },
  {
    id: 2,
    name: "Deepika Sharma",
    source: "via google.com",
    rating: 4,
    content: "You have really very efficient and coopertive staff.......and the services provided by your staff were Really very appreciating",
    googleIcon: true
  },
  {
    id: 3,
    name: "Skylike Rajat",
    source: "via google.com",
    rating: 4,
    content: "I 'am vry satisfied 👍vry supporting and coorporating staff , 😊Vinay hari sir is one of the best nd gd consultant... provides to best solutions for queries....",
    googleIcon: true
  },
  {
    id: 4,
    name: "Alex Johnson",
    source: "via google.com",
    rating: 5,
    content: "Exceptional customer service. Always willing to go the extra mile to ensure client satisfaction and deliver beyond expectations.",
    googleIcon: true
  },
  {
    id: 5,
    name: "Priya Mehta",
    source: "via google.com",
    rating: 5,
    content: "Professional team with extensive knowledge. Helped me navigate complex issues with ease and found perfect solutions.",
    googleIcon: true
  },
  {
    id: 6,
    name: "Michael Wong",
    source: "via google.com",
    rating: 5,
    content: "Prompt responses to all my queries. The team is knowledgeable and provides tailored solutions for business needs.",
    googleIcon: true
  },
  {
    id: 7,
    name: "Ananya Patel",
    source: "via google.com",
    rating: 4,
    content: "Reliable service provider with consistent quality. Have been working with them for two years and never disappointed.",
    googleIcon: true
  },
  {
    id: 8,
    name: "David Miller",
    source: "via google.com",
    rating: 5,
    content: "Top-notch professional service! The consultation was thorough and the suggestions were extremely valuable for our business growth.",
    googleIcon: true
  },
  {
    id: 9,
    name: "Riya Sharma",
    source: "via google.com",
    rating: 4,
    content: "Great experience working with this team. They understand requirements quickly and provide practical solutions that work.",
    googleIcon: true
  },
  {
    id: 10,
    name: "James Wilson",
    source: "via google.com",
    rating: 5,
    content: "Excellent service and follow-up. The team is responsive and takes personal interest in client success. Highly recommended!",
    googleIcon: true
  },
  {
    id: 11,
    name: "Neha Gupta",
    source: "via google.com",
    rating: 5,
    content: "Outstanding support and guidance. The team goes above and beyond to ensure customer satisfaction. Will definitely continue working with them.",
    googleIcon: true
  },
  {
    id: 12,
    name: "Thomas Chen",
    source: "via google.com",
    rating: 4,
    content: "Reliable and efficient service. Clear communication throughout the process and excellent results. Thank you for your help!",
    googleIcon: true
  }
];

export default function ClientReviews() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleReviews, setVisibleReviews] = useState([]);
  const sliderRef = useRef(null);
  const reviewsPerPage = 3;
  const totalSlides = Math.ceil(reviews.length / reviewsPerPage);

  useEffect(() => {
    const startIdx = currentSlide * reviewsPerPage;
    const visibleItems = reviews.slice(startIdx, startIdx + reviewsPerPage);
    setVisibleReviews(visibleItems);
  }, [currentSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const GoogleLogo = () => (
    <div className="flex justify-center mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
      </svg>
    </div>
  );

  return (
    <div className="w-full bg-gray-200 py-12 px-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-4 bg-gradient-to-r from-white to-orange-300 rounded-bl-3xl transform translate-x-8 -translate-y-4 opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-orange-300 to-white rounded-tr-3xl transform -translate-x-4 translate-y-4 opacity-40"></div>
      
      <div className="container w-100% mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center py-4 mb-2">
            <span className="text-gray-500 mr-2 text-lg">Rated 4.9 Stars</span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star} 
                  size={24} 
                  fill="#FFB800" 
                  color="#FFB800" 
                />
              ))}
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 py-4 mb-8">Cleints Reviews</h2>
          

        </div>

        <div className="relative mt-12">
          <button 
            onClick={handlePrevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-20 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            aria-label="Previous reviews"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={handleNextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-20 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            aria-label="Next reviews"
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visibleReviews.map((review) => (
              <div 
                key={review.id}
                className="bg-white p-12 rounded-[25px] shadow-lg flex flex-col h-[400px] transform transition-all duration-300 hover:-translate-y-2"
              >
                {review.googleIcon && <GoogleLogo />}
                
                <p className="text-gray-600 text-center flex-grow mb-6">
                  {review.content}
                </p>
                
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={20} 
                      fill={i < review.rating ? "#FFB800" : "#F3F4F6"} 
                      color={i < review.rating ? "#FFB800" : "#E5E7EB"} 
                    />
                  ))}
                </div>
                
                <div className="text-center">
                  <h4 className="font-medium text-lg text-gray-800">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.source}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center gap-2 mt-10">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index ? "w-8 bg-gray-400" : "w-2 bg-gray-300"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
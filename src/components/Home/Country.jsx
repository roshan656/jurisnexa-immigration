import { useState, useEffect, useRef } from "react";
import Canada from "../../assets/Country/canada.jpg";
import India from "../../assets/Country/india.jpg";
import Dubai from "../../assets/Country/dubai.jpg";
import UnitedKingdom from "../../assets/Country/unitedkingdom.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const locations = [
  {
    id: 1,
    name: "Canada",
    image: Canada,
  },
  {
    id: 2,
    name: "India",
    image: India,
  },
  {
    id: 3,
    name: "Dubai",
    image: Dubai,
  },
  {
    id: 4,
    name: "United Kingdom",
    image: UnitedKingdom,
  },
];

export default function Country() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [autoScrollPaused, setAutoScrollPaused] = useState(false);
  const scrollContainerRef = useRef(null);
  const autoScrollTimerRef = useRef(null);
  
  const getNextScrollPosition = (currentPosition) => {
    const container = scrollContainerRef.current;
    if (!container) return 0;
    
    const cardWidth = container.offsetWidth / 3; 
    const maxScroll = container.scrollWidth - container.offsetWidth;
    
    let nextPosition = currentPosition + cardWidth;
        if (nextPosition > maxScroll) {
      nextPosition = 0;
    }
    
    return nextPosition;
  };
  
  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const cardWidth = container.offsetWidth / 3;
    let newPosition;
    
    if (direction === 'left') {
      newPosition = Math.max(scrollPosition - cardWidth, 0);
    } else {
      const maxScroll = container.scrollWidth - container.offsetWidth;
      newPosition = Math.min(scrollPosition + cardWidth, maxScroll);
      
      if (newPosition === scrollPosition && scrollPosition >= maxScroll - 10) {
        newPosition = 0;
      }
    }
    
    container.scrollTo({
      left: newPosition,
      behavior: 'smooth'
    });
    
    setScrollPosition(newPosition);
    
    setAutoScrollPaused(true);
    clearTimeout(autoScrollTimerRef.current);
    autoScrollTimerRef.current = setTimeout(() => {
      setAutoScrollPaused(false);
    }, 3000); 
  };

  useEffect(() => {
    if (autoScrollPaused) return;
    
    const interval = setInterval(() => {
      const nextPosition = getNextScrollPosition(scrollPosition);
      
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTo({
          left: nextPosition,
          behavior: 'smooth'
        });
        
        setScrollPosition(nextPosition);
      }
    }, 3000); 
    
    return () => clearInterval(interval);
  }, [scrollPosition, autoScrollPaused]);

  const handleScroll = (e) => {
    setScrollPosition(e.target.scrollLeft);
    
    setAutoScrollPaused(true);
    clearTimeout(autoScrollTimerRef.current);
    autoScrollTimerRef.current = setTimeout(() => {
      setAutoScrollPaused(false);
    }, 5000);
  };

  const canScrollLeft = scrollPosition > 0;
  const canScrollRight = scrollContainerRef.current 
    ? scrollPosition < scrollContainerRef.current.scrollWidth - scrollContainerRef.current.offsetWidth - 10
    : false;

  return (
    <div className="w-full bg-white py-12">
      <div className=" container w-100% mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900">Our Locations</h2>
          <p className="text-gray-600 mt-2 mx-auto max-w-3xl">
            Strategically positioned centers fostering global connections, reflecting accessibility, and embracing cultural diversity for seamless interactions and engagement.
          </p>
        </div>

        <div className="relative">
          <button 
            onClick={() => scroll('left')}
            className={`absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-opacity duration-300 ${
              canScrollLeft ? 'opacity-100' : 'opacity-0'
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>

          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory py-2 px-2"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none'
            }}
            onScroll={handleScroll}
          >
            {locations.map((location) => (
              <div 
                key={location.id}
                className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 snap-start px-2"
              >
                <div className="h-96 md:h-120 lg:h-144 relative overflow-hidden rounded-lg group">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                  <div className="absolute bottom-8 left-8">
                    <h3 className="text-white text-3xl font-bold">{location.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6 space-x-3">
            {locations.map((_, index) => {
              const containerWidth = scrollContainerRef.current?.offsetWidth || 0;
              const itemWidth = containerWidth / 3; ` `
              const currentIndex = Math.round(scrollPosition / itemWidth);
              const isActive = (index >= currentIndex && index < currentIndex + 3) || 
                              (currentIndex + 3 > locations.length && index < (currentIndex + 3) % locations.length);
              
              return (
                <button 
                  key={index}
                  onClick={() => {
                    const container = scrollContainerRef.current;
                    if (!container) return;
                    
                    const cardWidth = container.offsetWidth / 3;
                    const newPosition = index * cardWidth;
                    
                    container.scrollTo({
                      left: newPosition,
                      behavior: 'smooth'
                    });
                    
                    setScrollPosition(newPosition);
                    setAutoScrollPaused(true);
                    clearTimeout(autoScrollTimerRef.current);
                    autoScrollTimerRef.current = setTimeout(() => {
                      setAutoScrollPaused(false);
                    }, 5000);
                  }}
                  className="focus:outline-none"
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <div className={`h-1.5 rounded-full transition-all duration-300 ${
                    isActive ? "w-10 bg-blue-600" : "w-5 bg-gray-300 hover:bg-gray-400"
                  }`}></div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
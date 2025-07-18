import dubai from "../../assets/Services/dubai-img.jpg";
import canada from "../../assets/Services/canada-img.jpg";
import india from "../../assets/Services/india-img.jpg";
import unitedKingdom from "../../assets/Services/uk-img.jpg";

export default function VisaApplication() {
  const destinations = [
    {
      name: "Dubai",
      image: dubai,
      alt: "dubai"
    },
    {
      name: "Canada",
      image: canada,
      alt: "canada"
    },
    {
      name: "United Kingdom",
      image: unitedKingdom,
      alt: "united kingdom"
    },
    {
      name: "India",
      image: india,
      alt: "india"
    }
  ];

  return (
    <div className="w-full">
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white h-[400px] flex flex-col items-center justify-center relative">
        <p className="uppercase text-xs tracking-widest mb-2">Countries we offer support</p>
        <h1 className="text-4xl font-bold mb-4">Apply For Quick Visa</h1>

        <div className="flex items-center justify-center space-x-1">
          <div className="w-8 h-1 bg-white"></div>
          <div className="w-1 h-1 bg-white"></div>
          <div className="w-1 h-1 bg-white"></div>
          <div className="w-1 h-1 bg-white"></div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto -mt-40 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-md shadow-lg cursor-pointer group transition-all duration-300 hover:shadow-2xl"
              >
                <div className="relative">
                  <img 
                    src={destination.image}
                    alt={destination.alt}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <div className="absolute inset-0 flex items-end justify-center p-4">
                  <div className="text-center transform transition-all duration-500 group-hover:-translate-y-4">
                    <h3 className="text-3xl font-bold text-white mb-2 transition-all duration-300 group-hover:text-blue-300">
                      {destination.name}
                    </h3>                  
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
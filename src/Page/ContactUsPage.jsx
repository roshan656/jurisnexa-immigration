import India from "../assets/Country/india.jpg";
import Canada from "../assets/Country/canada.jpg";
import Dubai from "../assets/Country/dubai.jpg";
import ContactHeader from "../components/Contact/ContactHeader";
import ContactForm from "../components/Contact/ContactForm";

export default function ContactUsPage() {
  const countries = [
    { name: "India", image: India },
    { name: "Canada", image: Canada },
    { name: "Dubai", image: Dubai },
  ];

  return (
    <div className="w-full bg-white">
      <ContactHeader />
      
      <div className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white text-center">
        <p className="text-sm text-blue-600 uppercase py-4 mb-2">Locations</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Our Offices
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <div
              key={index}
              className="relative h-64 sm:h-72 md:h-80 bg-cover bg-center rounded-xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105"
              style={{ backgroundImage: `url(${country.image})` }}
            >
              <div className="absolute inset-0 bg-opacity-30 flex items-center justify-center">
                <h3 className="text-white text-2xl  font-semibold">{country.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ContactForm />
    </div>
  );
}

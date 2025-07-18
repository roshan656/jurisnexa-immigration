import MapAustralia from "../assets/Other/Australia.jpg";
import MapFrance from "../assets/Other/France.jpg";
import MapGermany from "../assets/Other/Germany.jpg";
import MapIndia from "../assets/Other/India.jpg";
import MapIreland from "../assets/Other/Ireland.jpg";
import MapItaly from "../assets/Other/Italy.jpg";
import MapJapan from "../assets/Other/Japan.jpg";
import MapKorea from "../assets/Other/Korea.jpg";
import MapSingapore from "../assets/Other/Singapore.jpg";
import OtherHeader from "../components/Other/OtherHeader";

const countries = [
  {
    name: "Australia",
    map: MapAustralia,
    description: "Australia has top cities like Sydney, Melbourne, Brisbane & more.",
    benefits: [
      "🎓 World-class education at prestigious universities.",
      "📈 High global university rankings.",
      "💰 Affordable tuition compared to UK/US.",
      "🎁 $200M AUD in scholarships for international students.",
      "🏫 7 out of top 100 universities.",
      "🧑‍💻 Internships and job-ready training programs.",
    ],
  },
  {
    name: "Germany",
    map: MapGermany,
    description: "Germany offers tuition-free education and top-notch technical universities.",
    benefits: [
      "🎓 Tuition-free or low-cost education.",
      "🏫 Strong engineering & tech programs.",
      "💼 Part-time work options for students.",
      "🎁 DAAD & other scholarship programs.",
      "🌍 Vibrant student cities like Berlin & Munich.",
    ],
  },
  {
    name: "India",
    map: MapIndia,
    description: "India has a diverse culture and strong education system across major cities.",
    benefits: [
      "🎓 Home to IITs, IIMs and other top institutions.",
      "💰 Affordable education and living costs.",
      "🌏 Global exposure with English instruction.",
      "💼 Internship and job opportunities in IT & Management.",
      "🎁 Government & private scholarships available.",
    ],
  },
  {
    name: "Ireland",
    map: MapIreland,
    description: "Ireland is known for its welcoming culture and top universities.",
    benefits: [
      "🎓 Leading in IT, pharma & finance education.",
      "📚 English-speaking country.",
      "💼 2-year post-study work visa.",
      "🎁 Government-funded scholarships.",
      "🏫 Campuses in cities like Dublin & Cork.",
    ],
  },
  {
    name: "Italy",
    map: MapItaly,
    description: "Italy combines rich heritage with high-quality, affordable education.",
    benefits: [
      "🎓 High-ranked universities & research institutions.",
      "💰 Low tuition and living costs.",
      "🎁 Scholarships from Italian government.",
      "🍕 Cultural richness and student lifestyle.",
      "🏛️ Programs in art, fashion, design, and engineering.",
    ],
  },
  {
    name: "Japan",
    map: MapJapan,
    description: "Japan blends innovation, tradition, and world-class education.",
    benefits: [
      "🎓 Top universities with global recognition.",
      "🧠 Research and innovation opportunities.",
      "💼 Work opportunities post study.",
      "🎁 MEXT and JASSO scholarships.",
      "🏮 Safe and clean cities with great public transport.",
    ],
  },
  {
    name: "Korea",
    map: MapKorea,
    description: "South Korea offers advanced education and a dynamic lifestyle.",
    benefits: [
      "🎓 Top universities like Seoul National, KAIST.",
      "📱 Tech-driven society & innovation.",
      "🎁 GKS & other scholarship programs.",
      "💼 Internships & job opportunities in major cities.",
      "🎮 Vibrant culture and entertainment industry.",
    ],
  },
  {
    name: "Singapore",
    map: MapSingapore,
    description: "Singapore is Asia’s education hub with top institutions and safety.",
    benefits: [
      "🎓 Renowned universities like NUS & NTU.",
      "🌏 Multicultural and student-friendly environment.",
      "💼 Global business hub with job prospects.",
      "🎁 Scholarships & grants for international students.",
      "🛡️ Clean, safe and efficient city infrastructure.",
    ],
  },
  {
    name: "France",
    map: MapFrance,
    description: "France offers great student lifestyle in Paris, Lyon, Toulouse and more.",
    benefits: [
      "🎓 Top-ranked universities and business schools.",
      "📈 Affordable tuition fees.",
      "🏛️ Rich culture and history.",
      "💼 Job opportunities in fashion, tech & more.",
      "🎁 Scholarships from Campus France.",
    ],
  },
];

export default function Other () {
  return (
    <div className="w-full bg-gray-100">
      <OtherHeader />
      <div className=" container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-20 py-12">
        {countries.map((country, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition hover:shadow-xl"
          >
            <img
              src={country.map}
              alt={`${country.name} Map`}
              className="w-full h-48 object-cover"
            />

            <div className="p-6 flex flex-col justify-between flex-1">
              <h2 className="text-2xl font-bold text-blue-800 mb-2 text-center">
                Study in {country.name}
              </h2>

              <p className="text-gray-600 mb-4 text-sm text-center">
                {country.description}
              </p>

              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Why Choose {country.name}?
                </h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                  {country.benefits.slice(0, 4).map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                  {country.benefits.length > 4 && (
                    <li className="text-blue-600">...and more</li>
                  )}
                </ul>
              </div>

              <div className="mb-2">
                <h3 className="text-md font-semibold text-gray-700 mb-2">
                  🎯 Upcoming Intakes
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["February", "July", "November"].map((month) => (
                    <div
                      key={month}
                      className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow"
                    >
                      {month}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}



import { Phone } from "lucide-react";
import Img from "../../assets/HeroImg/Background.png"; // <-- your image import
import { useEffect } from "react";

export default function EducationConsultant() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".fade-in-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="bg-gray-50 relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute bottom-0 w-full h-64 bg-gray-200 transform -skew-y-6 -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Left Content */}
          <div className="flex-1">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              Juris Nexa Immigration Education Consultant offers a range of
              services to help students study abroad.
            </h1>

            <p className="mb-6 text-gray-700">
              Our counselors match students with the best-fit careers and
              universities, colleges, or schools. We also help students improve
              their language skills and prepare for university admission. Once a
              student is admitted, we take care of all the logistics of getting
              them to their destination, including booking tickets, finding
              accommodation, and setting up insurance. We also provide mentors
              and guardians for students who are under age or whose parents are
              not comfortable sending them on their own.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">
              Here is a more detailed look at each of our services:
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-bold mb-2">Career counseling:</h3>
                <p className="text-gray-700">
                  Our counselors help students identify their interests and
                  goals, and then match them with the best-fit careers. We also
                  provide guidance on how to develop a strong resume and cover
                  letter, and how to prepare for job interviews.
                </p>
              </div>

              <div>
                <h3 className="font-bold mb-2">University placement:</h3>
                <p className="text-gray-700">
                  We have a wide network of contacts with universities,
                  colleges, and schools around the world. We use this network to
                  help students find the best-fit institutions for their needs
                  and goals. We also provide assistance with the application
                  process, including writing personal statements and letters of
                  recommendation.
                </p>
              </div>

              <div>
                <h3 className="font-bold mb-2">
                  University admission preparation:
                </h3>
                <p className="text-gray-700">
                  We help students prepare for university admission by providing
                  them with guidance on the application process, test
                  preparation, and financial aid. We also offer mock interviews
                  to help students practice their interviewing skills.
                </p>
              </div>
            </div>

            <p className="mt-8 mb-12 text-gray-700">
              We are committed to helping students achieve their academic and
              professional goals. We offer a comprehensive range of services to
              make the study abroad process as smooth and stress-free as
              possible.
            </p>

            <a
              href="tel:+917087107690"
              aria-label="Contact us"
              className="inline-flex items-center bg-white border border-gray-300 rounded-md px-6 py-3 text-gray-700 shadow-sm hover:text-white hover:bg-blue-500 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Contact us
            </a>
          </div>

          {/* Right Image Section */}
          <div className="flex-1 flex justify-center fade-in-on-scroll">
            <div className="relative py-10 w-full h-full">
              <img
                src={Img}
                alt="Background"
                className="w-full h-full max-h-[800px] object-cover rounded-md md:rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

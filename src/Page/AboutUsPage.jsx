import { Link } from "react-router-dom";
import Img from "../assets/About/aboutcompany.jpg";
import StudyAbroad from "../components/About/StudyAbroad";
import WorkingProcess from "../components/About/WorkingProcess";
import ImmigrationServices from "../components/About/ImmigrationServices";
import ContactUs from '../components/Home/ContactUs';
const AboutUsPage = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          About <span className="text-blue-600">Juris Nexa Immigration</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img
              src={Img}
              alt="Juris Nexa Immigration Office"
              className="rounded-xl  shadow-2xl max-w-full w-[90%] md:w-[80%] lg:w-[100%] object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              🌍 Redefining Excellence in Education and Immigration for Over a
              Decade
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              <span className="font-semibold">Juris Nexa Immigration</span> is a
              trusted name in global education and immigration. With a strong
              presence and experienced team, we specialize in helping
              individuals confidently pursue their international dreams.
              <br />
              <br />
              Our approach is built on transparency, honesty, and tailored
              support — guiding every student and professional through every
              stage of the journey.
            </p>

            <div className="mb-8">
              <h4 className="flex items-center text-xl font-semibold text-gray-800 mb-2">
                <img
                  src="https://ext.same-assets.com/3211605130/2647408390.png"
                  alt="Mission Icon"
                  className="w-7 h-7 mr-3"
                />
                Our Mission
              </h4>
              <p className="text-gray-600 leading-relaxed">
                To empower students to study at the world’s top institutions
                through expert guidance, personalized counseling, and a deep
                understanding of global education systems. We ensure a seamless
                transition from dream to destination.
              </p>
            </div>

            <div className="mb-8">
              <h4 className="flex items-center text-xl font-semibold text-gray-800 mb-2">
                <img
                  src="https://ext.same-assets.com/3211605130/2400812411.png"
                  alt="Vision Icon"
                  className="w-7 h-7 mr-3"
                />
                Vision of the Company
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Juris Nexa Immigration shall infuse a culture of values to
                support and partner international academic aspirations of
                students.
              </p>
            </div>

            <Link
              to="/about-us"
              className="inline-block mt-4 bg-blue-600 text-white mb-14 px-6 py-3 rounded-full font-medium text-lg hover:bg-blue-700 transition-all duration-200"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>

      <StudyAbroad />
      <WorkingProcess />
      <ImmigrationServices />
      <ContactUs />
    </div>
  );
};

export default AboutUsPage;

import { Link } from 'react-router-dom';
import Img from "../../assets/HeroImg/AboutUs.jpg";

const About = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-extrabold text-black">
          About Juris Nexa Immigration
        </h2>

        <div className="grid gap-8 md:grid-cols-2 items-stretch">
          <div className="flex items-center justify-center">
            <img
              src={Img}
              alt="Juris Nexa Immigration CEO"
              className="h-full max-h-[100%] w-full object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="mb-4 text-2xl font-bold text-ess-blue-900">
                Redefining Excellence in Education and Immigration For Over A Decade
              </h3>

              <p className="mb-6 text-gray-600">
                Juris Nexa Immigration is a leading name in the field of overseas education and immigration,
                known for delivering reliable and result-driven solutions. Our global presence and expert team
                enable us to support individuals in navigating the complexities of international education and
                visa processes with ease.
                <br /><br />
                We are committed to offering personalized guidance, honest advice, and end-to-end support to help
                students and professionals turn their international aspirations into reality.
              </p>

              <div className="mb-8">
                <h4 className="mb-3 flex items-center font-bold text-ess-blue-900">
                  <img
                    src="https://ext.same-assets.com/3211605130/2647408390.png"
                    alt="Mission icon"
                    className="mr-3 h-8 w-8"
                  />
                  OUR MISSION
                </h4>
                <p className="text-gray-600">
                  Our mission is to empower students to achieve their dreams of studying at top international
                  universities by providing expert guidance and comprehensive support. We are dedicated to helping
                  students overcome challenges in their academic journey through personalized counseling,
                  up-to-date information, and a deep understanding of global education systems.
                  <br /><br />
                  At Juris Nexa Immigration, we strive to be a trusted partner in every step of the student's journey
                  — from choosing the right course and university to navigating visa processes — ensuring a smooth and
                  successful transition to international education.
                </p>
              </div>

              <div className="mb-8">
                <h4 className="mb-3 flex items-center font-bold text-ess-blue-900">
                  <img
                    src="https://ext.same-assets.com/3211605130/2400812411.png"
                    alt="Vision icon"
                    className="mr-3 h-8 w-8"
                  />
                  VISION OF THE COMPANY
                </h4>
                <p className="text-gray-600">
                  Juris Nexa Immigration shall infuse a culture of values to support and partner international
                  academic aspirations of students.
                </p>
              </div>
            </div>

            <Link
              to="/about-us"
              className="mt-4 inline-block rounded bg-ess-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-ess-blue-700"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

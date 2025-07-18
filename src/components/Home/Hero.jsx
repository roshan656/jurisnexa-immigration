import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BgImg from "../../assets/HeroImg/BgImg.jpg";
import { motion } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "Find a New Life Overseas",
    description:
      "Eliminate the uncertainties in your study and settlement journey with expert guidance from leading study visa and immigration consultants.",
    btnText: "Get Your Visa Now!",
    btnLink: "#book-appointment",
    bgImage: BgImg,
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (slides.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 5000);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div
      className="relative h-[600px] md:h-[700px] w-full bg-cover bg-center transition-all duration-500"
      style={{ backgroundImage: `url(${slides[currentSlide].bgImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>

      <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-6">
        <motion.h1
          className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-10 drop-shadow-xl"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {slides[currentSlide].title}
        </motion.h1>

        <motion.p
          className="text-white text-lg md:text-xl max-w-2xl mb-8 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          {slides[currentSlide].description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <Link
            to={slides[currentSlide].btnLink}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          >
            {slides[currentSlide].btnText}
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

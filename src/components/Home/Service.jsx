import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Study from "../../assets/HeroImg/Studyimage.jpg";
import Settle from "../../assets/HeroImg/Settle.jpg";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  hover: { scale: 1.03 },
};

const servicesData = [
  {
    title: "Study",
    description: "Beyond Borders, Into Books: Get Ready for Your Study Visa!",
    image: Study,
    link: "/study",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7" />
      </svg>
    ),
  },
  {
    title: "Settle",
    description: "Beyond Residency, Into Identity: Your Citizenship Visa Story Begins!",
    image: Settle,
    link: "/settle",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
];

const ServiceCard = ({ title, description, image, link, icon }) => (
  <motion.div
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    whileHover="hover"
    viewport={{ once: true }}
    className="rounded-lg text-blue-800 p-6 sm:p-8 shadow-md bg-white w-full max-w-md mx-auto"
  >
    <div className="mb-6 flex items-center gap-6">
      <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-jurisnexa-blue-100 text-jurisnexa-blue-600">
        {icon}
      </div>
      <h3 className="text-xl sm:text-2xl font-bold text-blue-800">{title}</h3>
    </div>
    <p className="mb-4 text-black text-sm sm:text-base">{description}</p>
    <div className="mb-6">
      <img
        src={image}
        alt={title}
        className="h-40 sm:h-48 w-full rounded-lg object-cover"
      />
    </div>
    <div className="text-center">
      <Link
        to={link}
        className="inline-block rounded border-2 border-jurisnexa-blue-600 px-4 py-2 sm:px-6 font-medium text-jurisnexa-blue-600 transition-colors hover:bg-blue-800 hover:text-white"
      >
        Learn More
      </Link>
    </div>
  </motion.div>
);

const Services = () => {
  return (
    <div className="relative z-30 -mt-20 sm:-mt-32 lg:-mt-40 px-4 sm:px-6 lg:px-8 pb-12">

      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;

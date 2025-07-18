import { FaPassport, FaMoneyCheckAlt, FaUsers, FaRegIdCard } from "react-icons/fa";

export default function WorkingProcess() {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-blue-600 text-white rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between mb-16 shadow-lg">
          <div className="text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3">Start Your Visa Journey Today</h2>
            <p className="text-white/90 text-sm sm:text-base">
              Expert guidance for a seamless visa application process
            </p>
          </div>
          <button className="mt-6 sm:mt-0 bg-white text-blue-600 font-semibold py-2.5 px-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
            Get Started
          </button>
        </div>

        <div className="text-center py-4 mb-12">
          <h4 className="text-blue-600 font-semibold tracking-wider py-4 mb-3 text-sm uppercase">How It Works</h4>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
            4 Simple Steps to Secure Your Visa
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 py-4 text-center">
          <div className="flex flex-col items-center p-4">
            <div className="relative mb-6">
              <div className="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center absolute -top-2 -left-2 text-xs font-bold">
                1
              </div>
              <div className="bg-white shadow-xl rounded-full w-16 h-16 flex items-center justify-center text-blue-600 text-4xl">
                <FaPassport />
              </div>
            </div>
            <h3 className="font-bold text-base sm:text-lg mb-2">Select Your Visa Service</h3>
            <p className="text-gray-600 text-sm">
              Choose the visa type that best suits your travel needs
            </p>
          </div>

          <div className="flex flex-col items-center p-4">
            <div className="relative mb-6">
              <div className="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center absolute -top-2 -left-2 text-xs font-bold">
                2
              </div>
              <div className="bg-white shadow-xl rounded-full w-16 h-16 flex items-center justify-center text-blue-600 text-4xl">
                <FaMoneyCheckAlt />
              </div>
            </div>
            <h3 className="font-bold text-base sm:text-lg mb-2">Submit Documents & Payment</h3>
            <p className="text-gray-600 text-sm">
              Upload required documents and complete secure payment
            </p>
          </div>

          <div className="flex flex-col items-center p-4">
            <div className="relative mb-6">
              <div className="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center absolute -top-2 -left-2 text-xs font-bold">
                3
              </div>
              <div className="bg-white shadow-xl rounded-full w-16 h-16 flex items-center justify-center text-blue-600 text-4xl">
                <FaUsers />
              </div>
            </div>
            <h3 className="font-bold text-base sm:text-lg mb-2">Schedule a Consultation</h3>
            <p className="text-gray-600 text-sm">
              Book a meeting with our visa experts for guidance
            </p>
          </div>

          <div className="flex flex-col items-center p-4">
            <div className="relative mb-6">
              <div className="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center absolute -top-2 -left-2 text-xs font-bold">
                4
              </div>
              <div className="bg-white shadow-xl rounded-full w-16 h-16 flex items-center justify-center text-blue-600 text-4xl">
                <FaRegIdCard />
              </div>
            </div>
            <h3 className="font-bold text-base sm:text-lg mb-2">Receive Your Visa</h3>
            <p className="text-gray-600 text-sm">
              Get your approved visa delivered promptly
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
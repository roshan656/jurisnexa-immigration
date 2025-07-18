import React, { useState } from "react";
import { Phone, Mail, Send, ChevronDown } from "lucide-react";
import studyImg from "../../assets/HeroImg/Studyimage.jpg";

export default function ContactForm () {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    countryCode: "+91",
  });

  const [showDropdown, setShowDropdown] = useState(false);

  const countries = [
    { name: "India (भारत)", code: "+91", flag: "in" },
    { name: "Dubai (UAE)", code: "+971", flag: "ae" },
    { name: "United Kingdom", code: "+44", flag: "gb" },
    { name: "Canada", code: "+1", flag: "ca" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const selectCountry = (code) => {
    setFormData((prev) => ({ ...prev, countryCode: code }));
    setShowDropdown(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const getFlagElement = (flag) => {
    if (flag === "in") {
      return (
        <div className="h-4 w-6 rounded-sm overflow-hidden">
          <div className="h-1/3 bg-orange-500"></div>
          <div className="h-1/3 bg-white"></div>
          <div className="h-1/3 bg-green-500"></div>
        </div>
      );
    } else if (flag === "ae") {
      return (
        <div className="h-4 w-6 rounded-sm overflow-hidden bg-white relative">
          <div className="absolute left-0 top-0 w-1/4 h-full bg-green-600"></div>
          <div className="absolute left-1/4 top-0 w-1/4 h-full bg-white"></div>
          <div className="absolute left-2/4 top-0 w-1/4 h-full bg-black"></div>
          <div className="absolute left-3/4 top-0 w-1/4 h-full bg-red-600"></div>
        </div>
      );
    } else if (flag === "gb") {
      return (
        <div className="h-4 w-6 rounded-sm overflow-hidden bg-blue-600 relative">
          <div className="absolute w-full h-1 bg-white top-1/2 -mt-0.5"></div>
          <div className="absolute h-full w-1 bg-white left-1/2 -ml-0.5"></div>
          <div className="absolute w-full h-2 bg-red-600 top-1/2 -mt-1 z-10 opacity-80"></div>
          <div className="absolute h-full w-2 bg-red-600 left-1/2 -ml-1 z-10 opacity-80"></div>
        </div>
      );
    } else if (flag === "ca") {
      return (
        <div className="h-4 w-6 rounded-sm overflow-hidden bg-white relative">
          <div className="absolute left-0 top-0 w-1/4 h-full bg-red-600"></div>
          <div className="absolute right-0 top-0 w-1/4 h-full bg-red-600"></div>
          <div className="absolute left-1/4 top-0 w-1/2 h-full flex items-center justify-center">
            <div className="w-2 h-2 bg-red-600"></div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-indigo-50 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Get In Touch</h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-xl mx-auto">
            We're here to answer any questions you may have about our services.
            Reach out to us and we'll respond as soon as we can.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-2/5 relative">
            <img
              src={studyImg}
              alt="Study"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900 bg-opacity-70 text-white p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="mb-12 text-blue-100">
                  Fill up the form and our team will get back to you within 24 hours.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <Phone className="mr-4" size={24} />
                    <div>
                      <p className="font-medium">Call Us</p>
                      <a
                        href="tel:+917087107690"
                        className="text-blue-100 hover:text-white transition-colors"
                      >
                        +91 7087107690
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Mail className="mr-4" size={24} />
                    <div>
                      <p className="font-medium">Email Us</p>
                      <a
                        href="mailto:jurisnexaimmigrationservies@gmail.com"
                        className="text-blue-100 hover:text-white transition-colors text-sm"
                      >
                        jurisnexaimmigrationservies@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-3/5 p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Send us a message
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="text-gray-600 text-sm font-medium mb-1 block">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    required
                  />
                </div>
                <div className="relative">
                  <label className="text-gray-600 text-sm font-medium mb-1 block">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="text-gray-600 text-sm font-medium mb-1 block">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  required
                />
              </div>

              <div className="relative">
                <label className="text-gray-600 text-sm font-medium mb-1 block">
                  Phone Number
                </label>
                <div className="flex relative">
                  <button
                    type="button"
                    className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-l-lg px-3 py-3 hover:bg-gray-100 transition-colors min-w-24"
                    onClick={() => setShowDropdown(!showDropdown)}
                  >
                    <div className="flex items-center">
                      {countries.find((c) => c.code === formData.countryCode) &&
                        getFlagElement(
                          countries.find((c) => c.code === formData.countryCode).flag
                        )}
                      <span className="text-gray-700 ml-2">
                        {formData.countryCode}
                      </span>
                    </div>
                    <ChevronDown size={16} className="ml-2 text-gray-500" />
                  </button>
                  {showDropdown && (
                    <div className="absolute top-full left-0 mt-1 w-64 z-10 bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden">
                      {countries.map((country) => (
                        <div
                          key={country.code}
                          className="px-4 py-2 flex items-center hover:bg-gray-100 cursor-pointer"
                          onClick={() => selectCountry(country.code)}
                        >
                          {getFlagElement(country.flag)}
                          <span className="ml-2">{country.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-50 border-t border-b border-r border-gray-200 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <label className="text-gray-600 text-sm font-medium mb-1 block">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-semibold flex items-center justify-center transition-all"
              >
                <Send size={20} className="mr-2" /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

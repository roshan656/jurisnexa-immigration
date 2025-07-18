import { useState } from "react";
import Img from "../../assets/HeroImg/BgImg.jpg"; 

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    queryType: "",
    country: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your query. We will contact you soon!");
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      queryType: "",
      country: "",
      email: "",
    });
  };

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[800px] flex items-center justify-center" 
      style={{ backgroundImage: `url(${Img})` }} 
    >     

      <div className="relative bg-white shadow-lg rounded-xl p-8 md:p-12 max-w-2xl w-full">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Book Appointment</h2>
        <p className="text-gray-600 text-center mt-2 mb-6">
          Share your details and our team will contact you shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
              placeholder="First Name"
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
              placeholder="Last Name"
            />
          </div>

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Mobile Number"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              name="queryType"
              value={formData.queryType}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md bg-white focus:ring focus:ring-blue-300"
            >
              <option value="">--Choose Query Type--</option>
              <option value="Consultation">Consultation</option>
              <option value="Job Inquiry">Job Inquiry</option>
              <option value="Other">Other</option>
            </select>

            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md bg-white focus:ring focus:ring-blue-300"
            >
              <option value="">--Choose Country--</option>
              <option value="Canada">Canada</option>
              <option value="India">India</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Dubai">Dubai</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Email Address"
          />

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-blue-600 text-white font-bold rounded-md transition hover:bg-blue-700"
          >
            SEND QUERY
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;

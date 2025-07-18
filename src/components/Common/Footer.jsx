import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import Img from '../../assets/Logo/LOGO.jpg';

export default function Footer () {
  return (
    <footer className="text-sm text-gray-400">
      <div className="bg-gray-100 w-full">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-2 space-y-2 md:space-y-0">
    <address className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-4 not-italic text-center md:text-left">
      <a
        href="mailto:info@essglobal.com"
        className="flex items-center text-gray-700 hover:text-blue-800 transition"
      >
        <FiMail className="mr-2" />
        jurisnexaimmigrationservies@gmail.com
      </a>
      <span className="hidden md:inline-block text-gray-500">|</span>
      <p className="text-gray-700">
        Mon-Sat - 10.00AM to 5.00PM
      </p>
    </address>

    <div className="flex justify-center md:justify-end space-x-4">
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-600 text-gray-700 transition"
        aria-label="Facebook"
      >
        <FaFacebookF />
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-pink-600 text-gray-700 transition"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>
      <a
        href="https://in.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-700 text-gray-700 transition"
        aria-label="LinkedIn"
      >
        <FaLinkedinIn />
      </a>
      <a
        href="https://twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400 text-gray-700 transition"
        aria-label="Twitter"
      >
        <FaTwitter />
      </a>
      <a
        href="https://www.youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-red-600 text-gray-700 transition"
        aria-label="YouTube"
      >
        <FaYoutube />
      </a>
    </div>
  </div>
</div>


      <div className="bg-gray-900 py-12 text-white">
        <div className="container mx-auto grid gap-10 px-4 md:grid-cols-4">
          <div>
            <Link to="/">
              <img src={Img} alt="JurisNexa Logo" className="mb-4 h-16" />
            </Link>
            <p className="mb-4 text-sm text-gray-400">
              JurisNexa Immigration, the benchmark in overseas education and immigration, has been leading the way since 2013.
            </p>
            <h4 className="mb-3 text-sm font-bold uppercase">Follow Us</h4>
            <div className="flex space-x-3">
              {[
                { href: 'https://www.facebook.com', icon: <FaFacebookF />, bg: 'blue-600' },
                { href: 'https://www.instagram.com', icon: <FaInstagram />, bg: 'pink-600' },
                { href: 'https://in.linkedin.com', icon: <FaLinkedinIn />, bg: 'blue-700' },
                { href: 'https://twitter.com/', icon: <FaTwitter />, bg: 'blue-400' },
                { href: 'https://www.youtube.com/', icon: <FaYoutube />, bg: 'red-600' },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex h-8 w-8 items-center justify-center rounded-full border border-gray-600 text-sm hover:bg-${item.bg} hover:border-${item.bg}`}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold">Study</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {['Dubai', 'Canada', 'India', 'UK'].map((country, idx) => (
                <li key={idx} className="hover:text-blue-300 cursor-pointer">
                  {country}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Useful Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {['Cyprus', 'Cyprus EU', 'Greece', 'Current Openings'].map((link, idx) => (
                <li key={idx} className="hover:text-blue-300 cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-center md:justify-end">
            <img
              src={Img}
              alt="OPTAS Partner Logo"
              className="max-w-[150px]"
            />
          </div>
        </div>
      </div>

      <div className="bg-blue-900 py-3 text-center text-white">
        <div className="container mx-auto px-4">
          © 2025 JurisNexa Immigration Private Limited. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

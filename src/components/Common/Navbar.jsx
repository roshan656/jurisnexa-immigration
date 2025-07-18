import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import LogoImg from '../../assets/Logo/LOGO.jpg';

export default function Navbar () {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/dubai', label: 'Dubai' },
    { to: '/canada', label: 'Canada' },
    { to: '/united-kingdom', label: 'United Kingdom' },
    { to: '/india', label: 'India' },
    { to: '/scholarships', label: 'Scholarships' },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Contact Us' },
    { to: '/other', label: 'Others' },
  ];

  return (
    <>
      <div className="bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link to="/" className="flex items-center">
            <img src={LogoImg} alt="Logo" className="h-12" />
          </Link>
          <div className="hidden md:block">
            <div>
              <p className="text-lg font-bold text-blue-800">OFFICE ADDRESS:</p>
              <p className="text-xs text-gray-600">
                SCO 27, New Sunny Enclave, Sector-125, Mohali-140301
              </p>
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            <div>
              <p className="text-lg font-bold text-blue-800">Contact Us</p>
              <p className="text-lg text-ess-blue-900">+91 7087107690</p>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-2xl text-ess-blue-900 focus:outline-none"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:flex justify-center space-x-4 text-black text-sm font-medium tracking-wide">
        {menuItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`px-4 py-2 border border-transparent rounded-md transition-all duration-300
              ${location.pathname === item.to
                ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white'
                : 'hover:border-blue-600 hover:text-white hover:bg-gradient-to-r from-blue-500 to-blue-700'
              }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md z-50">
          <ul className="flex flex-col divide-y divide-ess-blue-800">
            {menuItems.slice(0, 9).map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`block px-4 py-3 transition
                    ${location.pathname === item.to
                      ? 'bg-ess-blue-800 text-white'
                      : 'text-gray-700 hover:bg-ess-blue-800 hover:text-white'
                    }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <li>
              <div className="block px-4 py-3 text-gray-700 bg-gray-50 font-semibold">Others</div>
              <ul className="ml-4">
                <li>
                  <Link
                    to="/france"
                    className={`block px-4 py-2 transition
                      ${location.pathname === '/france'
                        ? 'text-ess-blue-900 font-semibold'
                        : 'text-gray-600 hover:text-ess-blue-900'
                      }`}
                  >
                    France
                  </Link>
                </li>
                <li>
                  <Link
                    to="/germany"
                    className={`block px-4 py-2 transition
                      ${location.pathname === '/germany'
                        ? 'text-ess-blue-900 font-semibold'
                        : 'text-gray-600 hover:text-ess-blue-900'
                      }`}
                  >
                    Germany
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}

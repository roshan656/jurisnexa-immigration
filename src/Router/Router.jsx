import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Common/Navbar'; 
import Footer from '../components/Common/Footer';
import HomePage from '../Page/HomePage';

import CanadaPage from '../Page/CanadaPage';
import UkPage from '../Page/UkPage';
import CursorIcon from '../components/Common/CursorIcon';
import AboutUsPage from '../Page/AboutUsPage';
import Other from '../Page/Other';
import Scholarship from '../Page/Scholarship';
import ContactUsPage from '../Page/ContactUsPage';
import DubaiPage from '../Page/DubaiPage';
import IndiaPage from '../Page/IndiaPage';
import ServicesPage from '../Page/ServicesPage';




const RouterComponent = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} /> 
        <Route path="/dubai" element={<DubaiPage/>} />
        <Route path="/canada" element={<CanadaPage />} />
        <Route path="/united-kingdom" element={<UkPage/>}/>
        <Route path="/india" element={<IndiaPage />} />
        <Route path="/other" element={<Other />} />
        <Route path="/scholarships" element={<Scholarship />} />
        <Route path="/contact" element={<ContactUsPage />} /> 
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
      <Footer />
      <CursorIcon/>
    </Router>
  );
};

export default RouterComponent;

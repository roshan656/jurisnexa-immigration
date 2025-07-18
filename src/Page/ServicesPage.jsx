import ServicesHeader from '../components/Services/Servicesheader'
import EducationConsultant from '../components/Services/EducationConsultant'
import EducationConsultantServices from '../components/Services/EducationConsultantServices'
import VisaApplication from '../components/Services/VisaApplication'
import ContactUs from '../components/Home/ContactUs';
export default function ServicesPage () {
  return (
    <>
        <ServicesHeader />
        <EducationConsultant />
        <EducationConsultantServices />
        <VisaApplication/>
        <ContactUs />
    </>
  )
}
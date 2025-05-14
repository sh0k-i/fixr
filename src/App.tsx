import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import RequestQuote from './pages/RequestQuote';
import "preline/preline";
import { IStaticMethods } from "preline/preline";
import { useEffect, useState } from 'react';
import CookiePolicy from './pages/CookiePolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import "vanilla-cookieconsent/dist/cookieconsent.css";
import { central } from '@/lib/supabaseClient';
import { useAppContext } from '@/context/AppContext';
import DemoForm from './pages/DemoForm';
import ConfirmationForm from './pages/ConfirmationForm';
import ConfirmationSummary from './pages/ConfirmationSummary';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurServices from './pages/OurServices';
import Blog from './pages/Blog';
import servicesData from '@/assets/services.json'; // Import local JSON
import FilteredServices from './pages/FilteredServices';
import RehashThankYou from './pages/RehashThankYou';
import FaqPage from './pages/FaqPage';

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const companyId = 777777777;
  const { setContractor, setServices, contractor, services, form, user, selectedService, setCategories, selectedCategory, setFeatured, categories, featured } = useAppContext();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  useEffect(() => {
    const fetchInitialData = async () => {
      const storedContractor = localStorage.getItem('contractor');

      if (storedContractor ) {
        // Load from local storage
        setContractor(JSON.parse(storedContractor));
        setLoading(false);
      }

      // Fetch contractor
      console.log('Fetching contractor data...');
      try {
        const { data, error } = await central
          .from('contractors')
          .select('*')
          .eq('id', companyId)
          .single();

        if (error) {
          return;
        }
        if (data) {
          console.log('Contractor data fetched:', data);
          setContractor(data);
          localStorage.setItem('contractor', JSON.stringify(data));
        }
      } catch (err) {
        console.error('Unexpected error fetching data:', err);
        return;
      }
    };
    fetchInitialData();
  }, []);

  useEffect(() => {
    setCategories(servicesData.categories);
    setServices(servicesData.products);
  }, [servicesData]);

  // filter featured services
  useEffect(() => {
    const filtered = services?.filter((service: any) =>
      service.featured === true
    );

    setFeatured(filtered);
    console.log("Filtering Featured services:", filtered);
  }, [services]);

  useEffect(() => {
    console.log('contractor', contractor);
    console.log('services', services);
    console.log('form', form);
    console.log('user', user);
    console.log('selected service', selectedService);
    console.log('selected category', selectedCategory);
    console.log('categories', categories);
    console.log('featured', featured);
  }, [contractor, services, form, user, selectedService, selectedCategory, categories, featured]);

  // Set custom colors from contractor data
  useEffect(() => {
    if (contractor && contractor.colors) {
      const accentColor = contractor.colors.accent || '#FA5100'; 
      const light = contractor.colors.light || '#fff1eb';
      const dark = contractor.colors.dark || '#d84a05';
      const darker = contractor.colors.darker || '#ab3c06';
      document.documentElement.style.setProperty('--light', light);
      document.documentElement.style.setProperty('--accent', accentColor);
      document.documentElement.style.setProperty('--darker', darker);
      document.documentElement.style.setProperty('--dark', dark);
    }
  }, [contractor]);

  if (loading || !contractor || !services)  {
    return null; // Render nothing while loading
  }

  return (
    <>
      <Routes>
        {/* <Route path='/rehash-hp/:slug/' element={<RehashHomePride />} />
        <Route path='/rehash/:slug/' element={<RehashPage />} />
        <Route path='/rehash-summary/:slug/' element={<RehashThankYou />} /> */}

        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/services' element={<OurServices/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/filtered-services' element={<FilteredServices/>} />
        <Route path='/faqs' element={<FaqPage/>} />

        <Route path='/request-quotes/' element={<RequestQuote />} />
        <Route path='/cookie-policy/' element={<CookiePolicy />} />
        <Route path='/privacy-policy/' element={<PrivacyPolicy />} />
        <Route path='/summary/' element={<RehashThankYou />} />
        <Route path='/demo-form' element={<DemoForm />} />
        
        <Route path='/confirmation/' element={<ConfirmationForm />} />
        <Route path='/confirmation-summary/' element={<ConfirmationSummary />} />
        
        {/* <Route path="*" element={<RequestQuote />} /> */}
      </Routes>
    </>
  );
}

export default App;

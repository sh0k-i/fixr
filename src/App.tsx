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
import ThankYou from './pages/ThankYou';
import DemoForm from './pages/DemoForm';
import ConfirmationForm from './pages/ConfirmationForm';
import ConfirmationSummary from './pages/ConfirmationSummary';
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const companyId = 777777777;
  const { setContractor, setServices, setLocations, contractor, services, form, user, locations, selectedService } = useAppContext();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  useEffect(() => {
    const fetchInitialData = async () => {
      const storedContractor = localStorage.getItem('contractor');
      const storedServices = localStorage.getItem('services');
      const storedLocations = localStorage.getItem('locations');

      if (storedContractor && storedServices && storedLocations) {
        // Load from local storage
        setContractor(JSON.parse(storedContractor));
        setServices(JSON.parse(storedServices));
        setLocations(JSON.parse(storedLocations));
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

          // Fetch services
          const { data: servicesData, error: servicesError } = await central
          .from('contractor_services')
          .select('*, services(name, national_avg)')
          .eq('contractor_id', companyId);

          if (servicesError) {
            console.error('Error fetching services:', servicesError);
          } else {
            setServices(servicesData || []);
            localStorage.setItem('services', JSON.stringify(servicesData || []));
            console.log('Services fetched successfully');
          }
        }
      } catch (err) {
        console.error('Unexpected error fetching data:', err);
        return;
      }
    };
    fetchInitialData();
  }, []);

  useEffect(() => {
    console.log('contractor', contractor);
    console.log('services', services);
    console.log('form', form);
    console.log('user', user);
    console.log('selected service', selectedService);
  }, [contractor, services, locations, form, user, selectedService]);

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

  if (loading || !contractor || !services) {
    return null; // Render nothing while loading
  }

  return (
    <>
      <Routes>
        {/* <Route path='/rehash-hp/:slug/' element={<RehashHomePride />} />
        <Route path='/rehash/:slug/' element={<RehashPage />} />
        <Route path='/rehash-summary/:slug/' element={<RehashThankYou />} /> */}

        <Route path='/' element={<Home />} />
        <Route path='/request-quotes/' element={<RequestQuote />} />
        <Route path='/cookie-policy/' element={<CookiePolicy />} />
        <Route path='/privacy-policy/' element={<PrivacyPolicy />} />
        <Route path='/summary/' element={<ThankYou />} />
        <Route path='/demo-form' element={<DemoForm />} />
        
        <Route path='/confirmation/' element={<ConfirmationForm />} />
        <Route path='/confirmation-summary/' element={<ConfirmationSummary />} />
        
        {/* <Route path="*" element={<RequestQuote />} /> */}
      </Routes>
    </>
  );
}

export default App;

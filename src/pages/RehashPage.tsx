import { GalleryMarquee } from '@/components/GalleryMarquee'
import PriceComparisonChart from '@/components/PriceComparisonChart'
import { useAppContext } from '@/context/AppContext';
import useClearFormState from '@/hooks/useClearFormState.tsx';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';



const RehashPage = () => {
  const { contractor, form, setForm } = useAppContext();
  const clearFormState = useClearFormState();
  const navigate = useNavigate();
  const location = useLocation();
   const [slug, setSlug] = useState('');

  useEffect(() => {
    if (contractor) {
      setSlug(contractor.slug);
    }
  }, [contractor]);

  // Function to generate a random string
  const generateRandomString = (length: number): string => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  // Function to append current URL parameters
  const navigateWithParams = (path: string) => {
    const currentParams = new URLSearchParams(location.search);
    navigate(`${path}?${currentParams.toString()}`);
  };

  const handleButtonClick = () => {
    let formId = form.formId;

    // If formId is not set, create a new formId
    if (!formId) {
      clearFormState();

      const dateTime = new Date().toISOString().replace(/[-:.T]/g, '').slice(0, 14); // YYYYMMDDHHMMSS format
      const randomString = generateRandomString(6);

      formId = `${contractor.id}-${dateTime}-${randomString}`;
      console.log('Generated formId:', formId);
    } else {
      console.log('Using existing form ID:', formId);
    }

    // Update the form and user object in context
    setForm((prevForm) => ({
      ...prevForm,
      formId: formId,
    }));
    navigateWithParams(`/request-quotes/${slug}`);
  };

  if (!contractor) {
    return null; // or a loading spinner
  }
  return (
    <div className='min-h-screen p-4 bg-[#A6DA9E]'>
      <div className='min-h-screen grid grid-cols-1 md:grid-cols-2 gap-4'>

        {/* First column/row item */}
        <div className=' p-4 rounded-lg space-y-8 mt-4'>
          {/* logo */}
          <img src='https://project-starfish.s3.us-east-005.backblazeb2.com/logo/PJ+Logolight.png' alt="Contractor Logo" className='w-full h-auto mb-4' />
          <p className='section_header'>Maximize Your Investment With PJ Fitzpatrick</p>
          <button className='bg-[#FFE124] text-gray-800 font-semibold hover:bg-[#E1C934] text-lg border-transparent rounded-lg py-4 px-6 plausible-event-name=CTA_click plausible-event-position=hero' onClick={handleButtonClick} >Book Appointment</button>
          <PriceComparisonChart />
        </div>
        
        
        {/* Second column/row item */}
        <div className=' p-4 rounded-lg'>
          <GalleryMarquee />

        </div>
      </div>
    </div>
  )
}

export default RehashPage
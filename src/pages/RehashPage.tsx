import PriceComparisonChart from '@/components/PriceComparisonChart'
import { useAppContext } from '@/context/AppContext';
import useClearFormState from '@/hooks/useClearFormState.tsx';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ComparisonSlider } from '@/components/ComparisonSlider';
import NavBar2 from '@/components/NavBar2';
import Feature from '@/components/Feature';
import TestimonialsGray from '@/components/TestimonialsGray';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import BlurFade from '@/components/ui/blur-fade';
import SocialProof from '@/components/SocialProof';



const RehashPage = () => {
  const { contractor, form, setForm, services, setSelectedService, selectedService } = useAppContext();
  const clearFormState = useClearFormState();
  const navigate = useNavigate();
  const location = useLocation();
  const [slug, setSlug] = useState('');
  const params = new URLSearchParams(location.search);
  const serviceId = params.get('service');
  const socialProof: string[] = contractor.social_proof;

  const useInitialWebhook = () => {
    const location = useLocation();
  
    useEffect(() => {
      const params = new URLSearchParams(location.search);
      const userNs = params.get('user_ns');
  
      // Check if webhook has already been sent (using localStorage)
      if (userNs && !localStorage.getItem('rehashWebhookSent')) {
        const payload = {
          workspace_id: params.get('company_id'),
          user_ns: userNs,
          market: params.get('market'),
          event: "rehash_link_clicked",
          timestamp: new Date().toISOString(),
        };
  
        // Send to webhook
        fetch('https://hkdk.events/dd4ps4ew70am0n', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        })
        .then(() => {
          // Mark as sent in localStorage
          localStorage.setItem('rehashWebhookSent', 'true');
        })
        .catch((error) => console.error('Webhook error:', error));
      }
    }, [location.search]);
    
  };

  useInitialWebhook();

  // Service selection logic with fallbacks
  useEffect(() => {
    if (services?.length) {
      let selectedService = null;
      const numericServiceId = serviceId ? parseInt(serviceId, 10) : null;

      // Fallback logic
      if (!numericServiceId) {
        // Case 1: No service ID in URL - use first service
        selectedService = services[0];
      } else {
        // Case 2: Try to find matching service
        selectedService = services.find((service: any) => 
          service.service_id === numericServiceId
        ) || services[0]; // Fallback to first service if not found
      }

      if (selectedService) {
        console.log('Setting service:', selectedService);
        setSelectedService(selectedService);
      } else {
        console.error(`Service with ID ${numericServiceId} not found. Available services:`, services);
      }
    }
  }, [serviceId, services, setSelectedService]);

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

  // Format national average as currency
  const formatCurrency = (value: any) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value || 0);
  };

  if (!contractor || !services || !selectedService) {
    return null; // or a loading spinner
  }
  return (
    <div className='min-h-screen bg-gray-50'>
      <NavBar2 />
      

      <div className='  max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24  space-y-12 sm:space-y-20 lg:space-y-24'>

        {/* grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
          {/* First column/row item */}
          <div className=' p-4 rounded-lg space-y-6 sm:space-y-8 mt-4 justify-center flex flex-col '>
            {/* logo */}
            
            <div className='space-y-4 sm:space-y-6'>
              <p className='font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-800'>Hi Tricia, Your <span className='text-accentColor'>{selectedService?.services?.name} Remodel</span> Quote is Still Waiting!</p>
              <p className='text-base sm:text-lg text-gray-800'>Not quite ready? Let's discuss options—no pressure, just answers.</p>

            </div>
            
            <button className='bg-accentColor text-white font-semibold hover:bg-accentDark text-lg border-transparent rounded-lg py-4 px-6 w-60' onClick={handleButtonClick} >Book Appointment</button>

            <div className="hidden sm:flex flex-wrap justify-left gap-2 sm:gap-4 md:gap-6">
              {socialProof.map((proof: string, index: number) => (
                <div 
                  key={index}
                  className={`w-[calc(35%-1rem)] ${
                    socialProof.length <= 3 
                      ? 'sm:w-[calc(25%-1rem)]' 
                      : 'sm:w-[calc(20%-1rem)]'
                  } aspect-square p-2`}
                >
                  <img
                    src={proof}
                    alt={`Social proof ${index + 1}`}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
              ))}
            </div>
            

          </div>
          
          
          {/* Second column/row item */}
          <div className=' p-4 rounded-lg justify-center flex flex-col'>
            {/* <GalleryMarquee /> */}
            <div >
              <ComparisonSlider
                beforeImage={selectedService?.content?.before || 'https://project-starfish.s3.us-east-005.backblazeb2.com/feature/before-bath3.png'}
                afterImage={selectedService?.content?.after || 'https://project-starfish.s3.us-east-005.backblazeb2.com/feature/after-bath3.png'}
                containerWidth="w-auto"
              />
            </div>


          </div>
        </div>
      </div>

      <TestimonialsGray />

      <div className='  max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24  space-y-12 sm:space-y-20 lg:space-y-24'>

        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
          {/* First column/row item */}
          <div className=' p-4 rounded-lg space-y-6 sm:space-y-8 mt-4 justify-center flex flex-col '>
          <div className='space-y-6 sm:space-y-8'>
          <BlurFade delay={3 * 0.15} inView yOffset={0}>
            <div className="space-y-6 sm:space-y-8">
              {/* Title */}
              <div className="space-y-2 md:space-y-4">
                <h2 className="section_header">
                  How Your Quote Stacks Up
                </h2>
                <p className="section_description">
                  See how your price compares to the local average—and why we're the best value.
                </p>
                
              </div>

              <ul className="marker:text-accentColor list-disc ps-5 space-y-2 sm:space-y-4 text-sm sm:text-base text-gray-500">
                <li>
                  Most homeowners spend around <span className='font-bold text-accentColor'> {formatCurrency(selectedService?.services.national_avg)} </span> on a typical {selectedService?.services?.name} Remodel project.
                </li>
                <li>
                  Size, labor, and materials are the biggest cost factors.
                </li>
                <li>
                  Costs vary significantly based on materials
                </li>
              </ul>
              {/* End Title */}
            </div>
          </BlurFade>


          
        </div>
          </div>

          <div className=' p-4 rounded-lg space-y-6 sm:space-y-8 mt-4 justify-center flex flex-col '>
            <BlurFade delay={1 * 0.15} inView yOffset={0}>
              <PriceComparisonChart />

            </BlurFade>
          </div>
        </div>

        







        
        <Feature />
        <div className='flex sm:hidden'>
          <SocialProof />

        </div>
        
        <FAQ  />
        
        
      </div>

      

      <Footer />


    </div>
  )
}

export default RehashPage
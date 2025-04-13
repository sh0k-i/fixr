import { useEffect, useState } from 'react';
import { useAppContext } from '@/context/AppContext';
import InboundSummary from './InboundSummary';
import Step2Schedule from './forms/Step2Schedule';
import Step1Info from './forms/Step1Info';
import { useNavigate, useLocation } from 'react-router-dom';
import useClearFormState from '@/hooks/useClearFormState';
import Step1Selection from './forms/Step1Selection';

const InboundForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentStep, setCurrentStep] = useState<number>(0);
  const { setForm, contractor, setSelectedService, setUser, form, services } = useAppContext();
  const navigateWithParams = (path: string) => {
    const currentParams = new URLSearchParams(location.search);
    navigate(`${path}?${currentParams.toString()}`);
  };
  const clearFormState = useClearFormState();
  const params = new URLSearchParams(location.search);
  const serviceId = params.get('service');
  const step = params.get('step');

  // on load, set current step based on url parameter
  useEffect(() => {
    if (step === 'request') {
      setCurrentStep(1);
    } else {
      setCurrentStep(2);
    }
  }, [step]);

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

  const capitalizeWords = (str: string | null) => {
    if (!str) return '';
    return str.replace(/\b\w/g, char => char.toUpperCase());
  };

  // On load, clear form state and initialize user, form, and service data from url parameters
  useEffect(() => {
    const setInitialFormState = async () => {

      setUser(prevUser => ({
        ...prevUser,
        userNs: params.get('user_ns'),
        market: params.get('market'),
        firstname: capitalizeWords(params.get('firstname')),
        lastname: capitalizeWords(params.get('lastname')),
        email: params.get('email'),
        phone: params.get('phone'),
        zip: params.get('zip'),
        address1: capitalizeWords(params.get('address1')),
        address2: capitalizeWords(params.get('address2')),
        city: capitalizeWords(params.get('city')),
        state: params.get('state'),
      }));
  
      setForm(prevForm => ({
        ...prevForm,
        promo: params.get('promo'),
        date: params.get('adate'),
        time: params.get('atime'),
        timezone: contractor?.timezone[0]
      }));
    }
    setInitialFormState();
  }, [ location.search ]);

  useEffect(() => {
    setForm(prevForm => ({
      ...prevForm,
      serviceSpecification: params.get('service_specification'),
    }));
  }, [ location.search, setForm ]);
  

  const [slug, setSlug] = useState('');
  // Set slug
  useEffect(() => {
    if (contractor) {
      setSlug(contractor.slug);
    }
  }, [contractor]);

  const handleUpdate = () => {
    setCurrentStep(1);
  };

  const handleSchedule = () => {
    setCurrentStep(2);
  };

  const handleInfo = () => {
    setCurrentStep(3);
  };

  const handleService = () => {
    setCurrentStep(4);
  };

  const handleTest = () => {
    console.log('');
  };

  const handleSubmit = () => {
    navigateWithParams(`/summary-inbound/${slug}`);
    clearFormState();
    localStorage.setItem('tempFormID', form.formId || '');
    setForm(prev => ({ ...prev, formId: null })); 
    localStorage.removeItem('formID');
  };

  // Scroll to top when the step changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Use smooth scrolling
    });
  }, [currentStep]);

  if (!contractor ) {
    return null;
  }

  return (
    <div>
      {currentStep === 1 && <InboundSummary onInfo={handleInfo} onSchedule={handleSchedule} onSubmit={handleSubmit} onService={handleService} />}
      {currentStep === 2 && <Step2Schedule onNext={handleUpdate} onBack={handleTest} onReset={handleTest} />}
      {currentStep === 3 && <Step1Info onNext={handleUpdate} onBack={handleTest} onReset={handleTest} />}
      {currentStep === 4 && <Step1Selection onNext={handleUpdate} />}
    </div>
  )
}

export default InboundForm

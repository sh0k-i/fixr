import { useEffect, useState } from 'react';
import { useAppContext } from '@/context/AppContext';
import InboundSummary from './InboundSummary';
import Step2Schedule from './forms/Step2Schedule';
import Step1Info from './forms/Step1Info';
import { useNavigate, useLocation } from 'react-router-dom';
import useClearFormState from '@/hooks/useClearFormState';
import {central} from '@/lib/supabaseClient';


const InboundForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const { setForm, contractor, setSelectedService, setUser, form } = useAppContext();
  const navigateWithParams = (path: string) => {
    const currentParams = new URLSearchParams(location.search);
    navigate(`${path}?${currentParams.toString()}`);
  };
  const clearFormState = useClearFormState();
  const params = new URLSearchParams(location.search);
  const serviceId = params.get('service');

  // if service id exisits, set selected service 
  useEffect(() => {
    const fetchService = async () => {
      const { data: service, error } = await central
        .from('services')
        .select('*')
        .eq('id', serviceId)
        .single();

      if (error) {
        console.error('Error fetching service:', error);
        return;
      }

      if (service) {
        setSelectedService(service);
      }
    }
    if (serviceId) {
      fetchService();
    }
  }, [serviceId]);

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
        serviceSpecification: capitalizeWords(params.get('service_specification')),
        promo: params.get('promo'),
        date: params.get('adate'),
        time: params.get('atime'),
        timezone: contractor?.timezone[0]
      }));
    }
    setInitialFormState();
  }, [ location.search ]);

   // Load form object from local storage
   useEffect(() => {
    const storedForm = localStorage.getItem('form');
    if (storedForm) {
      const parsedForm = JSON.parse(storedForm);
      setForm(prevForm => ({
        ...prevForm,
        ...parsedForm,
      }));
    }
  }, [location.search, setForm]);

  // Save form object to local storage
  useEffect(() => {
    if (form) {
      localStorage.setItem('form', JSON.stringify(form));
    }
  }, [form]);

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

  return (
    <div>
      {currentStep === 1 && <InboundSummary onInfo={handleInfo} onSchedule={handleSchedule} onSubmit={handleSubmit} />}
      {currentStep === 2 && <Step2Schedule onNext={handleUpdate} onBack={handleTest} onReset={handleTest} />}
      {currentStep === 3 && <Step1Info onNext={handleUpdate} onBack={handleTest} onReset={handleTest} />}
    </div>
  )
}

export default InboundForm

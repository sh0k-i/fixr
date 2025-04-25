import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppContext } from '@/context/AppContext';
import Schedule from './Schedule';
import Summary from './Summary';
import Step1Info from '../forms/Step1Info';




const RehashHomePrideForm = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const { setUser, contractor } = useAppContext();

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

    }
    setInitialFormState();
  }, [ location.search ]);

  const [slug, setSlug] = useState('');
  // Set slug
  useEffect(() => {
    if (contractor) {
      setSlug(contractor.slug);
    }
  }, [contractor]);

  const handleTest = () => {
    console.log('');
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const navigateWithParams = (path: string) => {
    const currentParams = new URLSearchParams(location.search);
    navigate(`${path}?${currentParams.toString()}`);
  };

  const handleSubmit = () => {
    navigateWithParams(`/rehash-summary/${slug}`);
  };

  const handleUpdate = () => {
    setCurrentStep(2);
  };

  const handleSchedule = () => {
    setCurrentStep(3);
  };

  const handleInfo = () => {
    setCurrentStep(4);
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
      {currentStep === 1 && <Schedule onNext={handleNext} onBack={handleTest} onReset={handleTest} />}
      {currentStep === 2 && <Summary onInfo={handleInfo} onSchedule={handleSchedule} onSubmit={handleSubmit}/>}
      {currentStep === 3 && <Schedule onNext={handleUpdate} onBack={handleTest} onReset={handleTest} />}
      {currentStep === 4 && <Step1Info onNext={handleUpdate} onBack={handleTest} onReset={handleTest} />}

    </div>
  )
}

export default RehashHomePrideForm

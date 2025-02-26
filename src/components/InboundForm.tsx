import { useEffect, useState } from 'react';
import { useAppContext } from '@/context/AppContext';
import InboundSummary from './InboundSummary';
import Step2Schedule from './forms/Step2Schedule';
import Step1Info from './forms/Step1Info';
import { useNavigate, useLocation } from 'react-router-dom';
import useClearFormState from '@/hooks/useClearFormState';


const InboundForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const { setForm, contractor } = useAppContext();
  const navigateWithParams = (path: string) => {
    const currentParams = new URLSearchParams(location.search);
    navigate(`${path}?${currentParams.toString()}`);
  };
  const clearFormState = useClearFormState();

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

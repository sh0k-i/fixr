import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Stepper from '../ui/Stepper';
import { useAppContext } from '@/context/AppContext';
import ProgressBar from '../ui/ProgressBar';
import Step1Info from './Step1Info';
import Step2Schedule from './Step2Schedule';
import Summary from './Summary';
import Step3Specifications from './Step3Specifications';

const ParentForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setForm, selectedService, setSelectedService } = useAppContext();
  const [currentStep, setCurrentStep] = useState(0);
  const progress = (currentStep - 1 ) * 33.3333;

  // If selectedService is set, then set the current step to 3
  useEffect(() => {
    if (selectedService) {
      setCurrentStep(2);
    } else {
      setCurrentStep(1);
    }
  }, [selectedService]);

  const navigateWithParams = (path: string) => {
    const currentParams = new URLSearchParams(location.search);
    navigate(`${path}?${currentParams.toString()}`);
  };

  // Scroll to top when the step changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Use smooth scrolling
    });
  }, [currentStep]);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleReset = async () => {
    setSelectedService(null);
    // remove param in url
    const currentParams = new URLSearchParams(location.search);
    currentParams.delete('service_id');
    setCurrentStep(1);
  };

  const handleBackStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmitted = () => {
    navigateWithParams(`/summary/`);

    setForm(prev => ({ ...prev, formId: null })); 
  };

  return (
    <div className=''>
      <div className="mx-auto max-w-screen-xl px-4 pb-2 custom-smallest:pb-3 small-stepper:pb-3 sm:pb-4 md:pb-6 pt-2 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <Stepper currentStep={currentStep} />
        </div>
      </div>
      <div className={`mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-6 relative`}>
        <div className="flex justify-center">
          <div className="w-[600px]">
            <ProgressBar progress={progress} />
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img
            src='https://project-starfish.s3.us-east-005.backblazeb2.com/avatar.jpg'
            alt="Avatar"
            className="w-12 h-12 custom-smallest:w-14 custom-smallest:h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border-2 border-gray-100 object-cover"
          />
          </div>
        </div>
      </div>
      <div>

        {currentStep === 1 && <Step3Specifications onNext={handleNextStep} />}
        {currentStep === 2 && <Step1Info onNext={handleNextStep} onReset={handleReset} onBack={handleBackStep} />}
        {currentStep === 3 && <Step2Schedule onNext={handleNextStep} onReset={handleReset} onBack={handleBackStep} />}
        {currentStep === 4 && <Summary onNext={handleSubmitted} onReset={handleReset} onBack={handleBackStep} />}
      </div>
    </div>
  );
};

export default ParentForm;

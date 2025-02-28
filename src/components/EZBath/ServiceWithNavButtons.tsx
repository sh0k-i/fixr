import React, { useState } from 'react';
import { useAppContext } from '@/context/AppContext';
import Services from '@/components/Services';
import NavButtons from '../ui/navButtons';

// Define props interface
interface ServiceWithNavButtonsProps {
  onNext: () => void;
  onBack: () => void;
  onReset: () => void;
}

const ServiceWithNavButtons: React.FC<ServiceWithNavButtonsProps> = ({ onNext, onBack, onReset  }) => {
  const { services, setSelectedService } = useAppContext(); 
  const [loading, setLoading] = useState<boolean>(false); // State to control spinner

  const handleServiceSelect = async (service: any) => {
    setLoading(true); // Show spinner
    setSelectedService(service); // Save the entire service item
    setLoading(false); // Hide spinner
    onNext();
  };

  const handleBack = () => {
    onBack();
  };

  const handleReset = () => {
    onReset();
  };

  return (
    <div className="container-form">
      <NavButtons handleBack={handleBack} handleReset={handleReset} />
      <div className="space-y-8">
        <div className='flex justify-center text-center mb-8'>
          <div className="max-w-[40rem] text-center">
            <h1 className="heading-form">
              Awesome! Choose a project below to get started
            </h1>
          </div>
        </div>

        <Services services={services} handleServiceSelect={handleServiceSelect} />

        {loading && (
          <div className="flex justify-center pt-20">
            <div className="animate-spin h-6 w-6 border-2 border-accentColor border-t-transparent rounded-full"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceWithNavButtons;

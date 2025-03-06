import { useEffect, useState } from 'react';
import ParentForm from "@/components/forms/ParentForm";
import EZBathForm from "@/components/EZBath/EZBathForm";
import { useLocation } from 'react-router-dom';
import { Dialog, DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  DialogClose,
  DialogTitle
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import posthog from 'posthog-js';
import { useAppContext } from '@/context/AppContext';
import Navbar from '@/components/NavBar';
import InboundForm from '@/components/InboundForm';

const formComponents = {
  ParentForm,
  EZBathForm,
  InboundForm, // Add InboundForm to the component map
};

const RequestQuote = () => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [slug, setSlug] = useState('');
  const { user, form, selectedService, contractor, setUser, setForm, setSelectedService, services } = useAppContext();
  const params = new URLSearchParams(location.search);

  // Determine which form to render
  const getFormComponent = () => {
    if (contractor?.custom_form) {
      return formComponents[contractor.custom_form as keyof typeof formComponents] || ParentForm;
    }
    
    const hasInboundParams = params.get('service') && params.get('service_specification');
    return hasInboundParams ? InboundForm : ParentForm;
  };

  const FormComponent = getFormComponent();

  // Load form object from local storage
  useEffect(() => {
    const storedForm = localStorage.getItem('form');
    if (storedForm) {
      setForm(JSON.parse(storedForm));
    }
  }, []);

  // Load context values from local storage
  useEffect(() => {
    if (FormComponent !== InboundForm) {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      const storedForm = localStorage.getItem('form');
      if (storedForm) {
        setForm(JSON.parse(storedForm));
      }
      const storedSelectedService = localStorage.getItem('selectedService');
      if (storedSelectedService) {
        setSelectedService(JSON.parse(storedSelectedService));
      }
    }
  }, [setUser, setForm, setSelectedService]);

  // Save context values to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('form', JSON.stringify(form));
    localStorage.setItem('selectedService', JSON.stringify(selectedService));
  }, [user, form, selectedService]);  

  // If there is only one service, preselect it
  useEffect(() => {
    if (FormComponent !== InboundForm) {
      if (services.length === 1) {
        setSelectedService(services[0]);
      }
    }
  }, [services, setSelectedService, FormComponent]);


  useEffect(() => {
    if (contractor) {
      setSlug(contractor.slug);
    }
  }, [contractor]);

  // Handle the back button
  useEffect(() => {
    const handlePopState = () => {
      if (!isModalOpen) {
        setIsModalOpen(true);
        document.getElementById("modal")?.click();
      }
    };

    window.history.pushState(null, '', window.location.pathname + window.location.search);
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [location.pathname, location.search, isModalOpen]);

  const handleLeave = () => {
    posthog.capture('page_exit test in request',);
    const params = window.location.search;
    window.location.href = `/${slug}` + params;
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (!contractor) {
    return null;
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      <Navbar />
      <FormComponent />
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogTrigger asChild>
          <button id='modal' className='hidden'></button>
        </DialogTrigger>
        <DialogTitle></DialogTitle>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <h4 className='text-md font-semibold'>Wait!</h4>
            <DialogDescription>
              Are you sure you want to leave this page? Don't worry, your changes will be saved.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button className='bg-gray-200 hover:bg-gray-300 text-gray-800' onClick={handleCloseModal}>Cancel</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button className='bg-accentColor hover:bg-accentDark mb-2' onClick={handleLeave}>Leave Page</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RequestQuote;




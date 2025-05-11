import { useEffect, useState } from 'react';
import ParentForm from "@/components/forms/ParentForm";
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
import { useAppContext } from '@/context/AppContext';
import NavBar2 from '@/components/NavBar2';

const RequestQuote = () => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user, form, selectedService, contractor, setUser, setForm, setSelectedService } = useAppContext();
  // Load form object from local storage
  useEffect(() => {
    const storedForm = localStorage.getItem('form');
    if (storedForm) {
      setForm(JSON.parse(storedForm));
    }
  }, []);

  // Load context values from local storage
  useEffect(() => {
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
  }, [setUser, setForm, setSelectedService]);

  // Save context values to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('form', JSON.stringify(form));
    localStorage.setItem('selectedService', JSON.stringify(selectedService));
  }, [user, form, selectedService]);  

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
    const params = window.location.search;
    window.location.href = `/` + params;
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (!contractor) {
    console.error('FLAG: Contractor not found');
    return null;
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      <NavBar2 />
      <div className='mt-20 md:mt-24'>
        <ParentForm />  
      </div>
      
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




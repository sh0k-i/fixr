import { useEffect, useState } from 'react'
import useClearFormState from '@/hooks/useClearFormState';
import { useAppContext } from '@/context/AppContext';
import {central} from '@/lib/supabaseClient';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '@/components/NavBar';
import Testimonials from '@/components/Testimonials';
import Feature from '@/components/Feature';
import FAQ from '@/components/FAQ';
import InboundForm from '@/components/InboundForm';

const Inbound = () => {
  const clearFormState = useClearFormState();
  const location = useLocation();
  const navigate = useNavigate();
  const { form, setForm, setUser, selectedService, setSelectedService, contractor } = useAppContext();
  const params = new URLSearchParams(location.search);
  const serviceId = params.get('service');
  const [loading, setLoading] = useState(true);

  const capitalizeWords = (str: string | null) => {
    if (!str) return '';
    return str.replace(/\b\w/g, char => char.toUpperCase());
  };

  const navigateWithParams = (path: string) => {
    const currentParams = new URLSearchParams(location.search);
    navigate(`${path}?${currentParams.toString()}`);
  };

  const [slug, setSlug] = useState('');
  // Set slug
  useEffect(() => {
    if (contractor) {
      setSlug(contractor.slug);
    }
  }, [contractor]);

  // On load, clear form state and initialize user, form, and service data from url parameters
  useEffect(() => {
    const setInitialFormState = async () => {
      clearFormState();

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
        formId: params.get('form_id'),
        serviceSpecification: capitalizeWords(params.get('service_specification')),
        promo: params.get('promo'),
        date: params.get('adate'),
        time: params.get('atime'),
        timezone: contractor?.timezone_test[0]
      }));
    }
    setInitialFormState();
  }, [ location.search ]);

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

  // Check if the appointment is already booked if formId is present or changed
  useEffect(() => {
    const checkBookingStatus = async () => {
      if (form.formId) {
        try {
          const { data, error } = await central
            .from('bookings') 
            .select('*')
            .eq('id', form.formId)
            .single();

          if (error) {
            console.error('Error fetching appointment:', error);
            
          } else {
            // form is already booked, save to form
            setForm(prevForm => ({
                ...prevForm,
                formId: data.id,
                isBooked: data.is_booked,
            }));
          }
        } catch (err) {
          console.error('Unexpected error:', err);
          
        }
      } else {
      }
    };

    checkBookingStatus();
  }, [form.formId]);

  // If form.isBooked, redirect to thank you page
  useEffect(() => {
    if (form.isBooked == true) {
      navigateWithParams(`/summary-inbound/${slug}`);
      console.log('form is booked');
      setLoading(false);
    } else {
      console.log('form is not booked');
      setLoading(false);
    }
  }, [form.isBooked]);

  if (loading) {
    return null;
  }

  if (!contractor || !selectedService) {
    return null;
  }
  



  return (
    <div className='bg-gray-50'>
      <Navbar />  
      
      <div className='max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-12 space-y-12 sm:space-y-20 lg:space-y-24'>
        <InboundForm />
        <Testimonials />
        <Feature />
        <FAQ />
      </div>
    </div>
  )
}

export default Inbound



import { useEffect, useState } from 'react'
import { useAppContext } from '@/context/AppContext';
import {central} from '@/lib/supabaseClient';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '@/components/NavBar';
import Testimonials from '@/components/Testimonials';
import Feature from '@/components/Feature';
import FAQ from '@/components/FAQ';
import InboundForm from '@/components/InboundForm';

const Inbound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { form, setForm, contractor } = useAppContext();
  const params = new URLSearchParams(location.search);
  const [loading, setLoading] = useState(true);

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
      setForm(prevForm => ({
        ...prevForm,
        formId: params.get('form_id'),
      }));
    }
    setInitialFormState();
  }, [ location.search ]);

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

  // If form.isBooked, redirect to thank you/ summary page
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

  if (!contractor) {
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



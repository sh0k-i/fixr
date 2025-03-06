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
  const [loading, setLoading] = useState(true);

  const generateRandomString = (length: number): string => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const navigateWithParams = (path: string) => {
    const currentParams = new URLSearchParams(location.search);
    navigate(`${path}?${currentParams.toString()}`);
  };

  const [slug, setSlug] = useState('');

  useEffect(() => {
    if (contractor) {
      setSlug(contractor.slug);
    }
  }, [contractor]);

  // Modified form ID handling
  useEffect(() => {
    const setInitialFormState = async () => {
      let formId = form.formId;

      if (!formId && contractor) {
        const dateTime = new Date().toISOString().replace(/[-:.T]/g, '').slice(0, 14);
        const randomString = generateRandomString(6);
        formId = `${contractor.id}-${dateTime}-${randomString}`;
      }

      setForm(prevForm => ({
        ...prevForm,
        formId: formId || null,
      }));
    };
    setInitialFormState();
  }, [contractor]);

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
            setForm(prevForm => ({
              ...prevForm,
              formId: data.id,
              isBooked: data.is_booked,
            }));
          }
        } catch (err) {
          console.error('Unexpected error:', err);
        }
      }
    };

    checkBookingStatus();
  }, [form.formId]);

  // If form.isBooked, redirect to thank you/ summary page
  useEffect(() => {
    if (form.isBooked == true) {
      navigateWithParams(`/summary-inbound/${slug}`);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [form.isBooked]);

  if (loading || !contractor) {
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
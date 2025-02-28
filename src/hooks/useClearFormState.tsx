import { useAppContext } from '@/context/AppContext';
 // Ensure AppContext is correctly imported

const useClearFormState = () => {

  const { setUser, setForm, setSelectedService } = useAppContext();

  const clearFormState = () => {
    setUser(prev => ({
      ...prev,
      firstname: null,
      lastname: null,
      address1: null,
      address2: null,
      city: null,
      email: null,
      phone: null,
      state: null,
      userNs: null,
      market: null,
      timezone: null,
    }));

    setForm(prev => ({
      ...prev,
      serviceSpecification: null,
      promo: '',
      generalOptIn: false,
      termsAndPrivacyOptIn: false,
      date: null,
      time: null,
      concept: null,
      zip: null,
    }));

    setSelectedService(null);
  };

  return clearFormState;
};

export default useClearFormState;

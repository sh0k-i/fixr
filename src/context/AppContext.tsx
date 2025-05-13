import React, { createContext, useState, ReactNode, Dispatch, SetStateAction, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';

interface UserData {
  firstname: string | null;
  lastname: string | null;
  zip: string | null;
  address1: string | null;
  address2: string | null;
  city: string | null;
  email: string | null;
  phone: string | null;
  state: string | null;
  userNs: string | null;
  market: string | null;
}

interface FormData {
  formId: string | null;
  serviceSpecification: string | null;
  promo: string | null;
  generalOptIn: boolean;
  termsAndPrivacyOptIn: boolean;
  date: string | null;
  time: string | null;
  isBooked: boolean;
  concept: any | null;
  timezone: string | null;
  timezoneAbbr: string | null;
}

interface AppContextType {
  cookiesAccepted: string[];
  cookieConsentId: string;
  user: UserData;
  form: FormData;
  selectedService: any;
  selectedCategory: any;
  contractor: any;
  categories: any;
  services: any;
  featured: any;
  locations: any;
  timezoneAbbr: string;

  setCookiesAccepted: Dispatch<SetStateAction<string[]>>;
  setCookieConsentId: Dispatch<SetStateAction<string>>;
  setUser: Dispatch<SetStateAction<UserData>>;
  setForm: Dispatch<SetStateAction<FormData>>;
  setSelectedService: Dispatch<SetStateAction<any>>;
  setSelectedCategory: Dispatch<SetStateAction<any>>;
  setContractor: Dispatch<SetStateAction<any>>;
  setCategories: Dispatch<SetStateAction<any>>;
  setFeatured: Dispatch<SetStateAction<any>>;
  setServices: Dispatch<SetStateAction<any>>;
  setLocations: Dispatch<SetStateAction<any>>;
  setTimezoneAbbr: Dispatch<SetStateAction<string>>;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppContextProviderProps {
  children: ReactNode;
}

// Create the provider component
export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const location = useLocation();

  const [cookiesAccepted, setCookiesAccepted] = useState<string[]>([]);
  const [cookieConsentId, setCookieConsentId] = useState<string>('');
  
  const [user, setUser] = useState<UserData>({
    firstname: null,
    lastname: null,
    zip: null,
    address1: null,
    address2: null,
    city: null,
    email: null,
    phone: null,
    state: null,
    userNs: null,
    market: null,
  });

  const [form, setForm] = useState<FormData>({
    formId: null,
    serviceSpecification: null,
    promo: null,
    generalOptIn: false,
    termsAndPrivacyOptIn: false,
    date: null,
    time: null,
    isBooked: false,
    concept: null,
    timezone: null,
    timezoneAbbr: null,
  });

  const [selectedService, setSelectedService] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const [contractor, setContractor] = useState<any>(null);
  const [services, setServices] = useState<any>(null);
  const [categories, setCategories] = useState<any>(null);
  const [featured, setFeatured] = useState<any>(null);
  const [locations, setLocations] = useState<any>(null);
  const [timezoneAbbr, setTimezoneAbbr] = useState<string>('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setUser(prevUser => ({ ...prevUser, userNs: params.get('user_ns'), market: params.get('market'), promo: params.get('promo') }));

  }, [location.search]);

  // Initialize cookiesAccepted from local storage
  useEffect(() => {
    const storedCookies = localStorage.getItem('cookiesAccepted');
    const storedCookieConsentId = localStorage.getItem('cookieConsentId');
    if (storedCookies) {
      setCookiesAccepted(JSON.parse(storedCookies));
    }
    if (storedCookieConsentId) {
      setCookieConsentId(storedCookieConsentId);
    }
  }, []);

  useEffect(() => {
    const storedContractor = localStorage.getItem('contractor');
    if (storedContractor) {
      setContractor(JSON.parse(storedContractor));
    }
    
  }, [setContractor]);
  
  // Save context values to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('contractor', JSON.stringify(contractor));
  }, [contractor]);  

  return (
    <AppContext.Provider
      value={{
        cookiesAccepted,
        cookieConsentId,
        user,
        form,
        selectedService,
        selectedCategory,
        contractor,
        locations,
        timezoneAbbr,
        services,
        categories,
        featured,
        setCookiesAccepted,
        setCookieConsentId,
        setUser,
        setForm,
        setSelectedService,
        setSelectedCategory,
        setContractor,
        setLocations,
        setServices,
        setCategories,
        setFeatured,
        setTimezoneAbbr,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};

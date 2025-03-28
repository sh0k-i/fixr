import React, { createContext, useState, ReactNode, Dispatch, SetStateAction, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import  { DateTime }  from 'luxon';

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
  contractor: any;
  services: any;
  locations: any;
  timezoneAbbr: string;

  setCookiesAccepted: Dispatch<SetStateAction<string[]>>;
  setCookieConsentId: Dispatch<SetStateAction<string>>;
  setUser: Dispatch<SetStateAction<UserData>>;
  setForm: Dispatch<SetStateAction<FormData>>;
  setSelectedService: Dispatch<SetStateAction<any>>;
  setContractor: Dispatch<SetStateAction<any>>;
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
  const [contractor, setContractor] = useState<any>(null);
  const [services, setServices] = useState<any>(null);
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
    // const storedUser = localStorage.getItem('user');
    // if (storedUser) {
    //   setUser(JSON.parse(storedUser));
    // }
    // const storedForm = localStorage.getItem('form');
    // if (storedForm) {
    //   setForm(JSON.parse(storedForm));
    // }
    // const storedSelectedService = localStorage.getItem('selectedService');
    // if (storedSelectedService) {
    //   setSelectedService(JSON.parse(storedSelectedService));
    // }
    const storedContractor = localStorage.getItem('contractor');
    if (storedContractor) {
      setContractor(JSON.parse(storedContractor));
    }
    const storedServices = localStorage.getItem('services');
    if (storedServices) {
      setServices(JSON.parse(storedServices));
    }
    const storedLocations = localStorage.getItem('locations');
    if (storedLocations) {
      setLocations(JSON.parse(storedLocations));
    } 
    const storedTimezoneAbbr = localStorage.getItem('timezoneAbbr');
    if (storedTimezoneAbbr) {
      setTimezoneAbbr(JSON.parse(storedTimezoneAbbr));
    }
  }, [setUser, setForm, setSelectedService, setContractor, setServices, setLocations, setTimezoneAbbr]);
  
  // Save context values to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('contractor', JSON.stringify(contractor));
    localStorage.setItem('services', JSON.stringify(services));
    localStorage.setItem('locations', JSON.stringify(locations));
    localStorage.setItem('timezoneAbbr', JSON.stringify(timezoneAbbr));
  }, [contractor, services, locations, timezoneAbbr]);  

  // Convert IANA Time Zone to Standard Time Abbreviation
  const getTimeZoneAbbreviation = (ianaTimeZone: string): string => {
    const now = DateTime.now().setZone(ianaTimeZone);
    return now.toFormat('ZZZZ'); // Returns abbreviation like EST, CST, etc.
  };

  // set timezone abbreviation
  useEffect(() => {
    if (form && form.timezone) {
      setTimezoneAbbr(getTimeZoneAbbreviation(form.timezone));
    }
  }, [form]);

  return (
    <AppContext.Provider
      value={{
        cookiesAccepted,
        cookieConsentId,
        user,
        form,
        selectedService,
        contractor,
        locations,
        timezoneAbbr,
        services,
        setCookiesAccepted,
        setCookieConsentId,
        setUser,
        setForm,
        setSelectedService,
        setContractor,
        setLocations,
        setServices,
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

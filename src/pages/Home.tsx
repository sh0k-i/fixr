import Hero from "../components/Hero";
import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ServiceCards from "@/components/ServiceCards";
import { useAppContext } from "@/context/AppContext";
import { useEffect } from "react";
import Feature from "@/components/Feature";
import NavBar from "@/components/NavBar";
import HowItWorks2 from "@/components/HowItWorks2";

const Home = () => {
  const {
    services,
    user,
    form,
    selectedService,
    setUser,
    setForm,
    setSelectedService,
  } = useAppContext();

  // Load context values from local storage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    const storedForm = localStorage.getItem("form");
    if (storedForm) {
      setForm(JSON.parse(storedForm));
    }
    const storedSelectedService = localStorage.getItem("selectedService");
    if (storedSelectedService) {
      setSelectedService(JSON.parse(storedSelectedService));
    }
  }, [setUser, setForm, setSelectedService]);

  // Save context values to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("form", JSON.stringify(form));
    localStorage.setItem("selectedService", JSON.stringify(selectedService));
  }, [user, form, selectedService]);

  return (
    <div className="bg-white">
      {/* <NavBar2 /> */}
      <NavBar />
      <Hero />
      <Testimonials />

      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24  space-y-12 sm:space-y-20 lg:space-y-24">
        {services && services.length > 1 && <ServiceCards />}
        <Feature />
        <HowItWorks2/>
      </div>

      

      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-20 lg:pb-24  space-y-12 sm:space-y-20 lg:space-y-24">
        <Benefits />
        <FAQ />
      </div>

      <Footer />
    </div>
  );
};

export default Home;

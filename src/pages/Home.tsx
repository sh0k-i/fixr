import Hero from "../components/Hero";
import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { useAppContext } from "@/context/AppContext";
import Feature from "@/components/Feature";
import NavBar from "@/components/NavBar";
import HowItWorks2 from "@/components/HowItWorks2";
import ProductCards from "@/components/ProductCards";
import BlurFade from "@/components/ui/blur-fade";

const Home = () => {
  const {
    featured,
  } = useAppContext();

  const handleServiceSelect = async (service: any) => {
    //redirect to page
    window.location.href = `/request-quotes?service_id=${service.id}`;
  };

  if (!featured) {
    return null; // or a loading spinner
  }

  return (
    <div className="bg-white">
      {/* <NavBar2 /> */}
      <NavBar />
      <Hero />
      <Testimonials />

      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24  space-y-12 sm:space-y-20 lg:space-y-24">
              <div className="space-y-8 sm:space-y-10 pointer-events-none">
                <BlurFade inView delay={1 * 0.15}  yOffset={0} className="space-y-2 md:space-y-4 text-center">
                    <h2 className="section_header">
                    Deals <span className="text-accentColor">You'll Love</span>
                    </h2>
                    <p className="section_description">
                    Don’t miss out on our best deals—give your space the upgrade it deserves
                    </p>
                </BlurFade>
                <ProductCards
            services={featured}
            handleServiceSelect={handleServiceSelect}
          />
              </div>
              <HowItWorks2/>
        <Feature />

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

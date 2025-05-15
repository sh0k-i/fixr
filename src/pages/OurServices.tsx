import Footer from "@/components/Footer";
import NavBar2 from "@/components/NavBar2";
import ProductCarousel from "@/components/ProductCarousel";
import Categories from "@/components/Services";
import BlurFade from "@/components/ui/blur-fade";
import { useAppContext } from "@/context/AppContext";
import { useState, useEffect } from "react";

const OurServices = () => {
  const { categories, services } = useAppContext();
  const [featuredServices, setFeaturedServices] = useState(services);
  const [loading, setLoading] = useState(true);
  const [bathroomServices, setBathroomServices] = useState<any[]>([]);
  const [kitchenServices, setKitchenServices] = useState<any[]>([]);
  const [outdoorServices, setOutdoorServices] = useState<any[]>([]);
  const [flooringServices, setFlooringServices] = useState<any[]>([]);
  const [electricalServices, setElectricalServices] = useState<any[]>([]);
  const [solarServices, setSolarServices] = useState<any[]>([]);


  const handleServiceSelect = async (service: any) => {
    //redirect to page
    window.location.href = `/request-quotes?service_id=${service.id}`;
  };

  const handleCategorySelect = async (category: any) => {
    console.log("Selected category:", category);
    // redirect to page
    window.location.href = `/filtered-services?category_id=${category.id}`;
  };

  // filter featured services
  useEffect(() => {
    setLoading(true);

    const featured = services.filter(
      (service: any) => service.featured === true
    );
    setFeaturedServices(featured);

    const bathroomServices = services.filter((service: any) => 
      service.category.includes(2)
    );
    setBathroomServices(bathroomServices);

    const kitchenServices = services.filter((service: any) => 
      service.category.includes(1)
    );
    setKitchenServices(kitchenServices);

    const outdoorServices = services.filter((service: any) => 
      service.category.includes(3)
    );
    setOutdoorServices(outdoorServices);

    const flooringServices = services.filter((service: any) => 
      service.category.includes(6)
    );
    setFlooringServices(flooringServices);

    const electricalServices = services.filter((service: any) => 
      service.category.includes(4)
    );
    setElectricalServices(electricalServices);

    const solarServices = services.filter((service: any) => 
      service.category.includes(7)
    );
    setSolarServices(solarServices);

    setLoading(false);
  }, [services]);

  if (loading) {
    return null; // or a loading spinner
  }

  return (
    <div>
      <NavBar2 />
      <div className="fixed top-0 left-0 w-full h-[300px] flex items-center justify-center bg-[url('/images/page-bg.png')] bg-cover bg-no-repeat bg-top z-[-1]"></div>
      <div className="max-w-[85rem] mt-[100px] md:mt-[175px] mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-20  space-y-12 sm:space-y-20 lg:space-y-20">
        {/* categories */}
        <div className="space-y-8 sm:space-y-10">
          {/* title */}
          <BlurFade
            delay={2 * 0.15}
            inView
            yOffset={0}
            className="text-left space-y-2 md:space-y-4"
          >
            <p className="text-accentColor font-semibold text-lg">
              Our Services
            </p>
            <div className="font-semibold text-2xl sm:text-3xl text-gray-800 pointer-events-none">
              Browse by category
            </div>
          </BlurFade>

          <BlurFade delay={3 * 0.15} inView yOffset={0}>
            <Categories
              services={categories}
              handleServiceSelect={handleCategorySelect}
            />
          </BlurFade>
        </div>

        <div className="space-y-8 sm:space-y-10">
          {/* title */}
          <BlurFade
            delay={2 * 0.15}
            inView
            yOffset={0}
            className="text-left space-y-2 md:space-y-4"
          >
            <p className="text-accentColor font-semibold text-lg">
              Featured Services
            </p>
            <div className="font-semibold text-2xl sm:text-3xl text-gray-800 pointer-events-none">
              Great deals for you!
            </div>
          </BlurFade>
          <ProductCarousel
            services={featuredServices}
            handleServiceSelect={handleServiceSelect}
          />
        </div>

        <div className="space-y-8 sm:space-y-10">
          {/* title */}
          <BlurFade
            delay={2 * 0.15}
            inView
            yOffset={0}
            className="text-left space-y-2 md:space-y-4"
          >
            <div className="font-semibold text-2xl sm:text-3xl text-gray-800 pointer-events-none">
              Bathroom Services
            </div>
          </BlurFade>
          <ProductCarousel
            services={bathroomServices}
            handleServiceSelect={handleServiceSelect}
          />
        </div>

        <div className="space-y-8 sm:space-y-10">
          {/* title */}
          <BlurFade
            delay={2 * 0.15}
            inView
            yOffset={0}
            className="text-left space-y-2 md:space-y-4"
          >
            <div className="font-semibold text-2xl sm:text-3xl text-gray-800 pointer-events-none">
              Kitchen Services
            </div>
          </BlurFade>
          <ProductCarousel
            services={kitchenServices}
            handleServiceSelect={handleServiceSelect}
          />
        </div>

        <div className="space-y-8 sm:space-y-10">
          {/* title */}
          <BlurFade
            delay={2 * 0.15}
            inView
            yOffset={0}
            className="text-left space-y-2 md:space-y-4"
          >
            <div className="font-semibold text-2xl sm:text-3xl text-gray-800 pointer-events-none">
            Outdoor & Landscaping Services
            </div>
          </BlurFade>
          <ProductCarousel
            services={outdoorServices}
            handleServiceSelect={handleServiceSelect}
          />
        </div>

        <div className="space-y-8 sm:space-y-10">
          {/* title */}
          <BlurFade
            delay={2 * 0.15}
            inView
            yOffset={0}
            className="text-left space-y-2 md:space-y-4"
          >
            <div className="font-semibold text-2xl sm:text-3xl text-gray-800 pointer-events-none">
            Flooring & Walls Services
            </div>
          </BlurFade>
          <ProductCarousel
            services={flooringServices}
            handleServiceSelect={handleServiceSelect}
          />
        </div>

        <div className="space-y-8 sm:space-y-10">
          {/* title */}
          <BlurFade
            delay={2 * 0.15}
            inView
            yOffset={0}
            className="text-left space-y-2 md:space-y-4"
          >
            <div className="font-semibold text-2xl sm:text-3xl text-gray-800 pointer-events-none">
            Electrical & Lighting Services
            </div>
          </BlurFade>
          <ProductCarousel
            services={electricalServices}
            handleServiceSelect={handleServiceSelect}
          />
        </div>

        <div className="space-y-8 sm:space-y-10">
          {/* title */}
          <BlurFade
            delay={2 * 0.15}
            inView
            yOffset={0}
            className="text-left space-y-2 md:space-y-4"
          >
            <div className="font-semibold text-2xl sm:text-3xl text-gray-800 pointer-events-none">
            Solar Services
            </div>
          </BlurFade>
          <ProductCarousel
            services={solarServices}
            handleServiceSelect={handleServiceSelect}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OurServices;

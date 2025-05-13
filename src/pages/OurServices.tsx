import Footer from "@/components/Footer";
import NavBar2 from "@/components/NavBar2";
import ProductCards from "@/components/ProductCards";
import Categories from "@/components/Services";
import BlurFade from "@/components/ui/blur-fade";
import { useAppContext } from "@/context/AppContext";
import { useState, useEffect } from "react";

const OurServices = () => {
  const { categories, services } = useAppContext();
  const [featuredServices, setFeaturedServices] = useState(services);
  const [loading, setLoading] = useState(true);

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
    const filtered = services.filter(
      (service: any) => service.featured === true
    );

    setFeaturedServices(filtered);
    console.log("Filtering Featured services:", filtered);
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
          <ProductCards
            services={featuredServices}
            handleServiceSelect={handleServiceSelect}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OurServices;

import Footer from "@/components/Footer";
import NavBar2 from "@/components/NavBar2";
import ProductCards from "@/components/ProductCards";
import BlurFade from "@/components/ui/blur-fade";
import { useAppContext } from "@/context/AppContext";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import servicesData from "@/assets/services.json";

const FilteredServices = () => {
  const { services, selectedCategory, setSelectedCategory } = useAppContext();
  const [filteredServices, setFilteredServices] = useState(services);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const categoryId = params.get("category_id");
  const [loading, setLoading] = useState(true);

  const handleServiceSelect = async (service: any) => {
    //redirect to page
    window.location.href = `/request-quotes?service_id=${service.id}`;
  };

  useEffect(() => {
    //set selected category based on categoryId from servicesData.categories
    setLoading(true);
    const selectedCategory = servicesData.categories.find(
      (category: any) => category.id === Number(categoryId)
    );
    setSelectedCategory(selectedCategory);
    console.log("Selected category:", selectedCategory);

    const filtered = services.filter((service: any) =>
      service.category.includes(Number(categoryId))
    );

    setFilteredServices(filtered);
    console.log("Filtering services for category:", categoryId, filtered);
    setLoading(false);
  }, [categoryId, services]);

  if (loading) {
    return null; // or a loading spinner
  }
  return (
    <div>
      <NavBar2 />
      <div className="fixed top-0 left-0 w-full h-[300px] flex items-center justify-center bg-[url('/images/page-bg.png')] bg-cover bg-no-repeat bg-top z-[-1]"></div>
      <div className="max-w-[85rem] mt-[100px] md:mt-[142px] mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-20 space-y-12 sm:space-y-16 min-h-screen">
        <div className="space-y-8 sm:space-y-8">
          <ol className="flex items-center whitespace-nowrap">
            <li className="inline-flex items-center">
              <a
                className="flex items-center text-sm text-gray-500 hover:text-accentColor "
                href="/"
              >
                <svg
                  className="shrink-0 me-3 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                Home
              </a>
              <svg
                className="shrink-0 mx-2 size-4 text-gray-400 dark:text-neutral-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </li>
            <li className="inline-flex items-center">
              <a
                className="flex items-center text-sm text-gray-500 hover:text-accentColor"
                href="/services"
              >
                <svg
                  className="shrink-0 me-3 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                  <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"></path>
                </svg>
                Our Services
                <svg
                  className="shrink-0 mx-2 size-4 text-gray-400 dark:text-neutral-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </a>
            </li>
            <li
              className="inline-flex items-center text-sm font-semibold text-gray-800 truncate dark:text-neutral-200"
              aria-current="page"
            >
              {selectedCategory?.name}
            </li>
          </ol>

          <div className="text-left space-y-2 md:space-y-4">
            <p className="text-accentColor font-semibold text-base sm:text-lg">
              Browse By Category
            </p>
            <BlurFade
              delay={2 * 0.15}
              inView
              yOffset={0}
              className="section_header pointer-events-none"
            >
              Explore {selectedCategory?.name} Services
            </BlurFade>
          </div>
        </div>

        <BlurFade delay={3 * 0.15} inView yOffset={0}>
          <ProductCards
            services={filteredServices}
            handleServiceSelect={handleServiceSelect}
          />
        </BlurFade>
      </div>
      <Footer />
    </div>
  );
};

export default FilteredServices;

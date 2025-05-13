import React, { useEffect, useState } from "react";
import { useAppContext } from "@/context/AppContext";

// Define props interface
interface Step3SpecificationsProps {
  onNext: () => void;
}

const Step3Specifications: React.FC<Step3SpecificationsProps> = ({
  onNext,
}) => {
  const {
    services,
    setSelectedService,
    categories,

  } = useAppContext();
  const [loading, setLoading] = useState<boolean>(false);
  const [filteredServices, setFilteredServices] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<any>({ id: "all", name: "All" });

  useEffect(() => {
    let filtered = services;
    
    if (selectedCategory.id !== "all") {
      filtered = services.filter((service: any) =>
        service.category.includes(Number(selectedCategory.id))
      );
    }

    const sorted = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    setFilteredServices(sorted);
  }, [selectedCategory, services]);

  const handleCategorySelect = (category: any) => {
    setSelectedCategory(category);
  };


  const handleSelect = async (service: any) => {
    setLoading(true);
    setSelectedService(service);
    setLoading(false);
    onNext();
  };

  

  return (
    <div className="container-form">
      <div className="space-y-8">
        <div className="flex justify-center text-center mb-8">
          <div className="max-w-[40rem] text-center">
            <h1 className="heading-form">
              {" "}
              Hi there! Let us know{" "}
              <span className="text-accentColor">what you need </span>—choose
              one of the options below 
            </h1>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => handleCategorySelect({ id: "all", name: "All" })}
            className={`px-4 py-2 rounded-lg transition-all border border-accentColor duration-300 ${
              selectedCategory.id === "all"
                  ? "bg-accentLight text-accentColor border-accentColor"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 border-gray-600"
            }`}
          >
            All
          </button>
          {categories?.map((category: any) => (
            <button
              key={category.id}
              onClick={() => handleCategorySelect(category)}
              className={`px-4 py-2 rounded-lg transition-all border border-accentColor duration-300 ${
                selectedCategory.id === category.id
                  ? "bg-accentLight text-accentColor border-accentColor"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 border-gray-600"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="mt-12 flex flex-col justify-center items-center h-full">
          <div className="max-w-[70rem]">
            <div className="space-y-8">
              <div
                className="flex flex-wrap justify-center gap-6 sm:gap-6"
                style={{ marginTop: "15px", width: "100%" }}
              >
                {filteredServices.length > 0 ? (
                  filteredServices.map((service) => (
                    <div
                      key={service.id}
                      className="group w-full sm:w-[300px] rounded-lg duration-300 cursor-pointer overflow-hidden transition-all transform hover:scale-100 sm:hover:scale-105"
                      onClick={() => handleSelect(service)}
                    >
                      {/* Image container with promo badge */}
                <div className="relative pt-[66.666%]">
                  <img
                    src={service.photo}
                    alt={service.name}
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-b-lg"
                  />
                  {service.promo && (
                    <div className="absolute bottom-2 left-2 flex items-center bg-green-500/20 backdrop-blur-lg  px-3 py-1 rounded-full">
                      <i className="fi fi-rr-ticket flex items-center text-center mr-2 h-4 w-4 text-white"></i>
                      <span className="text-sm font-medium text-white">
                        {service.promo}
                      </span>
                    </div>
                  )}
                </div>

                      {/* Service name */}
                      <div className="text-left pt-4">
                        <span className="text-gray-800 text-lg font-medium">
                          {service.name}
                        </span>
                      </div>

                      {/* Service description */}
                      <div className=" text-gray-500 pt-2">
                        <p className="text-sm">
                          {service.description || "No description available."}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center text-gray-500">
                    No services found in this category
                  </div>
                )}
              </div>
            </div>
          </div>
          {loading && (
            <div className="flex justify-center pt-20">
              <div className="animate-spin h-6 w-6 border-2 border-accentColor border-t-transparent rounded-full"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Step3Specifications;

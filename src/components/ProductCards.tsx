import React from "react";

interface Service {
  id: string;
  name: string;
  photo: string;
  description: string;
  promo: string;
}

interface ProductCardsProps {
  services: Service[];
  handleServiceSelect: (service: Service) => void;
}

const ProductCards: React.FC<ProductCardsProps> = ({
  services,
  handleServiceSelect,
}) => {
  const sortedServices = [...services].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <div>
      <div className="space-y-8">
        <div
          className="flex flex-wrap justify-between gap-6 sm:gap-8"
          style={{ marginTop: "15px", width: "100%" }}
        >
          {sortedServices.length > 0 &&
            sortedServices.map((service) => (
              <div
                key={service.id}
                className="group w-full sm:w-[380px] rounded-lg duration-300 cursor-pointer overflow-hidden transition-all transform hover:scale-100 sm:hover:scale-105"
                onClick={() => handleServiceSelect(service)}
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

                {/* Rest of the card content */}
                <div className="text-left pt-4">
                  <span className="text-gray-800 text-lg font-medium">
                    {service.name}
                  </span>
                </div>

                <div className="text-gray-500 pt-2">
                  <p className="text-sm">
                    {service.description || "No description available."}
                  </p>
                </div>

                <div className="flex justify-left my-4">
                  <button className="py-2 px-4 bg-transparent text-gray-800 border border-gray-800 rounded-lg group-hover:border-accentColor group-hover:bg-accentLight group-hover:text-accentColor transition duration-300">
                    Request a Quote
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCards;

import React from 'react';
import IconComponent from '@/hooks/IconComponent';

interface Service {
  id: string;
  name: string;
}

interface CategoriesProps {
  services: Service[];
  handleServiceSelect: (service: Service) => void;
}

const Categories: React.FC<CategoriesProps> = ({ services, handleServiceSelect }) => {

  // Sort services alphabetically by service name
  const sortedServices = [...services].sort((a, b) => 
    a.name.localeCompare(b.name)
  );

  return (
    <div>
      <div className="space-y-8">
        <div className=" flex flex-wrap justify-start gap-4 sm:gap-[20px]" style={{ marginTop: '15px', width: '100%' }}>
          {sortedServices.length > 0 ? (
            sortedServices.map((service) => (
              <div
                key={service.id}
                className="flex flex-row sm:flex-col items-center justify-start w-full sm:w-[150px] h-auto rounded-xl hover:scale-100 sm:hover:scale-105 transform transition-transform bg-transparent group"
                onClick={() => handleServiceSelect(service)}
              >
                <IconComponent name={service.name} className="w-14 h-14 sm:w-16 sm:h-16" />
                <span className="text-gray-800 text-base font-medium text-left sm:text-center group-hover:text-accentColor">
                  {service.name}
                </span>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 mt-8">
              Sorry, we don't serve your area at the moment.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Categories;
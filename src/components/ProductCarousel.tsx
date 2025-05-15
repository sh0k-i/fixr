import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Service {
  id: string;
  name: string;
  photo: string;
  description: string;
  promo: string;
}

interface ProductCarouselProps {
  services: Service[];
  handleServiceSelect: (service: Service) => void;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({
  services,
  handleServiceSelect,
}) => {
  const sliderRef = useRef<Slider>(null);
  const sortedServices = [...services].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const Arrow = ({ direction, onClick }: { direction: "left" | "right", onClick: () => void }) => (
    <button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 z-10 p-2 rounded-full transition-all ${
        direction === "left" ? "left-0" : "right-0"
      }`}
    >
      <svg
        className="w-6 h-6 text-gray-800"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {direction === "left" ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        )}
      </svg>
    </button>
  );

  return (
    <div className="relative px-10">
      <Slider ref={sliderRef} {...settings}>
        {sortedServices.map((service) => (
          <div key={service.id} className="px-2">
            <div
              className="group rounded-lg duration-300 cursor-pointer overflow-hidden transition-all transform hover:scale-100 sm:hover:scale-105"
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
                  <div className="absolute bottom-2 left-2 flex items-center bg-green-500/20 backdrop-blur-lg px-3 py-1 rounded-full">
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
          </div>
        ))}
      </Slider>

      <Arrow direction="left" onClick={() => sliderRef.current?.slickPrev()} />
      <Arrow direction="right" onClick={() => sliderRef.current?.slickNext()} />
    </div>
  );
};

export default ProductCarousel;
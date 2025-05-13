import React, { useState } from "react";
import { useAppContext } from "@/context/AppContext";
import BlurFade from "../ui/blur-fade";
import IconComponent from "@/hooks/IconComponent";

// Define props interface
interface Step1SelectionProps {
  onNext: () => void;
}

const Step1Selection: React.FC<Step1SelectionProps> = ({ onNext }) => {
  const { categories, contractor, setSelectedCategory } = useAppContext();
  const [loading, setLoading] = useState<boolean>(false); // State to control spinner
  const params = new URLSearchParams(window.location.search);
  const initial = params.get("firstname");
  const test = params.get("test");
  const accent_rgba = contractor.colors.accent_rgba || '0 10px 25px -6px rgba(0, 0, 0, 0.1)';

  // Utility function to capitalize the first letter
  const capitalizeFirstLetter = (string: string | null) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const firstname = capitalizeFirstLetter(initial) || "there";

  const handleServiceSelect = async (category: any) => {
    setLoading(true); // Show spinner
    setSelectedCategory(category); // Save the entire service item
    setLoading(false); // Hide spinner
    onNext();
  };

  // Sort categories alphabetically
  const sortedCategories = [...categories].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <div className="container-form">
      <div className="space-y-8">
        <div className="flex justify-center text-center mb-8">
          <div className="max-w-[40rem] text-center">
            <h1 className="heading-form">
              {test !== "B" && test !== "b" ? `Hi ${firstname}! ` : ""}
              Let's bring your{" "}
              <span className="text-accentColor">future project</span> to
              life—choose what fits your vision below
            </h1>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="max-w-[50rem] space-y-8">
            <div
              className=" flex flex-wrap justify-center gap-4 sm:gap-[20px]"
              style={{ marginTop: "15px", width: "100%" }}
            >
              {sortedCategories?.length > 0 ? (
                sortedCategories.map((category) => (
                  <div
                    key={category.id}
                    className="flex flex-row sm:flex-col items-center justify-start sm:justify-center w-full sm:w-[210px] h-[80px] sm:h-[156px] border border-transparent rounded-xl shadow-md p-4 transition-all transform hover:scale-100 sm:hover:scale-105 bg-white"
                    onClick={() => handleServiceSelect(category)}
                    style={{
                      boxShadow: 'rgba(0, 0, 0, 0.07) 0px 22px 30px -6px',
                      borderColor: 'rgba(157, 176, 197, 0.25)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `${accent_rgba} 0px 10px 25px -6px`;
                      e.currentTarget.style.borderColor = accent_rgba;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.07) 0px 10px 25px -6px';
                      e.currentTarget.style.borderColor = 'rgba(157, 176, 197, 0.25)';
                    }}    
                  >
                    <IconComponent
                      name={category.name}
                      className="w-14 h-14 sm:w-16 sm:h-16"
                    />
                    <span className="text-gray-800 text-base font-medium text-left sm:text-center group-hover:text-accentColor">
                      {category.name}
                    </span>
                  </div>
                ))
              ) : (
                <BlurFade
                  delay={3 * 0.15}
                  yOffset={0}
                  className="text-center text-gray-500 mt-8"
                >
                  Sorry, we don't serve your area at the moment.
                </BlurFade>
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
  );
};

export default Step1Selection;

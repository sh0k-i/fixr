import React from "react";
import iconMapping from "@/lib/iconMapping";

interface IconComponentProps {
  name: string;
  className?: string;
}

const IconComponent: React.FC<IconComponentProps> = ({ name, className }) => {
  // Normalize the name and find the first matching keyword
  const normalizedName = name.toLowerCase();
  const matchedKey = Object.keys(iconMapping).find(key =>
    normalizedName.includes(key.toLowerCase())
  );

  const Icon = matchedKey ? iconMapping[matchedKey] : null;

  // Optional: Add default icon for unmatched cases
  return Icon ? (
    <Icon className={className} />
  ) : (
    <span className={className}>🔍</span> // Fallback icon
  );
};

export default IconComponent;
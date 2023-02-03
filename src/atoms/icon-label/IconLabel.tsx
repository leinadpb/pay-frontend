import React from "react";

interface IconLabelProps {
  label: string;
  icon: React.ReactNode;
}
const IconLabel: React.FC<IconLabelProps> = ({ label, icon }) => {
  return (
    <div className="flex space-x-4 w-full text-center justify-center items-center">
      <span className="mr-8">{label}</span>
      <div className="ml-4 transition-transform group-hover:translate-x-2">
        {icon}
      </div>
    </div>
  );
};

export default IconLabel;

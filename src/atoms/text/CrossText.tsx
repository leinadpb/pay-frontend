import React from "react";

interface CrossTextProps {
  label: string;
}
const CrossText: React.FC<CrossTextProps> = ({ label }) => {
  return (
    <div className={"text-center relative"}>
      <div className="h-1 w-full bg-gray-300 absolute top-12"></div>
      <span className="text-sm text-gray-500 bg-white p-4 relative">
        {label}
      </span>
    </div>
  );
};

export default CrossText;

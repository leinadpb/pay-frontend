import React from "react";
import Heading from "../heading/Heading";

export interface BannerProps {
  title: string;
  message: string;
}
const Banner: React.FC<BannerProps> = ({ title, message }) => {
  return (
    <div className="bg-secondary-200 rounded p-24">
      <Heading
        label={title}
        type="h6"
        fontWeight={"font-bold"}
        color={"primary"}
      />
      <div className="mt-8">
        <span className="text-gray-500">{message}</span>
      </div>
    </div>
  );
};

export default Banner;

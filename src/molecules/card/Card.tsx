import Heading from "@/atoms/heading/Heading";
import React from "react";

export interface CardProps {
  fullWidth?: boolean;
  fullHeight?: boolean;
  full?: boolean;
  content?: React.ReactNode;
  title?: string;
  renderTitle?: () => React.ReactNode;
}
const Card: React.FC<CardProps> = ({
  fullWidth = false,
  fullHeight = false,
  full = false,
  content,
  title,
  renderTitle,
}) => {
  let fullClass;
  if (fullWidth) {
    fullClass = "w-full";
  } else if (fullHeight) {
    fullClass = "min-h-screen w-198";
  } else if (full) {
    fullClass = "w-full h-full";
  }

  const widthClass = !fullClass ? "w-auto" : fullClass;

  return (
    <div className={`${widthClass} bg-white rounded p-32 shadow`}>
      {renderTitle && <div className={"mb-12"}>{renderTitle()}</div>}
      {title && !renderTitle && (
        <div className={"mb-12"}>
          <Heading label={title} type={"h6"} />
        </div>
      )}
      <div>{content}</div>
    </div>
  );
};

export default Card;

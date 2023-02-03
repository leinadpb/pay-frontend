import { ButtonColorType } from "@/common/types";
import React from "react";
import { getBg, getCursor, getTextColor } from "./Button.helpers";

interface LinkButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  color?: ButtonColorType;
}
const LinkButton: React.FC<LinkButtonProps> = ({
  label,
  onClick,
  disabled = false,
  color = "primary",
}) => {
  const bgColor = !disabled ? getBg(color, false, disabled) : "";
  const textColor = getTextColor(color, false, disabled);
  const pointer = getCursor(disabled);
  return (
    <div className={`p-8 w-auto ${bgColor} ${textColor}`} onClick={onClick}>
      <span className={`text-sm ${pointer}`}>{label}</span>
    </div>
  );
};

export default LinkButton;

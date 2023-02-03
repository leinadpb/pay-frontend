import { ButtonColorType } from "@/common/types";
import React, { MouseEvent, useMemo } from "react";
import IconLabel from "../icon-label/IconLabel";
import {
  getBg,
  getBorder,
  getCommon,
  getCursor,
  getHover,
  getTextColor,
  getWidth,
} from "./Button.helpers";

export interface ButtonProps {
  disabled?: boolean;
  icon?: React.ReactNode;
  text?: string;
  renderText?: () => React.ReactNode;
  renderBorder?: string;
  outlined?: boolean;
  fullWidth?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  color?: ButtonColorType;
  type?: "button" | "submit" | "reset" | undefined;
}
const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  disabled = false,
  outlined = false,
  fullWidth = false,
  color = "primary",
  type = "button",
  renderText,
  onClick,
  renderBorder,
}) => {
  const buttonContent = renderText ? (
    renderText()
  ) : !!icon ? (
    <IconLabel label={text ?? ""} icon={icon} />
  ) : (
    <span>{text}</span>
  );

  const buttonStyle = useMemo(() => {
    const bg = getBg(color, outlined, disabled);
    const textColor = getTextColor(color, outlined, disabled);
    const hover = getHover(color, outlined, disabled);
    const border = !!renderBorder
      ? renderBorder
      : outlined
      ? getBorder(color, disabled)
      : "";
    const cursor = getCursor(disabled);
    const width = getWidth(fullWidth);

    return `${getCommon()} ${bg} ${textColor} ${hover} ${border} ${cursor} ${width}`;
  }, [outlined, disabled, fullWidth, color, renderBorder]);

  return (
    <button
      className={buttonStyle}
      type={type}
      disabled={disabled}
      onClick={(e: MouseEvent<HTMLButtonElement>) => {
        if (onClick) {
          onClick(e);
        }
      }}
    >
      {buttonContent}
    </button>
  );
};

export default Button;

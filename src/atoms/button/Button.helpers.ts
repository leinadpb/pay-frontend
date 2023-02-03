import { ButtonColorType } from "@/common/types";

export const getCommon = () => {
  // "group" class is being used to handle :hover events and trigger actions on sub-components
  return "group button-padding text-center rounded";
};

export const getBg = (
  color: ButtonColorType,
  outlined: boolean,
  disabled: boolean
) => {
  if (outlined) {
    return "bg-transparent";
  }

  if (disabled) {
    return "bg-gray-200";
  }

  if (color === "secondary") {
    return "bg-secondary-600";
  }

  if (color === "tertiary") {
    return "bg-white";
  }

  return "bg-primary-700";
};

export const getTextColor = (
  color: ButtonColorType,
  outlined: boolean,
  disabled: boolean
) => {
  if (disabled) {
    return "text-gray-500";
  }

  if (color === "tertiary") {
    return "text-primary-700";
  }

  if (!outlined) {
    return "text-white";
  }

  if (color === "secondary") {
    return "text-secondary-600";
  }

  return "text-primary-700";
};

export const getHover = (
  color: ButtonColorType,
  outlined: boolean,
  disabled: boolean
) => {
  if (disabled) {
    return "";
  }

  if (color === "secondary") {
    return outlined
      ? "hover:border-secondary-500 hover:text-secondary-500"
      : "hover:bg-secondary-500";
  }

  if (color === "tertiary") {
    return outlined
      ? "hover:border-tertiary-500 hover:text-tertiary-500"
      : "hover:bg-gray-50";
  }

  return outlined
    ? "hover:border-primary-500 hover:text-primary-500"
    : "hover:bg-primary-600";
};

export const getBorder = (color: ButtonColorType, disabled: boolean) => {
  if (disabled) {
    return "border border-gray-500";
  }

  if (color === "secondary") {
    return "border border-secondary-600";
  }

  if (color === "tertiary") {
    return "border border-tertiary-700";
  }

  return "border border-primary-700";
};

export const getCursor = (disabled: boolean) => {
  if (disabled) {
    return "cursor-not-allowed";
  }

  return "cursor-pointer";
};

export const getWidth = (fullWidth: boolean) => {
  if (fullWidth) {
    return "w-full";
  }

  return "";
};

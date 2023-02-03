export type ColorType = "primary" | "secondary";
export type ButtonColorType = ColorType | "tertiary";

export type IconType = "chevron-right";

// This will pre-load all these classes, we need this this way because the "headings" colors are dynamically changed.
export type ITextColorClass =
  | "text-primary-50"
  | "text-primary-100"
  | "text-primary-200"
  | "text-primary-300"
  | "text-primary-400"
  | "text-primary-500"
  | "text-primary-600"
  | "text-primary-700"
  | "text-primary-800"
  | "text-primary-900"
  | "text-secondary-50"
  | "text-secondary-100"
  | "text-secondary-200"
  | "text-secondary-300"
  | "text-secondary-400"
  | "text-secondary-500"
  | "text-secondary-600"
  | "text-secondary-700"
  | "text-secondary-800"
  | "text-secondary-900"
  | "text-gray-50"
  | "text-gray-100"
  | "text-gray-200"
  | "text-gray-300"
  | "text-gray-400"
  | "text-gray-500"
  | "text-gray-600"
  | "text-gray-700"
  | "text-gray-800"
  | "text-gray-900";

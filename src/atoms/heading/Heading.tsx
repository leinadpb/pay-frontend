import { ColorType, ITextColorClass } from "@/common/types";

type FontWeight = "font-normal" | "font-medium" | "font-semibold" | "font-bold";
export interface HeadingProps {
  label: string;
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  color?: ColorType | "gray";
  colorWeight?: number;
  fontWeight?: FontWeight;
}
const Heading: React.FC<HeadingProps> = ({
  label,
  type,
  color = "gray",
  colorWeight = 700,
  fontWeight = "font-normal",
}) => {
  const colorClass: ITextColorClass | string = `text-${color}-${colorWeight}`;
  const finalClass = `${colorClass} ${fontWeight}`;

  if (type === "h2") {
    return <h2 className={finalClass}>{label}</h2>;
  }
  if (type === "h3") {
    return <h3 className={finalClass}>{label}</h3>;
  }
  if (type === "h4") {
    return <h4 className={finalClass}>{label}</h4>;
  }
  if (type === "h5") {
    return <h5 className={finalClass}>{label}</h5>;
  }
  if (type === "h6") {
    return <h6 className={finalClass}>{label}</h6>;
  }

  return <h1 className={finalClass}>{label}</h1>;
};

export default Heading;

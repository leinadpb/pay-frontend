import { SvgProps } from "./common";

const ChevronSvg: React.FC<SvgProps> = ({ width = 8, height = 12 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 9 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="stroke-current"
    >
      <path
        d="M0.999999 1L8 8L1 15"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronSvg;

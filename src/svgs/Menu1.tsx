import { SvgProps } from "./common";

const Menu1: React.FC<SvgProps> = ({ width = 8, height = 12 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="stroke-current cursor-pointer"
    >
      <path
        d="M1 1H17M1 7H9M1 13H17"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Menu1;

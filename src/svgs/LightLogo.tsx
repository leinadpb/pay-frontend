import Image from "next/image";
import LogoSvg from "../../public/assets/logos/desktop-logo-light.svg";

const LightLogo = () => {
  return (
    <Image
      className="mr-4"
      width={210}
      height={100}
      src={LogoSvg}
      alt={"Cryptopay"}
      priority
    />
  );
};

export default LightLogo;

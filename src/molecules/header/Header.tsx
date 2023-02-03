import Button from "@/atoms/button/Button";
import useAuth from "@/hooks/useAuth";
import ChevronSvg from "@/svgs/Chevron";
import LightLogo from "@/svgs/LightLogo";
import Menu1 from "@/svgs/Menu1";
import { useRouter } from "next/router";
import React from "react";

export interface HeaderProps {
  actionButtonText?: string;
}
const Header: React.FC<HeaderProps> = ({ actionButtonText = "Ingresar" }) => {
  const { isLoggedIn, logout } = useAuth();
  const router = useRouter();

  const handleAction = () => {
    if (isLoggedIn) {
      logout();
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="w-full bg-white shadow flex justify-center items-center py-20 px-34 sm:grid-cols-2 sm:grid relative">
      <div className="absolute left-8 top-0 h-full flex justify-center items-center sm:hidden">
        <Menu1 width={16} height={16} />
      </div>
      <LightLogo />
      <div className="hidden sm:flex sm:justify-end">
        <Button
          text={!isLoggedIn ? "Ingresar" : "Cerrar sesión"}
          icon={<ChevronSvg />}
          onClick={handleAction}
        />
      </div>
    </div>
  );
};

export default Header;

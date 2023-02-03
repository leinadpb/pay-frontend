import Button from "@/atoms/button/Button";
import useAuth from "@/hooks/useAuth";
import LightLogo from "@/svgs/LightLogo";
import LogoutIcon from "@/svgs/LogoutIcon";
import React from "react";

const AppTemplate = ({ children }: React.PropsWithChildren) => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="flex relative">
      <div className="absolute p-8 h-screen top-0 left-0 w-160 shadow flex flex-col justify-between items-center">
        <div className="w-full p-16">
          <LightLogo />
        </div>
        <div>
          <Button
            text="Cerrar sesión"
            onClick={handleLogout}
            color={"tertiary"}
            fullWidth
            renderText={() => (
              <div className="w-full flex justify-center items-center">
                <div className="mr-16 rotate-90">
                  <LogoutIcon width={16} height={16} />
                </div>
                <div>
                  <span className="text-sm">Logout</span>
                </div>
              </div>
            )}
          />
        </div>
      </div>
      <div className="absolute p-24 top-0 left-164 w-[calc(100vw_-_164px)] overflow-y-auto overflow-x-hidden">
        {children}
      </div>
    </div>
  );
};

export default AppTemplate;

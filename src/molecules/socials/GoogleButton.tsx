import Button, { ButtonProps } from "@/atoms/button/Button";
import GoogleIcon from "@/svgs/GoogleIcon";
import React from "react";

const GoogleButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      renderText={() => (
        <div className="flex justify-center items-center">
          <GoogleIcon /> <span className="ml-12">Ingresar con Google</span>
        </div>
      )}
      renderBorder={"border border-primary-700"}
      color={"tertiary"}
    />
  );
};

export default GoogleButton;

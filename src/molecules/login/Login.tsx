import Button from "@/atoms/button/Button";
import Heading from "@/atoms/heading/Heading";
import InputField from "@/atoms/input/InputField";
import CrossText from "@/atoms/text/CrossText";
import { validateEmail } from "@/common/helpers";
import React, { FormEvent, useState } from "react";
import Card from "../card/Card";
import GoogleButton from "../socials/GoogleButton";

export interface LoginProps {
  onFinish?: (email: string) => Promise<void>;
  onSocialLogin?: () => Promise<void>;
}
const Login: React.FC<LoginProps> = ({ onFinish, onSocialLogin }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string>();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    let error;

    if (!email) {
      error = "Email is required.";
    }

    if (!validateEmail(email)) {
      error = "Email is invalid.";
    }

    setError(error);

    if (error || !onFinish) {
      return;
    }

    setLoading(true);
    try {
      await onFinish(email);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card
      renderTitle={() => (
        <div className="text-center">
          <Heading
            label="Bienvenido"
            type="h4"
            color={"primary"}
            fontWeight="font-semibold"
          />
        </div>
      )}
      content={
        <form className="text-center" onSubmit={onSubmit}>
          <div className="mt-16 mb-24">
            <span>Continua con Google o utiliza tus credenciales</span>
          </div>
          <div className="mb-32">
            <GoogleButton onClick={onSocialLogin} />
          </div>
          <div className="mb-32">
            <CrossText label="Usar cuenta existente" />
          </div>
          <div className="mb-56">
            <InputField
              label={"Email"}
              value={email}
              onChange={setEmail}
              errorMessage={error}
              required
              fullWidth
              disabled={loading}
            />
          </div>
          <div className="mb-20">
            <Button text="Continuar" type="submit" />
          </div>
          {/* <div className="mb-16">
            <span>
              No tienes una cuenta?{" "}
              <span className="font-bold">Crear cuenta</span>
            </span>
          </div> */}
        </form>
      }
    />
  );
};

export default Login;

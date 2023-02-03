import Login from "@/molecules/login/Login";
import OtpValidator from "@/molecules/otp-validator/OtpValidator";
import React, { useCallback, useState, useEffect, ReactElement } from "react";
import { WALLET_ADAPTERS } from "@web3auth/base";
import useWeb3 from "@/hooks/useWeb3";
import useAuth from "@/hooks/useAuth";
import Card from "@/molecules/card/Card";
import Heading from "@/atoms/heading/Heading";
import PublicTemplate from "@/organism/PublicTemplate";
import LinkButton from "@/atoms/button/LinkButton";
import { useAuthApi } from "@/api/auth.api";
import { useEnv } from "@/hooks/useEnv";

const BLOCK_RESEND_MS = 30000; // @todo make this configurable through ENV variables

const LoginPage = () => {
  const { login } = useAuth();
  const [sentOpt, setSentOpt] = useState<boolean>(false);
  const [email, setEmail] = useState<string>();
  const { googleLogin, emailLogin } = useWeb3();
  const [blockResend, setBlockResend] = useState<boolean>(true);

  const { sendCode, validateCode } = useAuthApi();
  const { auth0, web3Auth } = useEnv();

  const resendAuthCode = async (_email?: string) => {
    if (!_email) {
      return;
    }

    await sendCode(_email);
    setBlockResend(true);
  };

  const handleLogin = async (_email: string) => {
    setEmail(_email);
    await sendCode(_email);
    setBlockResend(true);
    setSentOpt(true);
  };

  useEffect(() => {
    if (!blockResend) {
      return;
    }

    setTimeout(() => {
      setBlockResend(false);
    }, BLOCK_RESEND_MS);
  }, [blockResend]);

  const handleOptValidation = useCallback(
    async (optCode: string) => {
      if (!email) {
        return;
      }

      const res = await validateCode(email, optCode);

      const idToken = res?.data?.id_token;

      if (!idToken) {
        return;
      }

      // Authenticate web3auth
      const web3Instance = await emailLogin();
      await web3Instance?.connectTo(WALLET_ADAPTERS.OPENLOGIN, {
        loginProvider: "jwt",
        extraLoginOptions: {
          id_token: idToken,
          verifierIdField: web3Auth.emailVerifierId,
        },
      });

      login({
        email,
      });
    },
    [email, login, validateCode, emailLogin]
  );

  const handleGoogleLogin = async () => {
    const web3Instance = await googleLogin();

    try {
      await web3Instance?.connectTo(WALLET_ADAPTERS.OPENLOGIN, {
        loginProvider: "google",
        extraLoginOptions: {
          domain: auth0.domain,
          verifierIdField: web3Auth.googleVerifierId,
        },
      });

      login({
        email: "",
      });
    } catch (e) {
      console.error(e);
      return;
    }
  };

  return (
    <div className={`${sentOpt ? "mt-32" : "mt-80"} pl-64 pr-64`}>
      {!sentOpt ? (
        <Login onFinish={handleLogin} onSocialLogin={handleGoogleLogin} />
      ) : (
        <div className="flex flex-col justify-center items-center gap-40">
          <Card
            content={
              <div className="text-center">
                <Heading
                  type={"h6"}
                  label={"Ingresa el código"}
                  color={"primary"}
                />
                <div className="max-w-md break-words mt-24 mb-24">
                  <span>Por favor introduzca el código enviado a {email}</span>
                </div>
                <OtpValidator onFinish={handleOptValidation} />
                <div className="mt-24 text-center w-full">
                  <div>
                    <span>No recibí el código</span>
                  </div>
                  <LinkButton
                    color="tertiary"
                    label={"Reenviar Código"}
                    onClick={() => resendAuthCode(email)}
                    disabled={blockResend}
                  />
                </div>
              </div>
            }
          />
        </div>
      )}
    </div>
  );
};

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return <PublicTemplate>{page}</PublicTemplate>;
};

export default LoginPage;

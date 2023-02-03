export type Auth0Config = {
  clientId: string;
  domain: string;
  appName: string;
  uxMode: "popup" | "redirect";
};

export type Web3AuthConfig = {
  googleVerifierId: string;
  emailVerifierId: string;
  clientId: string;
  logging: boolean;
  network: any;
};

type EnvConfig = {
  auth0: Auth0Config;
  web3Auth: Web3AuthConfig;
};

export const useEnv = (): EnvConfig => {
  const auth0Domain = process.env.AUTH0_DOMAIN!;
  const auth0ClientId = process.env.AUTH0_CLIENT_ID!;
  const auth0UxMode = process.env.AUTH0_UX_MODE!;
  const auth0AppName = process.env.AUTH0_APP_NAME!;

  const googleVerifierId = process.env.GOOGLE_VERIFIER_ID!;
  const emailVerifierId = process.env.EMAIL_VERIFIER_ID!;
  const web3AuthClientId = process.env.WEB3_AUTH_CLIENT_ID!;
  const loggingWeb3Auth = process.env.WEB3_AUTH_LOGGING === "true";
  const web3Network = process.env.WEB3_AUTH_NETWORK!;

  return {
    auth0: {
      domain: auth0Domain,
      clientId: auth0ClientId,
      uxMode: auth0UxMode as "redirect" | "popup",
      appName: auth0AppName,
    },
    web3Auth: {
      googleVerifierId,
      emailVerifierId,
      clientId: web3AuthClientId,
      logging: loggingWeb3Auth,
      network: web3Network,
    },
  };
};

import { Web3ActionType, Web3Context } from "@/context/web3.context";
import { CHAIN_NAMESPACES } from "@web3auth/base";
import { Web3AuthCore } from "@web3auth/core";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import { useCallback, useContext, useEffect } from "react";
import { Auth0Config, useEnv, Web3AuthConfig } from "./useEnv";

type Web3AuthVerifier = "cryptopay-google" | "cryptopay-auth0";

export const buildAdapter = (
  verifier: Web3AuthVerifier,
  config: Auth0Config
) => {
  return new OpenloginAdapter({
    adapterSettings: {
      uxMode: config.uxMode,
      loginConfig: {
        jwt: {
          verifier,
          typeOfLogin: "jwt",
          clientId: config.clientId, // "YOUR-AUTH0-CLIENT-ID-FROM-AUTH0-DASHBOARD",
          name: config.appName,
        },
      },
    },
  });
};

export const buildWeb3 = (
  adapter: OpenloginAdapter,
  config: Web3AuthConfig
): Web3AuthCore => {
  const web3auth = new Web3AuthCore({
    clientId: config.clientId, // web3auth clientId
    web3AuthNetwork: config.network,
    chainConfig: {
      chainNamespace: CHAIN_NAMESPACES.OTHER, // SOLANA, OTHER
      chainId: "0x1",
    },
    enableLogging: config.logging,
  });

  web3auth.configureAdapter(adapter);

  return web3auth;
};

const useWeb3 = () => {
  const { web3Auth, auth0 } = useEnv();
  const { web3, userInfo, dispatch } = useContext(Web3Context);

  const fetchWeb3User = useCallback(async (_web3: Web3AuthCore) => {
    try {
      const userInfo = await _web3.getUserInfo();

      if (dispatch) {
        dispatch({
          type: Web3ActionType.SET_USER_INFO,
          payload: userInfo,
        });
      }
    } catch (e: any) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    if (!web3) {
      return;
    }

    fetchWeb3User(web3);
  }, [web3]);

  const googleLogin = useCallback(async () => {
    if (!dispatch) {
      return;
    }

    const openLoginAdapter = buildAdapter("cryptopay-google", auth0);

    const _web3 = buildWeb3(openLoginAdapter, web3Auth);
    await _web3.init();

    if (_web3.status === "connected") {
      // Auto disconnet
      await _web3.logout();
    }

    dispatch({
      type: Web3ActionType.GOOGLE_LOGIN,
      payload: _web3,
    });

    return _web3;
  }, [web3Auth, auth0]);

  const emailLogin = useCallback(async () => {
    if (!dispatch) {
      return;
    }

    const openLoginAdapter = buildAdapter("cryptopay-auth0", auth0);

    const _web3 = buildWeb3(openLoginAdapter, web3Auth);
    await _web3.init();

    if (_web3.status === "connected") {
      // Auto disconnet
      await _web3.logout();
    }

    dispatch({
      type: Web3ActionType.EMAIL_LOGIN,
      payload: _web3,
    });

    return _web3;
  }, [auth0, web3Auth]);

  return {
    web3,
    userInfo,
    googleLogin,
    emailLogin,
  };
};

export default useWeb3;

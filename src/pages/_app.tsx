import { AuthContextProvider } from "@/context/auth.context";
import { Web3ContextProvider } from "@/context/web3.context";
import Header from "@/molecules/header/Header";
import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import React, { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: ReactNode) => page);

  return (
    <Web3ContextProvider>
      <AuthContextProvider>
        {getLayout(<Component {...pageProps} />)}
      </AuthContextProvider>
    </Web3ContextProvider>
  );
}

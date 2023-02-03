import React, { useReducer } from "react";
import { Web3AuthCore } from "@web3auth/core";

interface IWeb3State {
  web3?: Web3AuthCore;
  userInfo?: any;
  dispatch?: React.Dispatch<Web3Action>;
}

export enum Web3ActionType {
  GOOGLE_LOGIN = "GOOGLE_LOGIN",
  EMAIL_LOGIN = "EMAIL_LOGIN",
  SET_USER_INFO = "SET_USER_INFO",
}

type Web3Action = {
  type: Web3ActionType;
  payload?: object;
};

export const Web3Context = React.createContext<IWeb3State>({});

const web3Reducer = (state: IWeb3State, action: Web3Action): IWeb3State => {
  switch (action.type) {
    case Web3ActionType.GOOGLE_LOGIN:
    case Web3ActionType.EMAIL_LOGIN:
      return { ...state, web3: action.payload as Web3AuthCore };
    case Web3ActionType.SET_USER_INFO: {
      return { ...state, userInfo: action.payload };
    }
    default:
      return { ...state };
  }
};

export const Web3ContextProvider = ({ children }: React.PropsWithChildren) => {
  const [state, dispatch] = useReducer(web3Reducer, {});

  return (
    <Web3Context.Provider value={{ ...state, dispatch }}>
      {children}
    </Web3Context.Provider>
  );
};

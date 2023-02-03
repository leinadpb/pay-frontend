import { useRouter } from "next/router";
import React, { useEffect, useReducer } from "react";

export interface LoggedUser {
  email: string;
}

interface IAuthState {
  loggedUser?: LoggedUser;
  dispatch?: React.Dispatch<AuthAction>;
}

export enum AuthActionType {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
  SET_WEB3 = "SET_WEB3",
}

type AuthAction = {
  type: AuthActionType;
  payload?: object;
};

export const AuthContext = React.createContext<IAuthState>({});

const authReducer = (state: IAuthState, action: AuthAction): IAuthState => {
  switch (action.type) {
    case AuthActionType.LOGIN:
      return { ...state, loggedUser: action.payload as LoggedUser };
    case AuthActionType.LOGOUT:
      return { ...state, loggedUser: undefined };
    default:
      return { ...state };
  }
};

export const AuthContextProvider = ({ children }: React.PropsWithChildren) => {
  const router = useRouter();
  const [state, dispatch] = useReducer(authReducer, {});

  useEffect(() => {
    if (!router) {
      return;
    }

    if (!!state.loggedUser) {
      router.push("/quoter");
    } else {
      router.push("/login");
    }
  }, [state.loggedUser]);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

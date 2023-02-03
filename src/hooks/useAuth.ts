import {
  AuthActionType,
  AuthContext,
  LoggedUser,
} from "@/context/auth.context";
import { useCallback, useContext } from "react";

const useAuth = () => {
  const { loggedUser, dispatch } = useContext(AuthContext);

  const login = useCallback(
    (user: LoggedUser) => {
      if (!dispatch) {
        return;
      }

      dispatch({
        type: AuthActionType.LOGIN,
        payload: user,
      });
    },
    [dispatch]
  );

  const logout = useCallback(() => {
    if (!dispatch) {
      return;
    }

    dispatch({
      type: AuthActionType.LOGOUT,
    });
  }, [dispatch]);

  return {
    login,
    logout,
    loggedUser,
    isLoggedIn: !!loggedUser,
  };
};

export default useAuth;

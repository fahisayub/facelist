import { UserProps } from "../../components/LoginForm";
import * as types from "./auth.types";

export interface authProps {
  isLoading: boolean;
  isError: boolean;
  user?: UserProps;
  isAuth: boolean;
}

let initState:authProps = {
  isLoading: false,
  isError: false,
  user: {username: "", password: "",},
  isAuth: false,
};

export const authReducer:any = (state:authProps = initState, { type, payload }) => {
  switch (type) {
    case types.LOGIN_USER_LOADING:
      return { ...state, isLoading: true, isError: false };
    case types.LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        user: payload,
        isAuth: true,
      };
    case types.LOGIN_USER_FAILURE:
      return { ...state, isLoading: false, isError: true };

    case types.LOGOUT_USER_LOADING:
      return { ...state, isLoading: true, isError: false };
    case types.LOGOUT_USER_SUCCESS:
      return { ...state, isLoading: false, isError: false, isAuth: false };
    case types.LOGOUT_USER_FAILURE:
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
};

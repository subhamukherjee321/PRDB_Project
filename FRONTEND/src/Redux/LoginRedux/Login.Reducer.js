import {
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT,
    LOGIN_RESET
  } from "./Login.ActionTypes";

  import {
    setItemToStorage,
    getItemFromStorage,
    removeItemFromStorage,
  } from "../../Data/localStorage";
  
  const loginData = getItemFromStorage("loginData") || {};
  
  const initState = {
    isLoading: false,
    isAuth: false,
    isError: false,
    message: null,
    data: loginData,
  };
  
  const LoginReducer = (state = initState, { type, payload }) => {
    switch (type) {
      case LOGIN_LOADING: {
        return {
          ...state,
          isLoading: true
        };
      }
      case LOGIN_SUCCESS: {
        localStorage.setItem("loginData", JSON.stringify(payload));
        return {
          ...state,
          isLoading: false,
          isAuth: true,
          message: payload.message,
          data: payload
        };
      }
      case LOGIN_ERROR: {
        return {
          ...state,
          isLoading: false,
          isError: true,
          message: payload
        };
      }
      case LOGOUT: {
        localStorage.removeItem("loginData");
        return {
          ...state,
          isLoading: false,
          isAuth: false,
          isError: false,
          message: null,
          data: {}
        };
      }
      case LOGIN_RESET: {
        return {
          ...state,
          isLoading: false,
          isAuth: false,
          isError: false,
          message: null,
        };
      }
      default:
        return state;
    }
  };
  
  export default LoginReducer;
import {
  SIGNUP_LOADING,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  SIGNUP_RESET,
} from "./Signup.ActionTypes";

const initState = {
  isLoading: false,
  isSignup: false,
  isError: false,
  data: "",
};

const signupReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SIGNUP_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isSignup: true,
        data: payload,
      };
    }
    case SIGNUP_FAILED: {
      return {
        ...state,
        isLoading: false,
        isSignup: false,
        isError: true,
        data: payload
      };
    }
    case SIGNUP_RESET: {
      return {
        ...state,
        isLoading: false,
        isSignup: false,
        isError: false,
        data: "",
      };
    }
    default:
      return state;
  }
};

export default signupReducer;
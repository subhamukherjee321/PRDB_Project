import {
  SIGNUP_LOADING,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  SIGNUP_RESET,
} from "./Signup.ActionTypes";

export const signup = (creds) => async (dispatch) => {
  dispatch({ type: SIGNUP_LOADING });
  try {
    let res = await fetch("https://shopkart-backend.cyclic.app/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(creds),
    });
    let data = await res.json();
    dispatch({ type: SIGNUP_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    dispatch({ type: SIGNUP_FAILED, payload: error.message });
  }
};

export const resetSignup = () => (dispatch) => {
  dispatch({ type: SIGNUP_RESET });
};

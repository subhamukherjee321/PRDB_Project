import {
  combineReducers,
  legacy_createStore,
  applyMiddleware
} from "redux";
import thunk from "redux-thunk";
import LoginReducer from "./LoginRedux/Login.Reducer";
import signupReducer from "./SignupRedux/Signup.Reducer";

const rootReducer = combineReducers({
  signup: signupReducer,
  login: LoginReducer
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
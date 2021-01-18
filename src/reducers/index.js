import { combineReducers } from "redux";
import auth from "./auth";
import payment from "./payment";
import registration from "./registration";


export default combineReducers({ auth, payment, registration });

import { combineReducers } from "redux";
import auth from "./auth";
import payment from "./payment";
import registration from "./registration";
import route from "./route";
import adress from "./adress";


export default combineReducers({ auth, payment, registration, adress, route });

import { REGISTRATED, REGISTRATE_SUCCESS } from '../actions';


const initialState = {
  isRegistrated: false,
  token: ""
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REGISTRATED: {
      return { isRegistrated: true, token: action.payload.token }
    }
    case REGISTRATE_SUCCESS: {
      return { isRegistrated: false, token: "" }
    }
    default:
      return state;
  }
}
import { ROUTESUCCESS } from '../actions';


const initialState = {
  isRoute: false,
  route: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ROUTESUCCESS: {
      return { isRoute: true, route: action.payload }
    }
    default:
      return state;
  }
}
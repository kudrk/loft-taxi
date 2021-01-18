import { PAYMENTDATA_YES, PAYMENTDATA_NO } from "../actions";

const initialState = {
  paymentData: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case PAYMENTDATA_YES: {
      return { paymentData: true }
    }
    case PAYMENTDATA_NO: {
      return { paymentData: false }
    }
    default:
      return state;
  }
}
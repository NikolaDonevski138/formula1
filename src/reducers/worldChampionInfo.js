import { actionTypes } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.DRIVER:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

import { CHANGE } from "./actionTypes";
import initialState from "./initialState";

// Create SetBackground Image.
const bgImgReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE:
      return (state = payload);

    default:
      return state;
  }
};

// Export.
export default bgImgReducer;

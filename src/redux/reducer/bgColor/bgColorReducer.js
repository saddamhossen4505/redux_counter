import { BLUE, GREEN, PINK, PURPLE, RED, SKY, YELLOW } from "./actionTypes";
import { initialState } from "./initialState";

// Create BackgroundColor Reducer.
const bgColorReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case RED:
      return (state = "red");

    case GREEN:
      return (state = "green");

    case BLUE:
      return (state = "blue");

    case SKY:
      return (state = "skyblue");

    case YELLOW:
      return (state = "yellow");

    case PINK:
      return (state = "pink");

    case PURPLE:
      return (state = "purple");

    default:
      return state;
  }
};

// Export.
export default bgColorReducer;

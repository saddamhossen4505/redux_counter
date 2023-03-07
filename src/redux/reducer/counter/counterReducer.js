import { DEC, HARD, INC, RAND, RESET } from "./actionTypes";
import { initialState } from "./initialState";

// Create CounterReducer.
const counterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INC:
      return (state = state + 1);

    case DEC:
      return (state = state - 1);

    case RESET:
      return (state = 0);

    case HARD:
      return (state = 1000);

    case RAND:
      return (state = Math.floor(Math.random() * 10000));

    default:
      return state;
  }
};

// Export.
export default counterReducer;

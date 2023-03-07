import { DEC, HARD, INC, RAND, RESET } from "./actionTypes";

// Counter Increment.
export const counterIncrement = () => {
  return { type: INC };
};

// Counter Decrement.
export const counterDecrement = () => {
  return { type: DEC };
};

// Counter Reset.
export const counterReset = () => {
  return { type: RESET };
};

// Counter Random.
export const counterRandom = () => {
  return { type: RAND };
};

// Counter Hard-reset.
export const counterHard = () => {
  return { type: HARD };
};

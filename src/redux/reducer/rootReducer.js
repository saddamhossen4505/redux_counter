import { combineReducers } from "redux";
import bgColorReducer from "./bgColor/bgColorReducer";
import bgImgReducer from "./bgImg/bgImgReducer";
import counterReducer from "./counter/counterReducer";

// Create RootReducer.
const rootReducer = combineReducers({
  counter: counterReducer,
  bgColor: bgColorReducer,
  setBgImg: bgImgReducer,
});

// Export.
export default rootReducer;

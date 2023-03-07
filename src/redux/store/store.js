import { createStore } from "redux";
import rootReducer from "../reducer/rootReducer";

// Create Store.
const store = createStore(rootReducer);

// Export.
export default store;

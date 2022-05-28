import rootReducers from "@redux/rootReducers";
import { createStore } from "redux";

const configureStore = () => {
  return createStore(rootReducers);
};

export default configureStore();

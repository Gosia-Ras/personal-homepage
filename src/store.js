import { createStore } from "redux";
import rootReducer from "./features/reducers";

let initialState = {};

const store = createStore(rootReducer, initialState);
export default store;

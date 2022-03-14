import { createStore } from "redux";
import rootReducer from "./reducers";

const localStorageKey = "theme";
const localTheme = localStorage.getItem(localStorageKey);

let initialState = {
  preferences: localTheme ? JSON.parse(localTheme) : {},
};

const store = createStore(rootReducer, initialState);

store.subscribe(() => {
  const preferences = store.getState().preferences;
  if (!preferences) return;

  localStorage.setItem(localStorageKey, JSON.stringify(preferences));
});
export default store;

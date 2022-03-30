import { createStore } from "redux";
import rootReducer from "./reducers";

const localStorageKey = "theme";
const theme = localStorage.getItem(localStorageKey);

let initialState = {
  userThemePreference: theme ? JSON.parse(theme) : {},
};

const store = createStore(rootReducer, initialState);

store.subscribe(() => {
  const userThemePreference = store.getState().userThemePreference;
  if (!userThemePreference) return;

  localStorage.setItem(localStorageKey, JSON.stringify(userThemePreference));
});
export default store;

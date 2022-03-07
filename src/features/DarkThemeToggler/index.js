import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_DARKTHEME } from "../actions";
import { ToggleBox } from "./styled";

export const DarkThemeToggle = () => {
  const darkThemeEnabled = useSelector(
    (state) => state.preferences.darkThemeEnabled
  );
  const dispatch = useDispatch();

  return (
    <ToggleBox>
      <span>Use Dark Theme</span>
      <input
        type="checkbox"
        checked={darkThemeEnabled}
        onChange={() => dispatch({ type: TOGGLE_DARKTHEME })}
      />
    </ToggleBox>
  );
};

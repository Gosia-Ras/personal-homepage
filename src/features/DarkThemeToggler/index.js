import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_DARKTHEME } from "../actions";
import { ToggleBox, ToggleInput, ToggleLabel } from "./styled";

export const DarkThemeToggle = () => {
  const darkThemeEnabled = useSelector(
    (state) => state.preferences.darkThemeEnabled
  );
  const dispatch = useDispatch();

  return (
    <ToggleBox>
      <ToggleInput
        id="checkbox"
        type="checkbox"
        checked={darkThemeEnabled}
        onChange={() => dispatch({ type: TOGGLE_DARKTHEME })}
      />
      <ToggleLabel htmlFor="checkbox" />
    </ToggleBox>
  );
};

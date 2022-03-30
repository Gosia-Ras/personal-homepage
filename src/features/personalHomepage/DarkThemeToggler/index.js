import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_DARKTHEME } from "../../../core/actions";
import { ToggleBox, ToggleText} from "./styled";
import Switch from "react-switch";

export const DarkThemeToggle = () => {
  const darkThemeEnabled = useSelector(
    (state) => state.userThemePreference.darkThemeEnabled
  );
  
  const dispatch = useDispatch();

  return (
    <ToggleBox>
      <ToggleText>Dark mode {darkThemeEnabled ? "on" : "off"}</ToggleText>
      <Switch
        offColor="#D1D5DA"
        onColor="#2188FF"
        uncheckedIcon={false}
        checkedIcon={false}
        height={20}
        width={45}
        id="checkbox"
        type="checkbox"
        checked={darkThemeEnabled}
        onChange={() => dispatch({ type: TOGGLE_DARKTHEME })}
      />
    </ToggleBox>
  );
};

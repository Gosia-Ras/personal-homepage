import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_DARKTHEME } from "../actions";
import { ToggleBox, ToggleText } from "./styled";
import Switch from "react-switch";

export const DarkThemeToggle = () => {
  const darkThemeEnabled = useSelector(
    (state) => state.preferences.darkThemeEnabled
  );
  const dispatch = useDispatch();

  return (
    <ToggleBox>
      {darkThemeEnabled ? (
        <>
          <ToggleText>Dark mode off</ToggleText>
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
        </>
      ) : (
        <>
          <ToggleText>Dark mode on</ToggleText>
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
        </>
      )}
    </ToggleBox>
  );
};
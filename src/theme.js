import theme from "styled-theming";

export const backgroundColor = theme("theme", {
  light: "#E5E5E5",
  dark: "#252525",
});

export const textColor = theme("theme", {
  light: "#252525",
  dark: "#fff",
});

export const backgroundSecondary = theme("theme", {
  light: "#FFFFFF",
  dark: "#363636",
});

export const iconSocialColors = theme("theme", {
  light: "#252525",
  dark: "#DADADA",
});

export const projectBoxBorder = theme("theme", {
  light: "#D1D5DA",
  dark: "#25282D",
});

export const projectTitle = theme("theme", {
  light: "#0366D6",
  dark: "#FFFFFF"
});

export const textSecondaryColor = theme("theme", {
  light: "#6E7E91",
  dark: "#FFFFFF"
});

export const defaultTheme = {
  colors: {
    mainBlue: "#0366D6",
    mainBlueLight: "#2188FF",
    textSecondary: "#6E7E91",
    backgroundSecondary: "#FFFFFF",
    greyDetails: "#D1D5DA",
    textWhite: "#FFFFFF"
  },
  breakpoints: {
    small: "480px",
    medium: "767px",
    large: "992px",
    larger: "1070px",
    extraLarge: "1280px",
    container: "1368px",
  },
};
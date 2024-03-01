import { Container } from "./styled";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const AppContainer = ({ children }) => {
  useEffect(() => {
    AOS.init({
      startEvenet: "load",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: "120", // offset (in px) from the original trigger point
      delay: "100ms", // values from 0 to 3000, with step 50ms
      duration: "2000", // values from 0 to 3000, with step 50ms
      easing: "ease-in", // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false,
    });
  }, []);

  return <Container>{children}</Container>;
};

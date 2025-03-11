import { ThemeProvider, StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import { theme } from "@fravega-it/bumeran-ds-fvg";

// This implements the default behavior from styled-components v5
function shouldForwardProp(propName: string, target: unknown) {
  if (typeof target === "string") {
    // For HTML elements, forward the prop if it is a valid HTML attribute
    return isPropValid(propName);
  }
  // For other elements, forward all props
  return true;
}

// Add all providers you need
const TestingProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyleSheetManager shouldForwardProp={shouldForwardProp}>
        {children}
      </StyleSheetManager>
    </ThemeProvider>
  );
};

export default TestingProvider;

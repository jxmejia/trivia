import injectGlobal from "@emotion/css";
import { css } from "@emotion/react";
import theme from "../styles/theme";

injectGlobal`
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap");
`;

const globalStyles = css`
  body {
    background-color: ${theme.colors.alto};
    font-family: ${theme.typography.openSans};
    margin: 0;
    width: 100%;
  }
`;

export default globalStyles;

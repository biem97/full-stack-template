import { PaletteMode, ThemeOptions } from "@mui/material";
import { amber, blue, grey } from "@mui/material/colors";

const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: amber,
          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: blue,
          divider: blue[700],
          // background: {
          //   default: blue[900],
          //   paper: blue[900],
          // },
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
  },
});

export default getDesignTokens;

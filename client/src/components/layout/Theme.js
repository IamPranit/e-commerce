import { createMuiTheme } from "@material-ui/core/styles";

const Theme = createMuiTheme({
  palette: {
    primary: {
      light: "#ff8d8d",
      main: "#ff7171",
      dark: "#b24f4f",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ffbb8d",
      main: "#ffaa71",
      dark: "#b2764f",
      contrastText: "#fff",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: "5em",
      },
    },
  },
});

export default Theme;

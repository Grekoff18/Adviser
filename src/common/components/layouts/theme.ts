import { createTheme } from "@material-ui/core/styles";
// import Poppins

interface IBackgroundColor {
  [key: string]: string
}

// Create a theme instance.
const theme = createTheme({
  spacing: 4,
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  palette: {
    primary: {
      main: "#005b64",
    },
    secondary: {
      main: "#00838f"
    },
    error: {
      light: "#f27573",
      main: "#ef5350"
    },
    warning: {
      light: "#fbcc57",
      main: "#fbc02d"
    },
    info: {
      light: "#35afea",
      main: "#039be5"
    },
    success: {
      light: "#afd683",
      main: "#9ccc65"
    },
    background: {
      light: "#e0f7fa",
      main: "#b2ebf2",
      dark: "#008394"
    } as IBackgroundColor,
  }
})

export default theme
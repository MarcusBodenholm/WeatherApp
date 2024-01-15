import { createTheme, responsiveFontSizes } from "@mui/material";
const BaseLightTheme = createTheme({
    palette: {
        mode: "light",
        background: {
            default: "#e1f5fe"
        }
    },
    components: {
        MuiAppBar: {
            defaultProps: {
                color: "transparent",
                elevation: 0,
            }
        }
    }

})
const BaseDarkTheme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: "rgb(19, 66, 154)"
        },
        secondary: {
            main: "rgb(175, 175, 175)"
        }
    },
    components: {
        MuiAppBar: {
            defaultProps: {
                color: "transparent",
                elevation: 0,
            }
        }
    }
})

const DarkTheme = responsiveFontSizes(BaseDarkTheme);
const LightTheme = responsiveFontSizes(BaseLightTheme)

export {DarkTheme, LightTheme}
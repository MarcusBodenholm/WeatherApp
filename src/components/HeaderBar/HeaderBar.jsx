import {AppBar, Toolbar, Typography, Box, Stack, useTheme, useMediaQuery} from "@mui/material"
import { DarkMode, LightMode } from "@mui/icons-material";
import SearchBar from "../SearchBar/SearchBar";

const HeaderBar = props => {
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down('sm')) 
    return (
        <>
            <AppBar position="relative">
                <Toolbar sx={{justifySelf: "center", alignSelf:"center", flexDirection: "column", gap:"10px", width:"100%"}}>
                    <Typography variant="h3" align="center" >Weather App</Typography>
                    <Stack spacing={(mobile ? 0 : 2)} direction="row" sx={{justifyContent: (mobile ? "space-around" : "")}}>
                        <Box onClick={() => props.darkModeClick()} sx={{alignSelf: "center", justifySelf:"center", cursor:"pointer"}}>
                            {props.darkMode ? <DarkMode/>  : <LightMode />}
                        </Box>
                        <SearchBar onClick={props.handleLocationChange} />
                    </Stack>
                </Toolbar>
            </AppBar>
        </>

    )
}


export default HeaderBar;
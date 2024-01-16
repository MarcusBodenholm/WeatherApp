import {AppBar, Toolbar, Typography, Box, Stack} from "@mui/material"
import { DarkMode, LightMode } from "@mui/icons-material";
import SearchBar from "../SearchBar/SearchBar";

const HeaderBar = props => {

    return (
        <>
            <AppBar position="relative">
                <Toolbar sx={{justifySelf: "center", alignSelf:"center", flexDirection: "column", gap:"10px", width:"100%"}}>
                    <Typography variant="h3" align="center" >Weather App</Typography>
                    <Stack spacing={2} direction="row">
                        <Box onClick={() => props.darkModeClick()} sx={{alignSelf: "center", justifySelf:"center", cursor:"pointer"}}>
                            {props.darkMode ? <DarkMode/>  : <LightMode />}
                        </Box>
                        <SearchBar onClick={() => props.handleLocationChange()} />
                    </Stack>
                </Toolbar>
            </AppBar>
        </>

    )
}


export default HeaderBar;
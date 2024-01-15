import React, { useState } from 'react';
import {Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, ThemeProvider, createTheme, Checkbox} from "@mui/material"
import {Light, PhotoCamera, Visibility} from "@mui/icons-material"
import { DarkTheme, LightTheme } from './theme/theme';
import useMediaQuery from '@mui/material/useMediaQuery';
import { DarkMode } from '@mui/icons-material';


const defaultTheme = createTheme()
const defaultDarkMode = createTheme({
    palette: {
        mode: "dark"
    }
})
const AppTest = () => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark');
    const [useDarkMode, setDarkMode] = useState(prefersDarkMode);
    console.log(prefersDarkMode)
    return (    
        <ThemeProvider theme={useDarkMode ? defaultDarkMode : defaultTheme}> 
            <CssBaseline />
            <AppBar position="relative" sx={{display: "flex", flexDirection: "row"}}>
                <Toolbar>
                    <PhotoCamera />
                    <Typography variant='h6'>Photo Album</Typography>
                </Toolbar>
                <DarkMode></DarkMode>
                <Checkbox sx={{visibility: false}} checked={useDarkMode} onChange={() => setDarkMode(!useDarkMode)}></Checkbox>

            </AppBar>
            <main>
                <div>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant='h5' align='center' color="textSecondary" paragraph>
                            Hello everyone. This is a photo album and I'm trying to make this sentence very long so we can see how it will look on the screen. 
                        </Typography>
                    </Container>
                </div>
            </main>
        </ThemeProvider>

    )
}

export default AppTest;
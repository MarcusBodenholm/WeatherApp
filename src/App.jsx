/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from "react";
import useFetch from "./hooks/useFetch.js"
import WeatherContainer from "./components/WeatherContainer/WeatherContainer.jsx";
import SearchBar from './components/SearchBar/SearchBar.jsx';
import {ClimbingBoxLoader} from "react-spinners"
import useMediaQuery from '@mui/material/useMediaQuery';
import { DarkTheme, LightTheme } from './theme/theme';
import { AppBar, Checkbox, Container, ThemeProvider, Toolbar, Typography, Box, CssBaseline, Stack } from "@mui/material";
import dummyWeatherData from "./DummyData.js";
import { DarkMode, LightMode } from "@mui/icons-material";


function App() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark');
    const [useDarkMode, setDarkMode] = useState(prefersDarkMode);
    const [data, setData] = useState(dummyWeatherData);
    const [location, setLocation] = useState("Stockholm");
    const [loading, setLoading] = useState(true);
    const {get} = useFetch("https://api.openweathermap.org");

    const handleLocationChange = (newLocation) => {
        console.log(newLocation);
        setLocation(newLocation);
        //Kommer hantera när platsen ändras. 
    }
    useEffect(() => {
        setLoading(true);
        // navigator.geolocation.getCurrentPosition(position => {
        //   setLat(position.coords.latitude);
        //   setLon(position.coords.longitude);
        // })
        const fetchCoords = async() => {
            const json = await get(`/geo/1.0/direct?q=${location}&limit=1&appid=a3922a83619e594c3616ce14fdd99a34`)
            .catch(error => console.log(error))
            const lat = json[0].lat
            const lon = json[0].lon
            console.log("Latitude is: " + lat);
            console.log("Longitude is: " + lon);

            return {lat, lon}
        }
        const fetchData = async(coords) => { 
            const weatherData = await get(`/data/3.0/onecall?units=metric&lat=${coords.lat}&lon=${coords.lon}&appid=a3922a83619e594c3616ce14fdd99a34`)
            .catch(error => console.log(error))
            return weatherData
        }
        const fetchBoth = async() => {
            const coords = await fetchCoords();
            const weatherData = await fetchData(coords);
            console.log(weatherData);
            setData(weatherData);
        }
        // fetchBoth();
        console.log(data);
        setLoading(false);
        //Borde köras varje gång som platsen ändras. 
    }, [location])
    const theme=  useDarkMode ? DarkTheme : LightTheme
    return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative">
            <Toolbar sx={{justifySelf: "center", alignSelf:"center", flexDirection: "column", gap:"10px", width:"100%"}}>
                <Typography variant="h3" align="center" >Weather App</Typography>
                <Stack spacing={2} direction="row">
                    <Box onClick={() => setDarkMode(!useDarkMode)} sx={{alignSelf: "center", justifySelf:"center", cursor:"pointer"}}>
                        {useDarkMode ? <DarkMode/>  : <LightMode />}
                    </Box>
                    {/* <Checkbox checked={useDarkMode} onChange={() => setDarkMode(!useDarkMode)}></Checkbox> */}
                    <SearchBar onClick={handleLocationChange} />
                </Stack>
                

            </Toolbar>
        </AppBar>

        <Container sx={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
            {loading ? <ClimbingBoxLoader size={50} style={{color: theme.palette.primary}} /> : <WeatherContainer data={data} location={location}></WeatherContainer>}

        </Container>
    </ThemeProvider>
        

    )
}

export default App

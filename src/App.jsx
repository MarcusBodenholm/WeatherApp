/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from "react";
import useFetch from "./hooks/useFetch.js"
import WeatherContainer from "./components/WeatherContainer/WeatherContainer.jsx";
import {ClimbingBoxLoader, HashLoader} from "react-spinners"
import useMediaQuery from '@mui/material/useMediaQuery';
import { DarkTheme, LightTheme } from './theme/theme';
import { Container, ThemeProvider, CssBaseline } from "@mui/material";
import dummyWeatherData from "./DummyData.js";
import HeaderBar from "./components/HeaderBar/HeaderBar.jsx";

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
    const handleDarkModeChange = () => {
        setDarkMode(!useDarkMode);
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
        <HeaderBar darkModeClick={handleDarkModeChange} darkMode={useDarkMode} handleLocationChange={handleLocationChange} />

        <Container sx={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
            {loading ? <HashLoader size={200} color={ useDarkMode ? "#36d7b7" : "#000000"} style={{}}/> : <WeatherContainer data={data} location={location}></WeatherContainer>}

        </Container>
    </ThemeProvider>
        

    )
}

export default App

/* eslint-disable react-hooks/exhaustive-deps */

import {useState, useEffect} from "react";
import useFetch from "./hooks/useFetch.js"
import WeatherContainer from "./components/WeatherContainer/WeatherContainer.jsx";
import {HashLoader} from "react-spinners"
import useMediaQuery from '@mui/material/useMediaQuery';
import { DarkTheme, LightTheme } from './theme/theme';
import { Container, ThemeProvider, CssBaseline } from "@mui/material";
import HeaderBar from "./components/HeaderBar/HeaderBar.jsx";

function App() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark');
    const [useDarkMode, setDarkMode] = useState(prefersDarkMode);
    const [data, setData] = useState({});
    const [location, setLocation] = useState("");
    const [loading, setLoading] = useState(true);
    const WeatherAPI = useFetch("https://api.openweathermap.org");
    const LocationAPI = useFetch("https://nominatim.openstreetmap.org/")
    console.log(import.meta.env.VITE_SOME_KEY)


    const handleLocationChange = (newLocation) => {
        console.log(newLocation);
        if (newLocation !== location) {
            setLoading(true);
            setLocation(newLocation);
        }
        //Kommer hantera när platsen ändras. 
    }
    const handleDarkModeChange = () => {
        setDarkMode(!useDarkMode);
    }
    useEffect(() => {
        let geoLocationFailed = false;
        const getCurrentPosition = async() => {
            const coords = await new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(position => {
                    resolve(position.coords);
                },error => reject(error),{timeout: 1000});
            })
            .catch(() => geoLocationFailed = true)
            return coords;
        }
        const reverseGeoCode = async() => {
            const coords = await getCurrentPosition();
            console.log(coords, "triggered with coords")
            if (geoLocationFailed) {
                setLocation("Stockholm");
                return;
            }
            const json = await LocationAPI.get(`reverse?format=json&lat=${coords.latitude}&lon=${coords.longitude}`)
            if (json.address === undefined) {
                setLocation("Stockholm");
                return;
            }
            setLocation(json.address.town)
    
        }
        reverseGeoCode();
    }, [])
    useEffect(() => {
        let subscribed = true;
        if (location === "") return;
        const fetchCoords = async() => {
            const json = await LocationAPI.get("search?format=json&limit=1&q=" + location)
            .catch(error => console.log(error))
            if (json.length === 0) {
                return {lat: 0, lon: 0, success: false, location: ""};
            }
            const coords = {
                lat: json[0].lat,
                lon: json[0].lon,
                success: true,
                location: json[0].name
            }
            console.log(coords);
            return coords
        }
        const fetchData = async(coords) => { 
            const weatherData = await WeatherAPI.get(`/data/3.0/onecall?units=metric&lat=${coords.lat}&lon=${coords.lon}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`)
            .catch(error => console.log(error))
            return weatherData
        }
        const fetchBoth = async() => {
            const coords = await fetchCoords();
            if (coords.success === false) {
                console.log("Location could not be found. Defaulting to Stockholm.")
                setLocation("Stockholm")
                return;
            }
            if (subscribed === false) {
                console.log("fetch cancelled.")
                return;
            }
            const weatherData = await fetchData(coords);
            setLoading(false);
            setData({...weatherData, location:coords.location});
        }
        fetchBoth();
        console.log("Location is " + location)
        return (() => {
            subscribed = false;
        })
        //Borde köras varje gång som platsen ändras. 
    }, [location])
    const theme=  useDarkMode ? DarkTheme : LightTheme
    return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <HeaderBar darkModeClick={handleDarkModeChange} darkMode={useDarkMode} handleLocationChange={handleLocationChange} />
        <Container sx={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
            {loading ? <HashLoader size={200} color={ useDarkMode ? "#36d7b7" : "#000000"} style={{}}/> : <WeatherContainer data={data}></WeatherContainer>}

        </Container>
    </ThemeProvider>
        

    )
}

export default App

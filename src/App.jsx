/* eslint-disable react-hooks/exhaustive-deps */
import './App.css'
import {useState, useEffect} from "react";
import useFetch from "./hooks/useFetch.js"
import WeatherContainer from "./components/WeatherContainer.jsx";
import Search from './components/Search.jsx';
import {ClimbingBoxLoader} from "react-spinners"

function App() {
  const [data, setData] = useState([]);
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
    fetchBoth();
    console.log(data);
    setLoading(false);
    //Borde köras varje gång som platsen ändras. 
  }, [location])
  
  return (
    <>
      {<Search onClick={handleLocationChange} />}
      {loading ? <ClimbingBoxLoader color="blue"/> : <WeatherContainer>{data}</WeatherContainer>}
    </>
      
    
  )
}

export default App

import './App.css'
import {useState, useEffect} from "react";
import useFetch from "./hooks/useFetch.js"

function App() {
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);
  const {get} = useFetch("https://api.openweathermap.org/data/3.0/onecall?");
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    })
    console.log("Latitude is: " + lat);
    console.log("Longitude is: " + lon);
    get(`lat=${lat}&lon=${lon}&appid=a3922a83619e594c3616ce14fdd99a34`)
    .then(data => console.log(data))
    .catch(error => console.log(error))
  }, [lat, lon, get])
  

  return (
    <>
      <h1>Success</h1>
    </>
  )
}

export default App

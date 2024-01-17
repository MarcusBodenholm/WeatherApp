import WeatherDetail from "../WeatherDetail/WeatherDetail";
import svgPicker from "../../helpers/svgPicker";
import DateFormatter from "../../helpers/DateFormatter";

const WeatherDetailList = props => {
    const dateFormatter = DateFormatter();
    const sunrise = new Date((props.data.current.sunrise) * 1000)
    const sunset = new Date((props.data.current.sunset) * 1000)

    return (
        <>
            <WeatherDetail img={svgPicker("riskOfRain")} data={props.data.daily[0].pop * 100} type="Risk of rain" />
            <WeatherDetail img={svgPicker("arrow")} data={props.data.current.wind_speed} degrees={props.data.current.wind_deg} type="Wind" />
            <WeatherDetail img={svgPicker("sunrise")} data={dateFormatter.SunDate(sunrise)} type="Sunrise" />
            <WeatherDetail img={svgPicker("sunset")} data={dateFormatter.SunDate(sunset)} type="Sunset" />
            <WeatherDetail img={svgPicker("uvindex")} data={props.data.current.uvi} type="UV index" />
            <WeatherDetail img={svgPicker("pressure")} data={props.data.current.pressure} type="Pressure" />
            <WeatherDetail img={svgPicker("humidity")} data={props.data.current.humidity} type="Humidity" />
            <WeatherDetail img={svgPicker("dewpoint")} data={props.data.current.dew_point} type="Dew point" />
        </>
    )
}


export default WeatherDetailList;
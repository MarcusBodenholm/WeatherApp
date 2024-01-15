import clearday from "../assets/icons/clearday.svg";
import clearnight from "../assets/icons/clearnight.svg";
import snow from "../assets/icons/snow.svg";
import sunRise from "../assets/icons/sunrise.svg";
import sunset from "../assets/icons/sunset.svg";
import minTemp from "../assets/icons/mintemp.svg";
import maxTemp from "../assets/icons/maxtemp.svg";
import riskOfRain from "../assets/icons/riskofrain.svg";
import arrow from "../assets/icons/arrow.svg";
import uvindex from "../assets/icons/uvindex.svg";
import humidity from "../assets/icons/humidity.svg";
import dewpoint from "../assets/icons/dewpoint.svg";
import pressure from "../assets/icons/pressure.svg";
import partlycloudyday from "../assets/icons/partlycloudyday.svg";
import partlycloudynight from "../assets/icons/partlycloudynight.svg";
import brokencloudsday from "../assets/icons/brokencloudsday.svg";
import brokencloudsnight from "../assets/icons/brokencloudsnight.svg";
import rainshowerday from "../assets/icons/rainshowerday.svg";
import rain from "../assets/icons/rain.svg";
import thunderstorm from "../assets/icons/thunderstorm.svg";
import mist from "../assets/icons/mist.svg";



const svgPicker = iconId => {
    const iconMap = {
        "arrow": arrow,
        "dewpoint": dewpoint,
        "humidity": humidity,
        "maxtemp": maxTemp,
        "mintemp": minTemp,
        "pressure": pressure,
        "riskOfRain": riskOfRain,
        "sunrise": sunRise,
        "sunset": sunset,
        "uvindex": uvindex,
        "01d": clearday,
        "01n": clearnight,
        "02d": partlycloudyday,
        "02n": partlycloudynight,
        "03d": partlycloudyday,
        "03n": partlycloudynight,
        "04d": brokencloudsday,
        "04n": brokencloudsnight,
        "09d": rainshowerday,
        "09n": rainshowerday,
        "10d": rain,
        "10n": rain,
        "11d": thunderstorm,
        "11n": thunderstorm,
        "13d": snow,
        "13n": snow,
        "50d": mist,
        "50n": mist
    }
    return iconMap[iconId];
}


export default svgPicker;
import clearday from "../assets/icons/clearday.svg";
import clearnight from "../assets/icons/clearnight.svg";
import snow from "../assets/icons/snow.svg";
import sunRise from "../assets/icons/sunrise.svg";
import sunset from "../assets/icons/sunset.svg";
import minTemp from "../assets/icons/mintemp.svg";
import maxTemp from "../assets/icons/maxtemp.svg";
import riskOfRain from "../assets/icons/riskofrain.svg";
import arrow from "../assets/arrow.svg";




const svgPicker = iconId => {
    const iconMap = {
        "arrow": arrow,
        "maxtemp": maxTemp,
        "mintemp": minTemp,
        "riskOfRain": riskOfRain,
        "sunrise": sunRise,
        "sunset": sunset,
        "01d": clearday,
        "01n": clearnight,
        "13d": snow
    }
    return iconMap[iconId];
}


export default svgPicker;
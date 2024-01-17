import "./DailyDetail.css"
import { Typography, Box, Stack } from "@mui/material"

const TypeCreator = (data) => {
    return <Typography variant="h6" className="daily-detail-info"  paragraph>{data}</Typography>
}



const DailyDetail = props => {
    const typeMap = {
        "Risk of rain": () => TypeCreator(`${Math.round(props.data)}%`),
        "Wind": () => TypeCreator(`${props.data} m/s`),
        "Sunrise": () => TypeCreator(`${props.data}`),
        "Sunset": () => TypeCreator(`${props.data}`),
        "UV index": () => TypeCreator(`${props.data}`),
        "Pressure": () => TypeCreator(`${Math.round(props.data)} hPa`),
        "Humidity": () => TypeCreator(`${Math.round(props.data)}%`),
        "Dew point": () => TypeCreator(`${Math.round(props.data)}\u00B0C`)
    }
    let image = <Box component="img" src={props.img} sx={{width: "35px", height:"35px"}}/>
    if (props.degrees) {
        image = <Box component="img" className="daily-detail-wind" src={props.img} sx={{width: "30px", height:"30px", transform: `rotate(${props.degrees}deg)`}}/>
    }


    return (
    <Stack direction="row" >
        <Stack direction="row" className="daily-detail-box">
            <Stack direction="row" spacing={1} sx={{justifyContent:"center", alignItems:"center"}}>
                {image}
                <Typography color="secondary" className="daily-detail-title" >{props.type}</Typography>
            </Stack>
            {typeMap[props.type]()}
        </Stack>
    </Stack>
)
}

export default DailyDetail;
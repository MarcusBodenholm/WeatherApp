import { Stack, Box, Typography, useTheme, Grid } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';

import "./WeatherDetail.css"

const TypeCreator = (data) => {
    return <Typography variant="h5" className="weather-detail-info"  paragraph>{data}</Typography>
}

const WeatherDetail = props => {
    const typeMap = {
        "Risk of rain": () => TypeCreator(`${props.data}%`),
        "Wind": () => TypeCreator(`${props.data} m/s`),
        "Sunrise": () => TypeCreator(`${props.data}`),
        "Sunset": () => TypeCreator(`${props.data}`),
        "UV index": () => TypeCreator(`${props.data}`),
        "Pressure": () => TypeCreator(`${props.data} hPa`),
        "Humidity": () => TypeCreator(`${props.data}%`),
        "Dew point": () => TypeCreator(`${props.data}\u00B0C`)
    }
    let image = <Box component="img" src={props.img} sx={{width: "50px", height:"50px"}}/>
    if (props.degrees) {
        image = <Box component="img" src={props.img} sx={{width: "50px", height:"50px", transform: `rotate(${props.degrees}deg)`}}/>
    }
    const theme = useTheme();
    const row = useMediaQuery(theme.breakpoints.down('sm'))
    if (row) {
        return (
            <Grid item xs={12} sm={4} md={3}>
                <Stack direction="row" >
                    <Stack direction="row" className="weather-detail-box">
                        <Stack direction="row" spacing={1}>
                            {image}
                            <Typography color="secondary" className="weather-detail-title" >{props.type}</Typography>
                        </Stack>
                        {typeMap[props.type]()}
                    </Stack>
                </Stack>

            </Grid>

        )
    }
    return (
        <Grid item xs={12} sm={4} md={3} sx={{display: "flex", justifyContent:"center"}}>
            <Stack direction="row" spacing={1} >
                {image}
                <Stack direction="column">
                    <Typography color="secondary">{props.type}</Typography>
                    {typeMap[props.type]()}
                </Stack>
            </Stack>
        </Grid>

    )
}

export default WeatherDetail;
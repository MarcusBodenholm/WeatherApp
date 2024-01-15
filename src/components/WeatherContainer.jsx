import { Stack, Typography, Box, Grid } from "@mui/material";
import svgPicker from "../helpers/svgPicker";
import WeatherDetail from "./WeatherDetail/WeatherDetail";
import DateFormatter from "../helpers/DateFormatter";


const WeatherContainer = (props) => {
    const dateFormatter = DateFormatter();
    const sunrise = new Date((props.data.current.sunrise + props.data.timezone_offset) * 1000)
    const sunset = new Date((props.data.current.sunset + props.data.timezone_offset) * 1000)
    const current = new Date((props.data.current.dt + props.data.timezone_offset)* 1000)
    return (
        <>
            <Typography sx={{margin:"20px"}} textAlign="center" variant="h1">{props.location} - {dateFormatter.SunDate(current)}</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={7}>
                    <Stack direction="row" sx={{alignContent:"center", justifyContent:"center"}} spacing={2}>
                        <Box component="img" src={svgPicker(props.data.current.weather[0].icon)} sx={{width: "200px", height: "200px"}}/>
                        <Stack direction="column"  spacing={2} sx={{justifyContent:"center"}}>
                            <Typography sx={{paddingTop: "15px"}} variant="h2">{props.data.current.temp}&deg;C</Typography>
                            <Typography variant="body1">{props.data.current.weather[0].description}</Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Stack direction="column"  spacing={2} sx={{marginTop:"30px"}}>
                        <Stack direction="row" sx={{justifyContent:"space-around"}}>
                            <Stack direction="row" spacing={2}>
                                <Box component="img" src={svgPicker("mintemp")} sx={{width: "100px", height: "100px"}}/>
                                <Stack direction="column" sx={{justifyContent:"center"}}>
                                    <Typography sx={{marginBottom: "0px"}}  color="secondary" paragraph variant="subtitle2">
                                        Min
                                    </Typography>
                                    <Typography variant="h4">
                                        {props.data.daily[0].temp.min}&deg;C
                                    </Typography>
                                </Stack>
                            </Stack>
                            <Stack direction="row"  spacing={2}>
                                <Box component="img" src={svgPicker("maxtemp")} sx={{width: "100px", height: "100px"}}/>
                                <Stack direction="column" sx={{justifyContent:"center"}}>
                                    <Typography sx={{marginBottom: "0px"}}  color="secondary" paragraph variant="subtitle2">
                                        Max
                                    </Typography>
                                    <Typography variant="h4">
                                        {props.data.daily[0].temp.max}&deg;C
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                        <Typography variant="body1" sx={{justifySelf:"flex-end", alignSelf:"flex-end"}} textAlign="end">Feels like {props.data.current.feels_like}&deg;C</Typography>
                    </Stack>
                </Grid>
                <WeatherDetail img={svgPicker("riskOfRain")} data={props.data.daily[0].pop * 100} type="Risk of rain" />
                <WeatherDetail img={svgPicker("arrow")} data={props.data.current.wind_speed} degrees={props.data.current.wind_deg} type="Wind" />
                <WeatherDetail img={svgPicker("sunrise")} data={dateFormatter.SunDate(sunrise)} type="Sunrise" />
                <WeatherDetail img={svgPicker("sunset")} data={dateFormatter.SunDate(sunset)} type="Sunset" />
                <Grid item xs={12} md={3}>UV Index</Grid>
                <Grid item xs={12} md={3}>Pressure</Grid>
                <Grid item xs={12} md={3}>Humidity</Grid>
                <Grid item xs={12} md={3}>Wind</Grid>
            </Grid>
            {/* <Stack direction="row">
                <Stack direction="row">
                    <Wallet sx={{width: "100px", height: "100px"}}/>
                    <Stack direction="column">
                        <Typography variant="h3">{props.data.current.temp}&deg;C</Typography>
                        <Typography variant="body1">{props.data.current.weather[0].description}</Typography>
                    </Stack>
                </Stack>
            </Stack> */}
        </>
    )
}

export default WeatherContainer;
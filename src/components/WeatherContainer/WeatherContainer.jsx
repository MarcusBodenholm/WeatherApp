import { Stack, Typography, Box, Grid } from "@mui/material";
import svgPicker from "../../helpers/svgPicker";
import WeatherDetailList from "../WeatherDetailList/WeatherDetailList";
import DateFormatter from "../../helpers/DateFormatter";
import Hourly from "../Hourly/Hourly";
import Daily from "../Daily/Daily";
import "./WeatherContainer.css";

const WeatherContainer = (props) => {
    const dateFormatter = DateFormatter();
    const current = new Date((props.data.current.dt)* 1000)
    return (
        <>
            <Typography sx={{marginTop:"15px"}} textAlign="center" variant="h5">{dateFormatter.WeekdayAndMonth(current)} {dateFormatter.FullTime(current)}</Typography>
            <Typography sx={{marginBottom:"5px"}} textAlign="center" variant="h2">{props.location}</Typography>
            <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                    <Stack direction="row" sx={{alignContent:"center", justifyContent:"center"}} spacing={2}>
                        <Box component="img" src={svgPicker(props.data.current.weather[0].icon)} sx={{width: "200px", height: "200px"}}/>
                        <Stack direction="column"  spacing={2} sx={{justifyContent:"center"}}>
                            <Typography sx={{paddingTop: "15px"}} variant="h2">{Math.round(props.data.current.temp)}&deg;C</Typography>
                            <Typography variant="subtitle1" paragraph>{props.data.daily[0].summary}</Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack direction="column"  spacing={2} sx={{marginTop:"30px"}}>
                        <Stack direction="row" sx={{justifyContent:"center"}}>
                            <Stack direction="row" spacing={2}>
                                <Box component="img" src={svgPicker("mintemp")} sx={{width: "100px", height: "100px"}}/>
                                <Stack direction="column" sx={{justifyContent:"center"}}>
                                    <Typography sx={{marginBottom: "0px"}}  color="secondary" paragraph variant="subtitle2">
                                        Min
                                    </Typography>
                                    <Typography variant="h4">
                                        {Math.round(props.data.daily[0].temp.min)}&deg;C
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
                                        {Math.round(props.data.daily[0].temp.max)}&deg;C
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                        <Typography variant="h6" className="feels-like" paragraph sx={{justifySelf:"center", alignSelf:"center"}}>
                            Feels like {Math.round(props.data.current.feels_like)}&deg;C
                        </Typography>
                    </Stack>
                </Grid>
                <WeatherDetailList data={props.data}/>
            </Grid>
            <Hourly data={props.data} />
            <Daily data={props.data} />
        </>
    )
}

export default WeatherContainer;
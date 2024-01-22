import { Card, CardContent, Stack, Typography, Box, Grid, Popper } from "@mui/material";
import DateFormatter from "../../helpers/DateFormatter";
import svgPicker from "../../helpers/svgPicker";
import "./HourCard.css"
import {useState} from "react";
import DailyDetail from "../DailyDetail/DailyDetail";

const HourCard = props => {
    const [anchorEl, setAnchorEl] = useState(null);
    const dateFormatter = DateFormatter();
    const date = new Date((props.data.dt) * 1000);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;
    return (
        <Grid item>
            <Card className="hour-card" sx={{borderRadius:"10px"}}>
                <CardContent>
                    <Stack direction="column" spacing={1} sx={{justifyContent:"center", alignItems:"center"}}>
                        <Typography variant="body2" color="secondary" paragraph textAlign="center">
                            {dateFormatter.GetHour(date)}
                        </Typography>
                        <Box component="img" src={svgPicker(props.data.weather[0].icon)} sx={{width: "50px", height:"50px"}} onMouseEnter={handleClick} onMouseLeave={handleClick}/>
                        <Popper id={id} open={open} anchorEl={anchorEl}>
                            <Box sx={{backgroundColor:"rgb(5, 39, 102)",width:"250px", border:"2px solid orange", borderRadius:"10px", color:"black", padding: "5px"}}> 
                                <Typography sx={{color:"white", marginTop:"5px", marginBottom: "0px"}}textAlign="center" variant="h6" paragraph>Feels like: {Math.round(props.data.feels_like)}&deg;C</Typography>
                                <DailyDetail img={svgPicker("arrow")} data={props.data.wind_speed} degrees={props.data.wind_deg} type="Wind"/>
                                <DailyDetail img={svgPicker("riskOfRain")} data={props.data.pop * 100} type="Risk of rain"/>
                                <DailyDetail img={svgPicker("humidity")} data={props.data.humidity} type="Humidity" />
                                <DailyDetail img={svgPicker("pressure")} data={props.data.pressure} type="Pressure" />
                                <DailyDetail img={svgPicker("uvindex")} data={props.data.uvi} type="UV index" />
                                <DailyDetail img={svgPicker("dewpoint")} data={props.data.dew_point} type="Dew point" />
                            </Box>


                        </Popper>
                        <Typography className="hour-card-temp" paragraph textAlign="center" variant="body1">
                            {Math.round(props.data.temp)}&deg;C
                        </Typography>
                    </Stack>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default HourCard;
import { Card, CardContent, Stack, Typography, Box, Grid, Popper } from "@mui/material";
import DateFormatter from "../../helpers/DateFormatter";
import svgPicker from "../../helpers/svgPicker";
import "./HourCard.css"
import {useState} from "react";

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
                        <Box component="img" src={svgPicker(props.data.weather[0].icon)} sx={{width: "50px", height:"50px"}} onClick={handleClick}/>
                        <Popper id={id} open={open} anchorEl={anchorEl} >
                            <Box sx={{backgroundColor:"white", borderRadius:"10px", color:"black", padding: "5px"}}> 
                                <Typography paragraph>Feels like: {props.data.feels_like}&deg;C</Typography>
                                <Typography paragraph>Humidity: {props.data.humidity}%</Typography>
                                <Typography paragraph>UV index: {props.data.uvi}</Typography>
                                <Typography paragraph>Risk of rain: {props.data.pop * 100}%</Typography>
                                <Typography paragraph>Dew point: {props.data.dew_point}&deg;C</Typography>
                                <Typography paragraph>Wind: {props.data.wind_speed}m/s</Typography>
                                <Typography paragraph>Cloud coverage: {props.data.clouds}%</Typography>

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
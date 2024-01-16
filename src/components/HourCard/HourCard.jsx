import { Card, CardContent, Stack, Typography, Box, Grid } from "@mui/material";
import DateFormatter from "../../helpers/DateFormatter";
import svgPicker from "../../helpers/svgPicker";
import "./HourCard.css"

const HourCard = props => {
    const dateFormatter = DateFormatter();
    const date = new Date((props.data.dt + props.tzo) * 1000);
    console.log(props)
    return (
        <Grid item>
            <Card className="hour-card" sx={{borderRadius:"10px"}}>
                <CardContent>
                    <Stack direction="column" spacing={1} sx={{justifyContent:"center", alignItems:"center"}}>
                        <Typography variant="body2" color="secondary" paragraph textAlign="center">
                            {dateFormatter.GetHour(date)}
                        </Typography>
                        <Box component="img" src={svgPicker(props.data.weather[0].icon)} sx={{width: "50px", height:"50px"}}/>
                        <Typography className="hour-card-temp" paragraph textAlign="center" variant="body1">
                            {props.data.temp}&deg;C
                        </Typography>
                    </Stack>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default HourCard;
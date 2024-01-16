import { Stack, Typography, Grid } from "@mui/material";
import "./Hourly.css";
import HourCard from "../HourCard/HourCard";

const Hourly = props => {

    return (
        <Stack className="hourly-container" direction="column" sx={{justifyContent:"center", alignItems:"center"}} >
            <Typography variant="h4" className="hourly-title">Hour by hour</Typography>
            <Grid container spacing={1} columns={16} sx={{justifyContent:"center"}}>
                {props.data.hourly.slice(1, 21).map((hour,idx) => {
                    return <HourCard data={hour} key={idx}/>
                })}
            </Grid>
        </Stack>
    )
}


export default Hourly;
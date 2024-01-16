import { Typography, Stack, Grid  } from "@mui/material";
import "./Daily.css"
import DayCard from "../DayCard/DayCard";

const Daily = props => {


    return (
        <Stack className="daily-container">
            <Typography variant="h4" className="hourly-title">The coming days</Typography>
            <Grid container>
                {props.data.daily.map((day, idx) => {
                    return <DayCard data={day} key={idx} />
                })}
            </Grid>
        </Stack>
    )
}


export default Daily;
import { Typography, Stack, Grid  } from "@mui/material";
import "./Daily.css"
import DayCard from "../DayCard/DayCard";

const Daily = props => {


    return (
        <Stack className="daily-container">
            <Typography variant="h4" className="hourly-title" textAlign="center">The coming week</Typography>
            <Grid container spacing={2}>
                {props.data.daily.slice(1, 7).map((day, idx) => {
                    return <DayCard data={day} key={idx} />
                })}
            </Grid>
        </Stack>
    )
}


export default Daily;
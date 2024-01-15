import { Typography, Stack  } from "@mui/material";
import "./Daily.css"

const Daily = props => {


    return (
        <Stack className="daily-container">
            <Typography variant="h4" className="hourly-title">The coming days</Typography>
        </Stack>
    )
}


export default Daily;
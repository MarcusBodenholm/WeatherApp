import {Grid, Typography, Card, CardContent} from "@mui/material"
import "./DayCard.css"


const DayCard = props => {


    return (
        <>
            <Grid item md={3} sm={12} xs={6}>   
                <Card className="day-card" sx={{borderRadius:"10px"}}>
                    <CardContent>
                        <Typography variant="h3">
                            {props.data.temp.day}&deg;C
                        </Typography>

                    </CardContent>
                </Card>
            </Grid> 
        </>
    )
}


export default DayCard;
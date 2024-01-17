import {Grid, Typography, Card, CardContent, Stack, Box, alpha, styled} from "@mui/material"
import "./DayCard.css"
import DateFormatter from "../../helpers/DateFormatter"
import svgPicker from "../../helpers/svgPicker"
import { InfoRounded } from "@mui/icons-material"
import { useState } from "react"
import DailyDetail from "../DailyDetail/DailyDetail"

const InfoButton = styled(InfoRounded)(({ theme }) => ({
    position: 'relative',
    borderRadius: "100%",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        border: "2px solid black",
    },
    marginLeft: 0,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

const DayCard = props => {
    const [flip, setFlip] = useState(false);
    const dateFormatter = DateFormatter();
    const date = new Date(props.data.dt * 1000)
    const handleFlip = () => {
        setFlip(!flip);
    }
    return (
        <>
            <Grid item md={4} sm={12} xs={12}>   
                <Card className={flip ? "day-card-flipped" : "day-card"} sx={{borderRadius:"10px", height:"150px"}}>
                    <CardContent>
                        {
                            flip ? (
                                <Stack direction="row" sx={{width:"100%", justifyContent:"space-between"}}>
                                    <Stack direction="column" spacing={0} sx={{width: "100%"}}>
                                        <DailyDetail img={svgPicker("riskOfRain")} data={props.data.pop}  type="Risk of rain"/>
                                        <DailyDetail img={svgPicker("arrow")} data={props.data.wind_speed} degrees={props.data.wind_deg} type="Wind"/>
                                        <DailyDetail img={svgPicker("humidity")} data={props.data.humidity} type="Humidity"/>
                                    </Stack>
                                    <InfoButton className="info-button active" onClick={handleFlip} />
    
                                </Stack>
                            ) : (
                                <Stack direction="row" sx={{width:"100%", justifyContent:"space-between"}} >
                                    <Box component="img"  src={svgPicker(props.data.weather[0].icon)} sx={{width: "100px", height:"100px"}} />
                                    <Stack direction="column" sx={{width:"100%"}}>
                                        <Typography variant="h6" >{dateFormatter.WeekdayAndMonth(date)}</Typography>
                                        <Stack direction="row" sx={{width:"100%", justifyContent:"space-between", margin:"10px", paddingRight:"10px"}} spacing={1}>
                                            <Stack direciton="column" sx={{justifyContent:"center"}}>
                                                <Typography paragraph variant="h6" sx={{marginBottom: "0", fontWeight:"bold"}}>{props.data.temp.min}&deg;C</Typography>
                                                <Typography variant="body1">Min</Typography>
                                            </Stack>
                                            <Stack direciton="column">
                                                <Typography paragraph variant="h6" sx={{marginBottom: "0", fontWeight:"bold"}}>{props.data.temp.max}&deg;C</Typography>
                                                <Typography variant="body1">Max</Typography>
                                            </Stack>

                                        </Stack>
                                    </Stack>
                                    <InfoButton className="info-button" onClick={handleFlip} />    
                                </Stack>
    
                            )


                        }
                    </CardContent>
                </Card>
            </Grid> 
        </>
    )
}


export default DayCard;
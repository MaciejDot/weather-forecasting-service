import { Card, CardActionArea, CardContent, Grid, Typography } from "@material-ui/core";
import {
    Link
} from "react-router-dom";

interface LookupWeatherCardProps {
    locationLabel: string
    temp: number
    to: string
}

const LookupWeatherCard = (props: LookupWeatherCardProps) => {
    return <Card>
        <CardActionArea component={Link} to={props.to}>
        <CardContent>
        <Grid container>
            <Grid item xs={6}>
                <Typography variant="h6" align='left'>{props.locationLabel}</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h6" align='right'>{props.temp.toFixed(0)}°C</Typography>
            </Grid>
        </Grid>
        </CardContent>
        </CardActionArea>
    </Card>
}

export default LookupWeatherCard;
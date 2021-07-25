import { Card, CardContent, Grid } from "@material-ui/core";
import WeatherDataAndDescription from "./WeatherDataAndDescription";
import { addSeconds } from 'date-fns'
import useTypedStyles from "../hooks/useTypedStyles";
import { basicClasses } from "../theme/basicClasses";

interface WeatherDetailsProps {
    isError: boolean
    isLoading: boolean
    sunrise?: number
    sunset?: number
    humidity?: number
    visibility?: number
    timezone?: number
}

const WeatherDetails = (props: WeatherDetailsProps) => {
    const format_time = (utc_timestamp: number, timezone: number) => {
        const dtFormat = new Intl.DateTimeFormat('pl-PL', {
            timeStyle: 'short',
            timeZone: 'UTC'
        });
        return dtFormat.format(addSeconds(new Date(utc_timestamp * 1e3), timezone));
    }
    const classes = useTypedStyles(basicClasses);
    return <Card className={classes.weatherDataCard}>
        <CardContent>
            <div className={classes.verticalCenteredContent}>
                <Grid container alignItems='center' spacing={3} justifyContent='space-evenly' className={classes.bottomSeparationBorder}>
                    <Grid item xs={6}
                        className={classes.rightSeparationBorder}
                    >
                        <WeatherDataAndDescription
                            description="Sunrise"
                            isLoading={props.isLoading}
                            data={props.isError || props.isLoading ? '--:--' : format_time(props.sunrise ?? 0, props.timezone ?? 0)}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <WeatherDataAndDescription
                            description="Sunset"
                            isLoading={props.isLoading}
                            data={props.isError || props.isLoading ? '--:--' : format_time(props.sunset ?? 0, props.timezone ?? 0)}
                        />
                    </Grid>
                </Grid>
                <Grid container alignItems='center' spacing={3} justifyContent='space-evenly' className={classes.marginTopCentering}>
                    <Grid item xs={6} className={classes.rightSeparationBorder}>
                        <WeatherDataAndDescription
                            description="Humidity"
                            isLoading={props.isLoading}
                            data={props.isError || props.isLoading ? '--.-- %' : `${props.humidity?.toFixed(0)} %`}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <WeatherDataAndDescription
                            description="Visibility"
                            isLoading={props.isLoading}
                            data={props.isError || props.isLoading ? '--.-- km' : `${((props.visibility ?? 0) / 1000).toFixed(2)} km`}
                        />
                    </Grid>
                </Grid>
            </div>
        </CardContent>
    </Card>
}

export default WeatherDetails;
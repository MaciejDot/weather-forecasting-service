import { Divider, Grid } from "@material-ui/core";
import WeatherDataAndDescription from "./WeatherDataAndDescription";
import { addSeconds } from 'date-fns'

interface WeatherDetailsProps {
    isError:boolean
    isLoading:boolean
    sunrise?: number
    sunset?: number
    humidity?: number
    visibility?: number
    timezone?: number
}

const WeatherDetails = (props: WeatherDetailsProps) => {
    const format_time = (utc_timestamp: number, timezone: number)=> {
        const dtFormat = new Intl.DateTimeFormat('pl-PL', {
          timeStyle: 'short',
          timeZone: 'UTC'
        });
        return dtFormat.format(addSeconds( new Date(utc_timestamp * 1e3), timezone));
    }
    return <><Grid container alignItems='center' spacing={3} justifyContent='space-evenly'>
        <Grid item xs={5}>
            <WeatherDataAndDescription
                description="Sunrise"
                isLoading={props.isLoading}
                data={props.isError || props.isLoading ? '--:--': format_time(props.sunrise ?? 0, props.timezone ?? 0)}
            />
        </Grid>
        <Grid item xs={2}>
            <Divider orientation="vertical" flexItem />
        </Grid>
        <Grid item xs={5}>
            <WeatherDataAndDescription
                description="Sunset"
                isLoading={props.isLoading}
                data={props.isError || props.isLoading ? '--:--':format_time(props.sunset ?? 0, props.timezone ?? 0)}
            />
        </Grid>
    </Grid>
    <Divider flexItem />
    <Grid container alignItems='center' spacing={3} justifyContent='space-evenly'>
        <Grid item xs={5}>
            <WeatherDataAndDescription
                description="Humidity"
                isLoading={props.isLoading}
                data={props.isError || props.isLoading ? '--.-- %':`${props.humidity.toFixed(0)} %`}
            />
        </Grid>
        <Grid item xs={2}>
            <Divider orientation="vertical" flexItem />
        </Grid>
        <Grid item xs={5}>
            <WeatherDataAndDescription
                description="Visibility"
                isLoading={props.isLoading}
                data={props.isError || props.isLoading ? '--.-- km':`${(props.visibility/1000).toFixed(2)} km`}
            />
        </Grid>
    </Grid>
    </>
}

export default WeatherDetails;
import { Divider, Grid } from "@material-ui/core";
import WeatherDataAndDescription from "./WeatherDataAndDescription";

interface WeatherDetailsProps {
    isError:boolean
    isLoading:boolean
    sunrise?: number
    sunset?: number
    humidity?: number
    visibility?: number
}

const WeatherDetails = (props: WeatherDetailsProps) => {
    const sunriseDate = new Date(props.sunrise ?? 0)
    const sunsetDate = new Date(props.sunset ?? 0)

    return <><Grid container alignItems='center' spacing={3} justifyContent='space-evenly'>
        <Grid item xs={5}>
            <WeatherDataAndDescription
                description="Sunrise"
                isLoading={props.isLoading}
                data={props.isError || props.isLoading ? '--:--':`${sunriseDate.getHours()}:${sunriseDate.getMinutes()}`}
            />
        </Grid>
        <Grid item xs={2}>
            <Divider orientation="vertical" flexItem />
        </Grid>
        <Grid item xs={5}>
            <WeatherDataAndDescription
                description="Sunset"
                isLoading={props.isLoading}
                data={props.isError || props.isLoading ? '--:--':`${sunsetDate.getHours()}:${sunsetDate.getMinutes()}`}
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
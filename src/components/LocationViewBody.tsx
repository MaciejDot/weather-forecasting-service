import { Grid } from "@material-ui/core";
import TemperatureDetails from "./TemperatureDetails";
import WeatherDetails from "./WeatherDetails";


interface LocationViewBodyProps {
    isError: boolean
    isLoading: boolean
    temp?: number
    highTemp?: number
    lowTemp?: number
    weatherKind?: string[]

    sunrise?: number
    sunset?: number
    humidity?: number
    visibility?: number
}


const LocationViewBody = (props: LocationViewBodyProps) => {

    return <Grid container alignItems='center' spacing={3} justifyContent='space-evenly'>
        <Grid item xs={12} lg={6}>
            <TemperatureDetails
                {...props}
            />
        </Grid>
        <Grid item xs={12} lg={6}>
            <WeatherDetails
                {...props}
            />
        </Grid>
    </Grid>
}

export default LocationViewBody;
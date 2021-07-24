import { Grid, Typography } from "@material-ui/core"
import { useQuery } from "react-query";
import { WeatherDataModel } from "../../apiModels/openweather/WheaterDataModel";
import LookupWeatherCard from "../../components/LookupWeatherCard";
import { useGeoLocation } from "../../hooks/useGeoLocation"
import Skeleton from '@material-ui/lab/Skeleton';
import Alert from '@material-ui/lab/Alert';

const Dashboard = () => {
    const geo = useGeoLocation();

    const apiKey = process.env.OPENWEATHER_API_KEY;

    const londonQuery = useQuery<WeatherDataModel>("london-weather", () =>
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`).then(res => res.json()))

    const berlinQuery = useQuery<WeatherDataModel>("berlin-weather", () =>
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=${apiKey}&units=metric`).then(res => res.json()))

    const myLocationQuery = useQuery<WeatherDataModel>("my-location-weather", () =>
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${geo.location.latitude}&lon=${geo.location.longitude}&units=metric&appid=${apiKey}`).then(res => res.json()), {
        enabled: !geo.isLoading && !geo.isError
    })

    return (<>
        <Typography variant='h5' align='center'>
            Dashboard
        </Typography>
        {geo.isError && <Alert severity='error'>Turn on location in your browser to see weather result for your city</Alert>}
        {myLocationQuery.isError && <Alert severity='error'>Error during fetching temperature data for your location</Alert>}
        {berlinQuery.isError && <Alert severity='error'>Error during fetching temperature data for Berlin</Alert>}
        {londonQuery.isError && <Alert severity='error'>Error during fetching temperature data for London</Alert>}
        <Grid container alignItems='center' spacing={3} justifyContent='space-evenly'>
            <Grid item xs={12} lg={4}>
                {myLocationQuery.isLoading || geo.isLoading ? <Skeleton animation="wave" height={64} /> : <LookupWeatherCard locationLabel="My Location" temp={myLocationQuery.data.main.temp} to='/location' />}
            </Grid>
            <Grid item xs={12} lg={4}>
                {berlinQuery.isLoading ? <Skeleton animation="wave" height={64} /> : <LookupWeatherCard locationLabel="Berlin" temp={berlinQuery.data.main.temp} to='/location/Berlin' />}
            </Grid>
            <Grid item xs={12} lg={4}>
                {londonQuery.isLoading ? <Skeleton animation="wave" height={64} /> : <LookupWeatherCard locationLabel="London" temp={londonQuery.data.main.temp} to='/location/London' />}
            </Grid>
        </Grid>
    </>)
}

export default Dashboard;
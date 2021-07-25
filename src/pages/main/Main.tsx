import { AppBar, Grid, Typography } from "@material-ui/core"
import { WeatherDataModel } from "../../apiModels/openweather/WheaterDataModel";
import LookupWeatherCard from "../../components/LookupWeatherCard";
import { useGeoLocation } from "../../hooks/useGeoLocation"
import Skeleton from '@material-ui/lab/Skeleton';
import Alert from '@material-ui/lab/Alert';
import { useFetchQuery } from "../../hooks/useFetchQuery";
import { GeoLocationStatusEnum } from "../../enums/GeoLocationStatusEnum";
import { useFetchQueries } from "../../hooks/useFetchQueries";
import { SpaceAfterAppBar } from "../../components/SpaceAfterAppBar";

const Dashboard = () => {
    const geo = useGeoLocation();

    const defaultCities = ["Berlin", "London"];

    const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

    const cityQueries = useFetchQueries<WeatherDataModel>(defaultCities.map(city=>`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`))

    const myLocationQuery = useFetchQuery<WeatherDataModel>(`https://api.openweathermap.org/data/2.5/weather?lat=${geo.location.latitude}&lon=${geo.location.longitude}&units=metric&appid=${apiKey}`, {
        enabled: !geo.isLoading && geo.status === GeoLocationStatusEnum.Success
    })

    return (<>
        <AppBar>
        <Typography variant='h5' align='center'>
            Dashboard
        </Typography>
        </AppBar>
        <SpaceAfterAppBar />
        {GeoLocationStatusEnum.ErrorUserOrDeviceRejection === geo.status && <Alert severity='error'>Turn on location in your browser to see weather result for your city</Alert>}
        {GeoLocationStatusEnum.ErrorLocationIsNotAvailableInBrowser === geo.status && <Alert severity='error'>Location api is not available in your current browser application may don't work properly</Alert>}
        {myLocationQuery.isError && <Alert severity='error'>Error during fetching temperature data for your location</Alert>}
        {defaultCities.map((city, index)=>cityQueries[index].isError && <Alert severity='error' key={city}>Error during fetching temperature data for {city}</Alert>)}
        <Grid container alignItems='center' spacing={3} justifyContent='space-evenly'>
            <Grid item xs={12} lg={4} id='my-location'>
                {myLocationQuery.isLoading || geo.isLoading ? <Skeleton animation="wave" height={64} /> : <LookupWeatherCard locationLabel="My Location" temp={myLocationQuery?.data?.main?.temp} to='/location' />}
            </Grid>
            {defaultCities.map((city, index)=><Grid item xs={12} lg={4} key={city} id={city}>
                {cityQueries[index].isLoading ? <Skeleton animation="wave" height={64} /> : <LookupWeatherCard locationLabel={city} temp={cityQueries[index].data?.main?.temp} to={`/location/${city}`} />}
            </Grid> )}
        </Grid>
    </>)
}

export default Dashboard;
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
import { useEffect, useState } from "react";
import { notify } from "../../notifications/Notifications";

const Dashboard = () => {
    const geo = useGeoLocation();

    const defaultCities = ["Berlin", "London"];

    const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

    const cityQueries = useFetchQueries<WeatherDataModel>(defaultCities.map(city=>`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`))

    const myLocationQuery = useFetchQuery<WeatherDataModel>(`https://api.openweathermap.org/data/2.5/weather?lat=${geo.location.latitude}&lon=${geo.location.longitude}&units=metric&appid=${apiKey}`, {
        enabled: !geo.isLoading && geo.status === GeoLocationStatusEnum.Success
    })

    const [ notified, setNotified] = useState(defaultCities.map(x=> false));

    useEffect(()=>{
        const abstract = {
            [GeoLocationStatusEnum.ErrorUserOrDeviceRejection] : ()=>notify("Turn on location in your browser to see weather result for your city",'error'),
            [GeoLocationStatusEnum.ErrorLocationIsNotAvailableInBrowser]:()=>notify("Location api is not available in your current browser application may don't work properly",'error')
        }
        abstract[geo.status] && abstract[geo.status]()
    }, [geo.status])
    
    useEffect(()=>{
        cityQueries.forEach((x, index)=>{
            if(x.isError && !notified[index]){
                notify(`Error during fetching temperature data for ${defaultCities[index]}`,'error')
               setNotified(notified.map((x,i)=>i===index? true: x ))
            } 
        })
    }, cityQueries.map(x=>x.isError))
    
    useEffect(()=>{myLocationQuery.isError && notify("Error during fetching temperature data for your location","error")},[myLocationQuery.isError])

    return (<>
        <AppBar>
        <Typography variant='h5' align='center'>
            Dashboard
        </Typography>
        </AppBar>
        <SpaceAfterAppBar />
        <Grid container alignItems='center' spacing={3} justifyContent='space-evenly'>
            <Grid item xs={12} lg={4} id='my-location'>
                {(myLocationQuery.isLoading || geo.isLoading )  
                ? <Skeleton animation="wave" height={64} /> 
                : <LookupWeatherCard locationLabel="My Location" temp={myLocationQuery?.data?.main?.temp} to='/location' />}
            </Grid>
            {defaultCities.map((city, index)=><Grid item xs={12} lg={4} key={city} id={city}>
                {cityQueries[index].isLoading ? <Skeleton animation="wave" height={64} /> : <LookupWeatherCard locationLabel={city} temp={cityQueries[index].data?.main?.temp} to={`/location/${city}`} />}
            </Grid> )}
        </Grid>
    </>)
}

export default Dashboard;
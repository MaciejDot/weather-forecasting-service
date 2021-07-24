import { useQuery } from "react-query";
import { WeatherDataModel } from "../../apiModels/openweather/WheaterDataModel";
import { useGeoLocation } from "../../hooks/useGeoLocation";
import { Alert } from "@material-ui/lab";
import LocationBar from "../../components/LocationBar";
import LocationViewBody from "../../components/LocationViewBody";

const MyLocationDetails = ()=>{
    const geo = useGeoLocation();

    const apiKey = process.env.OPENWEATHER_API_KEY;
    const query = useQuery<WeatherDataModel>("my-location-weather", ()=> 
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${geo.location.latitude}&lon=${geo.location.longitude}&units=metric&appid=${apiKey}`).then(res=>res.json()),{
            enabled: !geo.isLoading && !geo.isError
        })

    const data = query.data;

    return <>
     <LocationBar label="My Location"/>
     {geo.isError && <Alert severity='error'>Turn on location in your browser to see weather result for your city</Alert>}
     {query.isError && <Alert severity='error'>Error during fetching temperature data for your location</Alert>}
       <LocationViewBody
        isError={query.isError || geo.isError}
        isLoading={query.isLoading || geo.isLoading}
        temp={data?.main.temp}
        highTemp={data?.main?.temp_max}
        lowTemp={data?.main?.temp_min}
        weatherKind={data?.weather?.map(x => x.main)}
        sunrise={data?.sys?.sunrise}
        sunset={data?.sys?.sunset}
        humidity={data?.main?.humidity}
        visibility={data?.visibility}
       />
    </>
}

export default MyLocationDetails;
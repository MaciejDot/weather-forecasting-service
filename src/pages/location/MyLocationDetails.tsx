import { WeatherDataModel } from "../../apiModels/openweather/WheaterDataModel";
import { useGeoLocation } from "../../hooks/useGeoLocation";
import { Alert } from "@material-ui/lab";
import LocationBar from "../../components/LocationBar";
import LocationViewBody from "../../components/LocationViewBody";
import { GeoLocationStatusEnum } from "../../enums/GeoLocationStatusEnum";
import { useFetchQuery } from "../../hooks/useFetchQuery";

const MyLocationDetails = ()=>{
    const geo = useGeoLocation();

    const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
    const query = useFetchQuery<WeatherDataModel>(`https://api.openweathermap.org/data/2.5/weather?lat=${geo.location.latitude}&lon=${geo.location.longitude}&units=metric&appid=${apiKey}`, {
            enabled: !geo.isLoading && geo.status === GeoLocationStatusEnum.Success
        })

    const data = query.data;

    return <>
     <LocationBar label="My Location"/>
        {GeoLocationStatusEnum.ErrorUserOrDeviceRejection === geo.status && <Alert severity='error'>Turn on location in your browser to see weather result for your city</Alert>}
        {GeoLocationStatusEnum.ErrorLocationIsNotAvailableInBrowser === geo.status && <Alert severity='error'>Location api is not available in your current browser application may don't work properly</Alert>}
        {query.isError && <Alert severity='error'>Error during fetching temperature data for your location</Alert>}
       <LocationViewBody
        isError={query.isError || [GeoLocationStatusEnum.ErrorLocationIsNotAvailableInBrowser, GeoLocationStatusEnum.ErrorUserOrDeviceRejection].includes(geo.status)}
        timezone={data?.timezone}
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
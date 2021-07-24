import { useQuery } from "react-query";
import { WeatherDataModel } from "../../apiModels/openweather/WheaterDataModel";
import { Helmet } from "react-helmet";
import {
    useParams
} from "react-router-dom";
import { Alert } from "@material-ui/lab";
import LocationViewBody from "../../components/LocationViewBody";
import LocationBar from "../../components/LocationBar";

const LocationDetails = () => {
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const { cityName } = useParams();
    const query = useQuery<WeatherDataModel | undefined>(`${cityName}-weather`, () =>
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`).then(res => res.json()));

    const data = query.data;
    return <>  <Helmet>
        <title>Weather in {cityName}</title>
    </Helmet>
        <LocationBar label={cityName}/>
        {query.isError && <Alert severity='error'>Error during fetching temperature data for {cityName}</Alert>}
        <LocationViewBody
            isError={query.isError}
            isLoading={query.isLoading}
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

export default LocationDetails;
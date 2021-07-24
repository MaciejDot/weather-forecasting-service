import { useContext } from "react";
import { GeoLocationContext } from "../contexts/GeoLocationContext";

export function useGeoLocation(){
    const geo = useContext(GeoLocationContext)
    navigator.geolocation.getCurrentPosition(
        position=>{

            geo.setLocation({ latitude: position.coords.latitude, longitude: position.coords.longitude})
            geo.setIsLoading(false);
            geo.setIsError(false);
        },
        ()=> {
            geo.setIsError(true)
        }
    );
    return { isError:geo.isError,location: geo.location, isLoading:geo.isLoading}
}
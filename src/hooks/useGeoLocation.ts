import { useContext } from "react";
import { GeoLocationContext } from "../contexts/GeoLocationContext";
import { GeoLocationStatusEnum } from "../enums/GeoLocationStatusEnum";

export function useGeoLocation(){
    const geo = useContext(GeoLocationContext)
    if(!geo.alreadyRequested && navigator.geolocation) navigator.geolocation.getCurrentPosition(
        position=>{
            geo.setAlreadyRequested(true)
            geo.setLocation({ latitude: position.coords.latitude, longitude: position.coords.longitude})
            geo.setIsLoading(false);
            geo.setStatus(GeoLocationStatusEnum.Success);
        },
        ()=> {
            geo.setAlreadyRequested(true);
            geo.setStatus(GeoLocationStatusEnum.ErrorUserOrDeviceRejection)
        }
    );
    if(!navigator.geolocation)
    {
        geo.setStatus(GeoLocationStatusEnum.ErrorLocationIsNotAvailableInBrowser);
        geo.setIsLoading(false);
        geo.setAlreadyRequested(true);
    }
    return { status: geo.status, location: geo.location, isLoading:geo.isLoading}
}
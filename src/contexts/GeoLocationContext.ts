import React, { useState } from "react";
import { GeoLocationStatusEnum } from "../enums/GeoLocationStatusEnum";

export const geoLocationInitialValues = {
        status: GeoLocationStatusEnum.Undefined,
        isLoading: true,
        location:{latitude:0, longitude:0 },
        alreadyRequested: false,
        setAlreadyRequested: (alreadyRequested: boolean)=> {},
        setLocation:(location: {latitude:number, longitude:number })=>{},
        setIsLoading: (isLoading: boolean)=>{},
        setStatus:(status: GeoLocationStatusEnum)=>{}
    }

export const useSetupLocationContextValues=  ()=>{
    const [status, setStatus] = useState(geoLocationInitialValues.status)
    const [location, setLocation] = useState(geoLocationInitialValues.location);
    const [isLoading, setIsLoading] = useState(geoLocationInitialValues.isLoading);
    const [alreadyRequested, setAlreadyRequested] = useState(geoLocationInitialValues.alreadyRequested);
    return { status, setStatus, setIsLoading, setLocation, isLoading, location, alreadyRequested, setAlreadyRequested }
}

export const GeoLocationContext = React.createContext(geoLocationInitialValues);
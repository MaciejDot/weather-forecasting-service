import React, { useState } from "react";

const geoLocationInitialValues = {
        isError: false,
        isLoading: true,
        location:{latitude:0, longitude:0 },
        alreadyRequested: false,
        setAlreadyRequested: (alreadyRequested: boolean)=> {},
        setLocation:(location: {latitude:number, longitude:number })=>{},
        setIsLoading: (isLoading: boolean)=>{},
        setIsError:(isError: boolean)=>{}
    }

export const useSetupLocationContextValues=  ()=>{
    const [isError, setIsError] = useState(geoLocationInitialValues.isError)
    const [location, setLocation] = useState(geoLocationInitialValues.location);
    const [isLoading, setIsLoading] = useState(geoLocationInitialValues.isLoading);
    const [alreadyRequested, setAlreadyRequested] = useState(geoLocationInitialValues.alreadyRequested);
    return { isError, setIsError, setIsLoading, setLocation, isLoading, location, alreadyRequested, setAlreadyRequested }
}

export const GeoLocationContext = React.createContext(geoLocationInitialValues);
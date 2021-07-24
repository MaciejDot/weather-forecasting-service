import React, { useState } from "react";

const geoLocationInitialValues = {
        isError: false,
        isLoading: true,
        location:{latitude:0, longitude:0 },
        setLocation:(location: {latitude:number, longitude:number })=>{},
        setIsLoading: (isLoading: boolean)=>{},
        setIsError:(isError: boolean)=>{}
    }

export const useSetupLocationContextValues=  ()=>{
    const [isError, setIsError] = useState(geoLocationInitialValues.isError)
    const [location, setLocation] = useState(geoLocationInitialValues.location);
    const [isLoading, setIsLoading] = useState(geoLocationInitialValues.isLoading);
    return { isError, setIsError, setIsLoading, setLocation, isLoading, location }
}

export const GeoLocationContext = React.createContext(geoLocationInitialValues);
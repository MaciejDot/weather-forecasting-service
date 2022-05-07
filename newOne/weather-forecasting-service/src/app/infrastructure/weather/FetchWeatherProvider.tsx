import React from 'react';
import { FetchQuery } from './fetchWeather';
import FetchWeatherContext from './FetchWeatherContext';
import useFetchWeatherInit from './useFetchWeatherInit';

export default function FetchWeatherProvider({ children, query }:
     { query :FetchQuery, children: React.ReactNode}) {
  const context = useFetchWeatherInit(query);

  return (
    <FetchWeatherContext.Provider value={context}>
      {children}
    </FetchWeatherContext.Provider>
  );
}

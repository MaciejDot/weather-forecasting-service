import { createContext } from 'react';
import RequestState from '../model/RequestState';
import { WeatherDataModel } from './fetchWeather';

export interface FetchWeatherContextModel {
    requestState: RequestState,
    fetchWeather: () => Promise<void>,
    abort: () => void,
    response: WeatherDataModel | null,
}

const FetchWeatherContext = createContext<FetchWeatherContextModel | null>(null);

export default FetchWeatherContext;

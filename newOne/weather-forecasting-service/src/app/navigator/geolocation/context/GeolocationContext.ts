import { createContext } from 'react';
import Position from '../models/Position';
import RequestState from '../models/RequestState';

export interface GeolocationContextModel {
    position : Position | null;
    requestState : RequestState;
    requestGeolocation : () => void;
}

const GeolocationContext = createContext<GeolocationContextModel | null>(null);

export default GeolocationContext;

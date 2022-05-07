import { useContext } from 'react';
import forceNonNullable from '../../utils/assertions/forceNonNullable';
import GeolocationContext from './context/GeolocationContext';

export default function useGeolocationContext() {
  return forceNonNullable(useContext(GeolocationContext));
}

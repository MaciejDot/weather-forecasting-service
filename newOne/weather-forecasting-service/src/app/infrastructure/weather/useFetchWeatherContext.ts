import { useContext } from 'react';
import forceNonNullable from '../../utils/assertions/forceNonNullable';
import FetchWeatherContext from './FetchWeatherContext';

export default function useFetchWeatherContext() {
  return forceNonNullable(useContext(FetchWeatherContext));
}

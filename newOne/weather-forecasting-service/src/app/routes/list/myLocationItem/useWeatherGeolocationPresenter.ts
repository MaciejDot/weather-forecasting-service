import WeatherGeolocationPresenter
  from '../../../domains/weather/list/myLocation/geolocation/WeatherGeolocationPresenter';
import useGeolocationContext
  from '../../../navigator/geolocation/useGeolocationContext';

export default function useWeatherGeolocationPresenter() {
  const { position, requestState } = useGeolocationContext();
  return WeatherGeolocationPresenter(requestState, position);
}

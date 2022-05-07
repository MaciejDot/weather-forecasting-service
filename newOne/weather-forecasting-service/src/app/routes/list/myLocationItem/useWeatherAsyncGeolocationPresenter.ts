import WeatherAsyncGeolocationPresenter
  from '../../../domains/weather/list/myLocation/geolocation/WeatherAsyncGeolocationPresenter';
import useGeolocationContext from '../../../navigator/geolocation/useGeolocationContext';

export default function useWeatherAsyncGeolocationPresenter() {
  const { requestGeolocation } = useGeolocationContext();
  return WeatherAsyncGeolocationPresenter(requestGeolocation);
}

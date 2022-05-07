import WeatherAsyncListMyLocationPresenter from '../../../../domains/weather/list/myLocation/request/WeatherAsyncMyLocationPresenter';
import useFetchWeatherContext from '../../../../infrastructure/weather/useFetchWeatherContext';

export default function useWeatherAsyncListMyLocationPresenter() {
  const { abort, fetchWeather } = useFetchWeatherContext();
  return WeatherAsyncListMyLocationPresenter(fetchWeather, abort);
}

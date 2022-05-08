import WheaterAsyncListItemPresenter
  from '../../../domains/weather/list/item/WeatherAsyncListItemPresenter';
import useFetchWeatherContext from '../../../infrastructure/weather/useFetchWeatherContext';

export default function useWeatherListItemPresenter() {
  const { abort, fetchWeather } = useFetchWeatherContext();
  return WheaterAsyncListItemPresenter(fetchWeather, abort);
}

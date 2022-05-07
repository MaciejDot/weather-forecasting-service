import WeatherRequestStatePresenter
  from '../../../domains/weather/list/item/WeatherRequestStatePresenter';
import useFetchWeatherContext from '../../../infrastructure/weather/useFetchWeatherContext';

export default function useWeatherRequestStatePresenter() {
  const { requestState } = useFetchWeatherContext();
  return WeatherRequestStatePresenter(requestState);
}

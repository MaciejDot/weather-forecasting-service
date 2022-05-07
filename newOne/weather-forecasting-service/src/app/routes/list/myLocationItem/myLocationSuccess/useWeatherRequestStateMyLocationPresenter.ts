import WeatherRequestStateMyLocationPresenter from '../../../../domains/weather/list/myLocation/request/WeatherRequestStateMyLocationPresenter';
import useFetchWeatherContext from '../../../../infrastructure/weather/useFetchWeatherContext';

export default function useWeatherRequestStateMyLocationPresenter() {
  const { requestState } = useFetchWeatherContext();
  return WeatherRequestStateMyLocationPresenter(requestState);
}

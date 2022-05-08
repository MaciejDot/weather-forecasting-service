import WeatherSuccessItemPresenter from '../../../../../domains/weather/list/myLocation/request/WeatherSuccessMyLocationPresenter';
import useFetchWeatherContext from '../../../../../infrastructure/weather/useFetchWeatherContext';
import forceNonNullable from '../../../../../utils/assertions/forceNonNullable';

export default function useWeatherSuccessItemPresenter() {
  const { response } = useFetchWeatherContext();
  return WeatherSuccessItemPresenter(forceNonNullable(response));
}

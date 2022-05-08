import WeatherSuccessItemPresenter
  from '../../../../domains/weather/list/item/WeatherSuccessItemPresenter';
import useFetchWeatherContext from '../../../../infrastructure/weather/useFetchWeatherContext';
import forceNonNullable from '../../../../utils/assertions/forceNonNullable';
import useItemContext from '../useItemContext';

export default function useWeatherSuccessItemPresenter() {
  const { name } = useItemContext();
  const { response } = useFetchWeatherContext();
  return WeatherSuccessItemPresenter(name, forceNonNullable(response));
}

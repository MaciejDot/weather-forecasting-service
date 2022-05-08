import WeatherLoadingItemPresenter
  from '../../../../domains/weather/list/item/WeatherLoadingListItemPresenter';
import useItemContext from '../useItemContext';

export default function useWeatherLoadingItemPresenter() {
  const { name } = useItemContext();
  return WeatherLoadingItemPresenter(name);
}

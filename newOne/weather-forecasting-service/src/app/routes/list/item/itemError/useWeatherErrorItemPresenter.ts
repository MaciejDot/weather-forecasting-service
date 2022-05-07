import WeatherErrorListItemPresenter
  from '../../../../domains/weather/list/item/WeatherErrorListItemPresenter';
import useItemContext from '../useItemContext';

export default function useWeatherErrorItemPresenter() {
  const { name } = useItemContext();
  return WeatherErrorListItemPresenter(name);
}

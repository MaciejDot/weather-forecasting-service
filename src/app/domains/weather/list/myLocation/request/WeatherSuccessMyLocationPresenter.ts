import { WeatherDataModel } from '../../../../../infrastructure/weather/fetchWeather';

export default function WeatherSuccessItemPresenter(
  model: WeatherDataModel,
) {
  return {
    getTemperature, getName, getCoordinates, getDetailsHref,
  };

  function getDetailsHref() {
    return '/details/my-location';
  }

  function getName() {
    return model.name;
  }

  function getTemperature() {
    return `${Intl.NumberFormat(
      navigator.language,
      { maximumFractionDigits: 0 },
    ).format(model.main.temp - 272.15)}°C`;
  }

  function getCoordinates() {
    const formatter = Intl.NumberFormat(
      navigator.language,
      { maximumFractionDigits: 2 },
    );
    return `(${formatter.format(model.coord.lon)
    }°, ${formatter.format(model.coord.lat)}°) - my location`;
  }
}

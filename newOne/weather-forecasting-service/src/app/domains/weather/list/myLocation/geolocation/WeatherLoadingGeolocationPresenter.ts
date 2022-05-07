export default function WeatherLoadingGeolocationPresenter() {
  return {
    getName,
    getTemperaturePlaceholder,
    getCoordinatesPlaceholder,
  };

  function getTemperaturePlaceholder() {
    return '--°C';
  }

  function getCoordinatesPlaceholder() {
    return '(--°, --°) - my location';
  }

  function getName() {
    return 'My Location';
  }
}

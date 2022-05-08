export default function WeatherLoadingItemPresenter(
  name:string,
) {
  return {
    getName,
    getTemperaturePlaceholder,
    getCoordinatesPlaceholder,
  };

  function getTemperaturePlaceholder() {
    return '--°C';
  }

  function getCoordinatesPlaceholder() {
    return '(--°, --°)';
  }

  function getName() {
    return name;
  }
}

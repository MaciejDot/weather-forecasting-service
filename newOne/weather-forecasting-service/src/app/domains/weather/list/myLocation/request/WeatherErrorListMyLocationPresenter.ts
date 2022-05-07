export default function WeatherErrorListMyLocationPresenter() {
  return {
    getName,
    getErrorMessage,
    getRefreshHref,
    getRefreshMessage,
  };

  function getName() {
    return 'My Location';
  }

  function getErrorMessage() {
    return 'There was an error loading the weather.';
  }

  function getRefreshMessage() {
    return 'Click to refresh.';
  }

  function getRefreshHref() {
    return '#';
  }
}

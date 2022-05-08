export default function WeatherErrorListMyLocationPresenter() {
  return {
    getName,
    getErrorMessage,
    onRefreshClick,
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

  function onRefreshClick() {
    window.location.reload();
  }
}

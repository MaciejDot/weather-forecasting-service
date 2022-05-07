export default function WeatherErrorListItemPresenter(
  name:string,
) {
  return {
    getName,
    getErrorMessage,
    getRefreshHref,
    getRefreshMessage,
  };

  function getName() {
    return name;
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

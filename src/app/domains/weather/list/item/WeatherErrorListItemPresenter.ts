export default function WeatherErrorListItemPresenter(
  name:string,
) {
  return {
    getName,
    getErrorMessage,
    onRefreshClick,
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

  function onRefreshClick() {
    window.location.reload();
  }
}

export default function WeatherErrorListMyLocationPresenter() {
  return {
    getName,
    getErrorMessage,
  };

  function getName() {
    return 'My Location';
  }

  function getErrorMessage() {
    return 'To see weather for your location, please enable location services in your browser.';
  }
}

export default function WeatherAsyncListMyLocationPresenter(
  fetchWeather: () => Promise<void>,
  abort: () => void,
) {
  return {
    triggerFetchWeatherRequest, abortRequest,
  };
  function triggerFetchWeatherRequest() {
    fetchWeather();
  }
  function abortRequest() {
    abort();
  }
}

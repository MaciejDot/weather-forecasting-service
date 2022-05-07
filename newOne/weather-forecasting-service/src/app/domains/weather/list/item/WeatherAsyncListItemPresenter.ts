export default function WheaterAsyncListItemPresenter(
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

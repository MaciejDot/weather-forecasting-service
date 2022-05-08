export default function WeatherAsyncGeolocationPresenter(
  requestGeolocation: ()=>void,
) {
  return {
    triggerGeolocationRequest,
  };
  function triggerGeolocationRequest() {
    requestGeolocation();
  }
}

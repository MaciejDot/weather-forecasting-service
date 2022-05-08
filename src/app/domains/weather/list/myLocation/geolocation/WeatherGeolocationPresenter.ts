import RequestState
  from '../../../../../navigator/geolocation/models/RequestState';
import Position
  from '../../../../../navigator/geolocation/models/Position';
import forceNonNullable from '../../../../../utils/assertions/forceNonNullable';

export default function WeatherGeolocationPresenter(
  requestState: RequestState,
  position: Position | null,
) {
  return {
    isLoading, isError, isSuccess, getFetchContext,
  };
  function isLoading() {
    return requestState === 'loading';
  }
  function isError() {
    return requestState === 'error';
  }
  function isSuccess() {
    return requestState === 'success';
  }
  function getFetchContext() {
    const pos = forceNonNullable(position);
    return {
      lat: pos.latitude.toString(),
      lon: pos.longitude.toString(),
    };
  }
}

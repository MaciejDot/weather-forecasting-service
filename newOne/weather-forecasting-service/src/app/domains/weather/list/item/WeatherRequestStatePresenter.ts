import RequestState from '../../../../infrastructure/model/RequestState';

export default function WeatherRequestStatePresenter(state: RequestState) {
  return {
    isLoading, isError, isSuccess,
  };
  function isLoading() {
    return state === 'loading';
  }
  function isError() {
    return state === 'error';
  }
  function isSuccess() {
    return state === 'success';
  }
}

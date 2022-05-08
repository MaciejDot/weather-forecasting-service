import React, { useEffect } from 'react';
import FetchWeatherProvider from '../../../infrastructure/weather/FetchWeatherProvider';
import MyLocationError from './myLocationError/MyLocationError';
import MyLocationLoading from './myLocationLoading/MyLocationLoading';
import MyLocationItemSuccess from './myLocationSuccess/myLocationItemSuccess';
import useWeatherAsyncGeolocationPresenter from './useWeatherAsyncGeolocationPresenter';
import useWeatherGeolocationPresenter from './useWeatherGeolocationPresenter';

export default function MyLocationItem() {
  const { triggerGeolocationRequest } = useWeatherAsyncGeolocationPresenter();
  const {
    isError, isLoading, isSuccess, getFetchContext,
  } = useWeatherGeolocationPresenter();
  useEffect(() => { triggerGeolocationRequest(); }, [triggerGeolocationRequest]);
  if (isError()) {
    return <MyLocationError />;
  }
  if (isLoading()) {
    return <MyLocationLoading />;
  }
  if (isSuccess()) {
    return (
      <FetchWeatherProvider query={getFetchContext()}>
        <MyLocationItemSuccess />
      </FetchWeatherProvider>
    );
  }
  return null;
}

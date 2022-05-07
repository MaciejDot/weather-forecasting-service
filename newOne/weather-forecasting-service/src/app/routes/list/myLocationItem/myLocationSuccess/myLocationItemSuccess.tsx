import React, { useEffect } from 'react';
import useWeatherAsyncListMyLocationPresenter from './useWeatherAsyncListMyLocationPresenter';
import useWeatherRequestStateMyLocationPresenter from './useWeatherRequestStateMyLocationPresenter';
import ItemSuccess from './itemSuccess/ItemSuccess';
import ItemLoading from './itemLoading/ItemLoading';
import ItemError from './itemError/ItemError';

export default function Item() {
  const {
    abortRequest, triggerFetchWeatherRequest,
  } = useWeatherAsyncListMyLocationPresenter();
  const { isError, isLoading, isSuccess } = useWeatherRequestStateMyLocationPresenter();
  useEffect(() => {
    triggerFetchWeatherRequest();
    return () => {
      abortRequest();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isSuccess()) {
    return <ItemSuccess />;
  }
  if (isLoading()) {
    return <ItemLoading />;
  }
  if (isError()) {
    return <ItemError />;
  }

  return null;
}

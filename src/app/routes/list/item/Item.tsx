import React, { useEffect } from 'react';
import useWeatherListItemPresenter from './useWeatherListItemPresenter';
import useWeatherRequestStatePresenter from './useWeatherRequestStatePresenter';
import ItemSuccess from './itemSuccess/ItemSuccess';
import ItemLoading from './itemLoading/ItemLoading';
import ItemError from './itemError/ItemError';

export default function Item() {
  const {
    abortRequest, triggerFetchWeatherRequest,
  } = useWeatherListItemPresenter();
  const { isError, isLoading, isSuccess } = useWeatherRequestStatePresenter();
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

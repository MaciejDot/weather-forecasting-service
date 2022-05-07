import {
  useCallback, useEffect, useRef, useState,
} from 'react';
import RequestState from '../model/RequestState';
import fetchWeather, { FetchQuery, WeatherDataModel } from './fetchWeather';

export default function useFetchWeatherInit(query: FetchQuery) {
  const [response, setResponse] = useState<WeatherDataModel | null>(null);
  const [requestState, setRequestState] = useState<RequestState>('idle');
  const abortController = useRef<AbortController | null>(null);
  const aborted = useRef(false);

  const fetchWeatherCallback = useCallback(async () => {
    abortController.current = new AbortController();
    try {
      setRequestState('loading');
      setResponse(await fetchWeather(query, abortController.current.signal));
      if (aborted.current) {
        setResponse(null);
        setRequestState('error');
        return;
      }
      setRequestState('success');
    } catch { setRequestState('error'); }
  }, [query]);

  const abort = useCallback(() => {
    if (abortController.current) {
      abortController.current.abort();
      aborted.current = true;
    }
  }, []);

  useEffect(() => {
    if (requestState !== 'idle') {
      setResponse(null);
      setRequestState('idle');
      abort();
      aborted.current = false;
      abortController.current = null;
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return {
    response, requestState, abort, fetchWeather: fetchWeatherCallback,
  };
}

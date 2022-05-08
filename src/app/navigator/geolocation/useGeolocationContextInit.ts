import { useCallback, useRef, useState } from 'react';
import Position from './models/Position';
import RequestState from './models/RequestState';

export default function useGeolocationContextInit() {
  const [position, setPosition] = useState<Position | null>(null);
  const [requestState, setRequestState] = useState<RequestState>('idle');
  const requested = useRef(false);

  const requestGeolocation = useCallback(() => {
    if (requested.current) { return; }
    requested.current = true;
    setRequestState('loading');
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setPosition({ latitude, longitude });
        setRequestState('success');
      },
      () => { setRequestState('error'); },
    );
  }, [setPosition, setRequestState]);

  return { requestGeolocation, position, requestState };
}

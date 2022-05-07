import React from 'react';
import GeolocationContext from './context/GeolocationContext';
import useGeolocationContextInit from './useGeolocationContextInit';

export default function GeolocationProvider({ children }: {children: React.ReactNode}) {
  const context = useGeolocationContextInit();
  return <GeolocationContext.Provider value={context}>{children}</GeolocationContext.Provider>;
}

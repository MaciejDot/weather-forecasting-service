import React, { useMemo } from 'react';
import FetchWeatherProvider from '../../../infrastructure/weather/FetchWeatherProvider';
import ItemContext from './context/ItemContext';

export default function ItemProvider(
  { children, city: { name, q } }: {children: React.ReactNode, city: {name:string, q:string}},
) {
  const context = useMemo(() => ({ name }), [name]);
  return (
    <ItemContext.Provider value={context}>
      <FetchWeatherProvider query={{ q }}>{children}</FetchWeatherProvider>
    </ItemContext.Provider>
  );
}

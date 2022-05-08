import React from 'react';
import Item from './item/Item';
import ItemProvider from './item/ItemProvider';
import styles from './List.module.css';
import MyLocationItem from './myLocationItem/MyLocationItem';
import useWeatherListPresenter from './useWeatherListPresenter';

export default function List() {
  const { getOtherCities } = useWeatherListPresenter();
  return (
    <div className={styles.list}>
      <MyLocationItem />
      { getOtherCities().map((city) => (
        <ItemProvider city={city} key={city.q}>
          <Item />
        </ItemProvider>
      ))}
    </div>
  );
}

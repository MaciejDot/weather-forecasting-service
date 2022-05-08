import React from 'react';
import styles from './ItemLoading.module.css';
import useWeatherLoadingMyLocationPresenter from './useWeatherLoadingMyLocationPresenter';

export default function ItemLoading() {
  const {
    getName,
    getCoordinatesPlaceholder, getTemperaturePlaceholder,
  } = useWeatherLoadingMyLocationPresenter();
  return (
    <div className={styles.item}>
      <div className={styles.nameAndCoordinates}>
        <h5 className={styles.name}>
          {getName()}
        </h5>
        <p className={styles.coordinates}>{getCoordinatesPlaceholder()}</p>
      </div>
      <p className={styles.temperature}>
        {getTemperaturePlaceholder()}
      </p>

    </div>
  );
}

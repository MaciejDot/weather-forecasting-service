import React from 'react';
import styles from './MyLocationLoading.module.css';
import useWeatherLoadingGeolocationPresenter from './useWeatherLoadingGeolocationPresenter';

export default function MyLocationLoading() {
  const {
    getName,
    getCoordinatesPlaceholder, getTemperaturePlaceholder,
  } = useWeatherLoadingGeolocationPresenter();
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

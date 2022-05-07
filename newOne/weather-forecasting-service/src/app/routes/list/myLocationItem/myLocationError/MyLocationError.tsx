import React from 'react';
import styles from './MyLocationError.module.css';
import useWeatherErrorListMyLocationPresenter from './useWeatherErrorListMyLocationPresenter';

export default function MyLocationError() {
  const {
    getName,
    getErrorMessage,
  } = useWeatherErrorListMyLocationPresenter();
  return (
    <div className={styles.item}>
      <div className={styles.nameAndCoordinates}>
        <h5 className={styles.name}>
          {getName()}
        </h5>
      </div>
      <p className={styles.errorMessage}>
        {getErrorMessage()}

      </p>

    </div>
  );
}

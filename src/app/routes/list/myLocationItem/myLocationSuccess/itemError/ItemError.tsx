import React from 'react';
import useWeatherErrorListMyLocationPresenter from './useWeatherErrorListMyLocationPresenter';
import styles from './ItemError.module.css';

export default function ItemError() {
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

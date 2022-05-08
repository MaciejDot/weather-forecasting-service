import React from 'react';
import useWeatherErrorListMyLocationPresenter from './useWeatherErrorListMyLocationPresenter';
import styles from './ItemError.module.css';

export default function ItemError() {
  const {
    getName,
    getErrorMessage,
    onRefreshClick,
    getRefreshMessage,
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
        &nbsp;
        <button type="button" onClick={onRefreshClick} className={styles.errorLink}>
          {getRefreshMessage()}
        </button>
      </p>
    </div>
  );
}

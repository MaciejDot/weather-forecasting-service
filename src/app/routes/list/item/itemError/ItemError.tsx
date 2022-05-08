import React from 'react';
import { Link } from 'react-router-dom';
import useWeatherErrorItemPresenter from './useWeatherErrorItemPresenter';
import styles from './ItemError.module.css';

export default function ItemError() {
  const {
    getName,
    getErrorMessage,
    getRefreshHref,
    getRefreshMessage,
  } = useWeatherErrorItemPresenter();
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
        <Link to={getRefreshHref()} className={styles.errorLink}>{getRefreshMessage()}</Link>
      </p>

    </div>
  );
}

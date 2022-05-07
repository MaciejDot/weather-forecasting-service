import React from 'react';
import { Link } from 'react-router-dom';
import useWeatherSuccessItemPresenter from './useWeatherSuccessItemPresenter';
import styles from './ItemSuccess.module.css';

export default function ItemSuccess() {
  const {
    getCoordinates, getTemperature, getName, getDetailsHref,
  } = useWeatherSuccessItemPresenter();
  return (

    <Link
      to={getDetailsHref()}
      className={styles.link}
    >
      <div className={styles.item}>

        <div className={styles.nameAndCoordinates}>
          <h5 className={styles.name}>
            {getName()}
          </h5>
          <p className={styles.coordinates}>{getCoordinates()}</p>
        </div>
        <p className={styles.temperature}>
          {getTemperature()}
        </p>
      </div>
    </Link>

  );
}

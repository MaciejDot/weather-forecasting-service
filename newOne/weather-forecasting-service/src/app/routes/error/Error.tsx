import React from 'react';
import { Link } from 'react-router-dom';
import useErrorPresenter from './useErrorPresenter';
import styles from './Error.module.css';

export default function Error() {
  const {
    getLinkHref,
    getLinkMessage,
    getMessage,
    getTitle,
  } = useErrorPresenter();
  return (
    <section className={styles.errorContainer}>
      <h2 className={styles.errorTitle}>{getTitle()}</h2>
      <p className={styles.errorMessage}>
        {getMessage()}
&nbsp;
        <Link to={getLinkHref()} className={styles.errorLink}>{getLinkMessage()}</Link>
      </p>
    </section>
  );
}

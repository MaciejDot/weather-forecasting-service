import React from 'react';
import styles from './Footer.module.css';
import useFooterPresenter from './useFooterPresenter';
import gitPng from './GitHub-Mark-32px.png';
import liPng from './LI-In-Bug.png';

export default function Footer() {
  const {
    getAuthor,
    getOpenWeatherDescription,
    getOpenWeatherHref,
    getGithubHref,
    getLinkedinHref,
    getOpenWeatherLink,
  } = useFooterPresenter();
  return (
    <footer className={styles.footer}>
      <p className={styles.paragraph}>
        {getAuthor()}
        <br />
        {getOpenWeatherDescription()}
        &nbsp;
        <a href={getOpenWeatherHref()} className={styles.weatherLink}>{getOpenWeatherLink()}</a>
        <br />
        <a href={getLinkedinHref()} className={styles.pictureLink}>
          <img src={liPng} className={styles.picture} alt="" />
        </a>
        <br />
        <a href={getGithubHref()} className={styles.pictureLink}>
          <img src={gitPng} className={styles.picture} alt="" />
        </a>

      </p>
    </footer>
  );
}

import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Author: Maciej Dziąg
        <br />
        LinkedInICon
        <br />
        GithubIcon
        <br />
        created using openweather api
      </p>
    </footer>
  );
}

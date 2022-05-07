import React from 'react';
import { Link } from 'react-router-dom';
import useMenuPresenter from './useMenuPresenter';
import styles from './Menu.module.css';

export default function Menu() {
  const { mainLinkHref, mainLinkLabel } = useMenuPresenter();
  return (
    <nav className={styles.menuContainer}>
      <header>
        <Link to={mainLinkHref()} className={styles.appLink}>{mainLinkLabel()}</Link>
      </header>
    </nav>
  );
}

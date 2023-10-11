import React, { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import MealsImage from '../../../assets/meals.jpg';
import styles from './Header.module.css';

const Header = () => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>MeaCo</h1>
        <HeaderCartButton />
      </header>
      <div className={styles['main-image']}>
        <img src={MealsImage} alt='Meals' />
      </div>
    </Fragment>
  );
};

export default Header;

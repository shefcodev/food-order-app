import React, { useContext } from 'react';

import CartContext from '../../../store/cart-context';
import CartIcon from '../../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = ({ onClick }) => {
  const { totalAmount: amount } = useContext(CartContext);
  return (
    <button className={styles.button} onClick={onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{amount}</span>
    </button>
  );
};

export default HeaderCartButton;

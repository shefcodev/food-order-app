import React, { useContext } from 'react';

import CartContext from '../../../store/cart-context';
import CartIcon from '../../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = ({ onClick }) => {
  const { items } = useContext(CartContext);

  const numberOfCartItems = items.reduce(
    (total, item) => total + item.amount,
    0
  );

  return (
    <button className={styles.button} onClick={onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;

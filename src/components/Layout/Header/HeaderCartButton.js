import React, { useContext, useEffect, useState } from 'react';

import CartContext from '../../../store/cart-context';
import CartIcon from '../../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = ({ onClick }) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const { items } = useContext(CartContext);

  const numberOfCartItems = items.reduce(
    (total, item) => total + item.amount,
    0
  );

  const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setBtnIsHighlighted(true);

    const timerID = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timerID);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;

import React, { useContext } from 'react';

import CartItem from './CartItem';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal/Modal';
import styles from './Cart.module.css';

const Cart = ({ onClose }) => {
  const { items, totalAmount } = useContext(CartContext);

  const formattedTotalAmount = `$${totalAmount.toFixed(2)}`;
  const hasItems = items.length > 0;

  const cartItemAddHandler = (item) => {};

  const cartItemRemoveHandler = (id) => {};

  const cartItems = (
    <ul className={styles['cart-items']}>
      {items.map(({ id, name, amount, price }) => (
        <CartItem
          key={id}
          name={name}
          price={price}
          amount={amount}
          onAdd={cartItemAddHandler.bind(null, id)}
          onRemove={cartItemRemoveHandler.bind(null, id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={onClose}> 
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{formattedTotalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={onClose}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;

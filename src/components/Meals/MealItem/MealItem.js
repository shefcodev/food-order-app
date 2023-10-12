import React from 'react';

import MealItemForm from './MealItemForm';
import styles from './MealItem.module.css';

const MealItem = ({ id, name, description, price }) => {
  price = `$${price.toFixed(2)}`;

  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
};

export default MealItem;

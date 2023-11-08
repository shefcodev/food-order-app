import { useState, useEffect } from 'react';

import MealItem from './MealItem/MealItem';
import Card from '../UI/Card/Card';
import styles from './AvailableMeals.module.css';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        'https://react-food-order-app-8cf36-default-rtdb.firebaseio.com/meals.json'
      );

      if (!response.ok) {
        throw new Error('Failed to fetch meals.');
      }

      const responseData = await response.json();
      const loadedMeals = [];

      for (const key in responseData) {
        const { name, description, price } = responseData[key];
        loadedMeals.push({ id: key, name, description, price });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
      console.log(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={styles.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={styles.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = meals.map(({ id, name, description, price }) => (
    <MealItem
      key={id}
      id={id}
      name={name}
      description={description}
      price={price}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

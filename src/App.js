import React, { Fragment } from 'react';

import Cart from './components/Cart/Cart';
import Meals from './components/Meals/Meals';
import Header from './components/Layout/Header/Header';

function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;

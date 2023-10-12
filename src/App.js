import React, { Fragment } from 'react';
import Meals from './components/Meals/Meals';

import Header from './components/Layout/Header/Header';

function App() {
  return (
    <Fragment>
      <Header />
      <Meals />
    </Fragment>
  );
}

export default App;

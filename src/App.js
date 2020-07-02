import React from 'react';
import { useSelector } from 'react-redux';

import { AppRoutes, SignRoutes } from '~/routes';

function App() {
  const signed = useSelector((state) => state.auth.signed);
  const Routes = signed ? AppRoutes : SignRoutes;
  return <Routes />;
}

export default App;

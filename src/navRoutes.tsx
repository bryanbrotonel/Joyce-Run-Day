import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from './components/Loading';
import Home from './scenes/Home';

const NavRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={
        <Suspense fallback={<Loading />}>
          <Home />
        </Suspense>
      }
    ></Route>
  </Routes>
);

export default NavRoutes;

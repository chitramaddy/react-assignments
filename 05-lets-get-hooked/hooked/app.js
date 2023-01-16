import React from 'react';
import { createRoot } from 'react-dom/client';
import { Header } from './src/Header/Header';
import { RestaurantList } from './src/RestaurantList/RestaurantList';
import restaurants from './data';
import './app.css';

const Container = () => {
  return (
    <>
      <Header />
      <RestaurantList className="list" restaurants={restaurants} />
    </>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<Container />);

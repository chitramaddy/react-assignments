import React from 'react';
import { createRoot } from 'react-dom/client';
import restaurants from './data';
import './app.css';

const Header = () => {
  return (
    <div className="header">
      <h1 className="logo">EatOut</h1>
      <ul className="nav">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

const RestaurantCard = ({ name, id, location, stars, cuisines }) => {
  return (
    <div className="restaurant" id={id}>
      <h2>{name}</h2>
      <p>{location}</p>
      <p>{stars}</p>
      {cuisines.map((cuisine) => {
        return (
          <span className="cuisine" key={cuisine}>
            <i>{cuisine}</i>
          </span>
        );
      })}
    </div>
  );
};

const RestaurantList = ({ restaurants }) => {
  return (
    <div className="list">
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          id={restaurant.id}
          name={restaurant.name}
          stars={restaurant.stars}
          location={restaurant.location}
          cuisines={restaurant.cuisines}
        />
      ))}
    </div>
  );
};

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

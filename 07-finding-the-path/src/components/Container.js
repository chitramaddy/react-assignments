import { useState, useEffect } from 'react';
import getFilteredRestaurants from '../../data';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';

export const Container = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getRestaurants()
      .then((res) => {
        setAllRestaurants(res?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(res?.cards[2]?.data?.data?.cards);
      })
      .catch((e) => {
        console.log(e);
        setError(e);
      });
  }, []);

  const getRestaurants = async () => {
    const res = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&page_type=DESKTOP_WEB_LISTING'
    );
    const data = await res.json();
    return data?.data;
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const filtered = getFilteredRestaurants(searchTerm, allRestaurants);
    setFilteredRestaurants(filtered);
  };

  if (!allRestaurants) return null;

  if (error)
    return (
      <h2>
        We cannot get the restaurant info now. We are working on fixing this!!!
      </h2>
    );

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="container">
      <div className="search">
        <input
          className="searchInput"
          value={searchTerm}
          placeholder="Search for a restaurant"
          onChange={handleChange}
        ></input>
        <button className="search-btn" onClick={onSubmit}>
          Search
        </button>
      </div>

      <div className="list">
        {filteredRestaurants?.length === 0 ? (
          <h1>No matching restaurant!!!</h1>
        ) : (
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.data.id}
              id={restaurant.data.id}
              name={restaurant.data.name}
              avgRating={restaurant.data.avgRating}
              location={restaurant.data.area}
              cuisines={restaurant.data.cuisines}
              slaString={restaurant.data.slaString}
            />
          ))
        )}
      </div>
    </div>
  );
};

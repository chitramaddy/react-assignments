import Search from './Search';
import RestaurantCard from './RestaurantCard';

export const Container = ({ restaurants }) => {
  return (
    <div className="container">
      <div className="search">
        <Search />
      </div>

      <div className="list">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.data.id}
            id={restaurant.data.id}
            name={restaurant.data.name}
            avgRating={restaurant.data.avgRating}
            location={restaurant.data.area}
            cuisines={restaurant.data.cuisines}
            slaString={restaurant.data.slaString}
          />
        ))}
      </div>
    </div>
  );
};

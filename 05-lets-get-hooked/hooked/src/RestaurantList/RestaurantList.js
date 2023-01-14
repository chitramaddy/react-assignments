import RestaurantCard from '../RestaurantCard/RestaurantCard';

export const RestaurantList = ({ restaurants }) => {
  return (
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
  );
};

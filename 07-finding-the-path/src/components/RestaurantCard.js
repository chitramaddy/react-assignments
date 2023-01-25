export default RestaurantCard = ({
  name,
  id,
  location,
  cuisines,
  avgRating,
  slaString,
}) => {
  return (
    <div className="restaurant" id={id}>
      <h3>{name}</h3>
      <p>{location}</p>
      <p>Rating: {avgRating} Stars</p>
      <p>{slaString}</p>
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

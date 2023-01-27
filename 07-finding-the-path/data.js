export default getFilteredRestaurants = (name, restaurants) => {
  console.log(restaurants);
  return restaurants.filter((rest) => {
    return rest?.data?.name?.toLowerCase().includes(name?.toLowerCase());
  });
};

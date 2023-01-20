export default getFilteredRestaurants = (name, restaurants) => {
  return restaurants.filter((rest) => {
    return rest?.data?.name?.toLowerCase().includes(name?.toLowerCase());
  });
};

export const filterData = (restaurantData, searchText) => {
  const filterData = restaurantData.filter((e) => {
    return e.name.toLowerCase().includes(searchText.toLowerCase());
  });
  return filterData;
};

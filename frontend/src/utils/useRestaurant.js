import { useState, useEffect } from "react";
import { restaurantData } from "../constant";

const useRestaurant = (id) => {
  const [menu, setMenu] = useState(null);
  useEffect(() => {
    //@todo Get Data From Api
    getMenu();
  }, []);

  async function getMenu() {
    for (const item of restaurantData) {
      if (item.name.toLowerCase().includes(id.toLowerCase())) {
        setMenu(item);
        break;
      }
    }
  }
  return menu;
};
export default useRestaurant;

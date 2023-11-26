import { restaurantData } from "../constant";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import imgSrc from "../assest/img/food.jpg";
import { Link } from "react-router-dom";
import checkOnline from "../utils/checkOnline";
import Search from "./Search";
import { Carousel } from "./Carousel";
import Footer from "./Footer";

const RestaurantCard = (restaurantCard) => (
  <div
    key={restaurantCard.key}
    className="mx-auto my-1 w-64 p-2 bg-fefe rounded-lg hover:shadow-lg"
  >
    <Link to={"/restaurant/" + restaurantCard.name}>
      <img src={imgSrc} alt="menu" className="rounded-lg w-full" />
      <div className="grid gap-4">
        <div className="p-4">
          <h2 className="text-lg text-not-perfect-grey font-semibold mb-1">
            {restaurantCard.name}
          </h2>
          <p className="text-gray-700 mb-2">{restaurantCard.description}</p>
          <p className="text-green-600 font-semibold">{restaurantCard.price}</p>
        </div>
      </div>
    </Link>
  </div>
);

const Body = () => {
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const isOnline = checkOnline();

  useEffect(() => {
    getDataFromApi();
  }, []);

  async function getDataFromApi() {
    // @todo fetch restaraunt from backend
    setAllRestaurant(restaurantData);
    setFilteredRestaurant(restaurantData);
  }

  if (!isOnline) return <>Network Error! Check your internet connection</>;

  return allRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="pt-2">
        <Search
          setFilteredRestaurant={setFilteredRestaurant}
          allRestaurant={allRestaurant}
        />
        <div>
          <Carousel />
        </div>
        <div className="restaurant flex flex-wrap m-8">
          {filteredRestaurant.length === 0 ? (
            <h1>Not Found</h1>
          ) : (
            filteredRestaurant.map((card) => {
              return RestaurantCard(card);
            })
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Body;

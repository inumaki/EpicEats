import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import imgSrc from "../assest/img/food.jpg";
import Skimmer from "./Shimmer";
import { useDispatch } from "react-redux";
import { addToCart } from "../utils/cartSlice";
import cartIcon from "../assest/img/cartAdd.png";
import food1 from "../assest/img/food1.jpg";
import food2 from "../assest/img/food2.jpg";
import Footer from "./Footer";

const MAX_DESCRIPTION_LENGTH = 31; // Maximum length of the description before truncation

const designMenu = (menuData, addData) => {
  const truncatedDescription =
    menuData.description.length > MAX_DESCRIPTION_LENGTH
      ? `${menuData.description.slice(0, MAX_DESCRIPTION_LENGTH)}...`
      : menuData.description;
  return (
    <div
      className="m-2 p-2 rounded-lg shadow-xl bg-fefe text-not-perfect-grey font-semibold flex flex-col card w-[120px]"
      key={menuData.itemName}
    >
      <img
        src={imgSrc}
        alt={menuData.itemName}
        className="w-full h-auto mb-1 rounded-lg"
        style={{ objectFit: "cover" }} // Make the image touch the border
      />
      <div className="flex justify-between">
        <h3 className="text-sm mb-1">{menuData.itemName}</h3>
        <h3 className="text-sm mb-1 text-green-600 font-semibold">
          ${menuData.price}
        </h3>
      </div>
      <img
        src={cartIcon}
        className="bg-fefe hover:bg-green-600 text-white font-semibold py-1 px-2 w-12 rounded-full transition-colors  active:bg-orange-500"
        onClick={() => {
          addData(menuData);
        }}
      />
      <p className="text-sm">{truncatedDescription}</p>
    </div>
  );
};

const RestaurantMenu = () => {
  const { id } = useParams();
  const itemMenu = useRestaurant(id);
  const dispatch = useDispatch();
  const addItem = (item) => {
    dispatch(addToCart(item));
  };

  return !itemMenu ? (
    <Skimmer />
  ) : (
    <div className="">
      <div className="sticky top-24 right-[12px] p-2">
        <div className="img-container p-4 flex rounded-lg border-2 shadow-xl">
          <img src={food1} alt="Food 1" className="h-48 m-1 rounded-md" />
          <img src={food2} alt="Food 2" className="h-48 m-1 rounded-md" />
        </div>
        <div className="p-6">
          <h1 className="text-2xl font-semibold mb-2">{itemMenu.name}</h1>
          <p className="text-gray-700 mb-2">{itemMenu.description}</p>
          <p className="text-orange-500 font-semibold">{itemMenu.location}</p>
        </div>
      </div>
      <div className="flex-col right-column">
        {itemMenu.menu.map((tempMenu) => {
          return designMenu(tempMenu, addItem);
        })}
      </div>
      <Footer />
    </div>
  );
};
export default RestaurantMenu;

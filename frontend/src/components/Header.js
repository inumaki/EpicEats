import { Link } from "react-router-dom";
import Authorization from "./Authorization";
import logo from "../assest/img/epicEats.png";
import shoppingCart from "../assest/img/shoppingCart.png";
import { useSelector, useDispatch } from "react-redux";

const Topic = () => {
  return (
    <>
      <img className="h-24 w-24 p-1" src={logo} alt="Epic Eats Logo" />
    </>
  );
};

const Header = () => {
  const items = useSelector((state) => state.cart.items);
  return (
    <div className="bg-white flex justify-between items-center px-3 shadow-sm text-not-perfect-grey font-mono text-lg sticky top-0 left-0 right-0 z-10">
      <Topic />
      <ul className="flex space-x-4 ">
        <Link to="/home">
          <li className="text-gray-700 hover:text-vibrant-red focus:text-vibrant-red cursor-pointer transition-colors duration-300">
            Home
          </li>
        </Link>
      </ul>
      <div className="flex mr-4">
        <Link to="/cart">
          <div className="flex ">
            <img src={shoppingCart} className="h-8 w-8 p-1" />
            <div className=" mr-4 text-gray-700 hover:text-vibrant-red focus:text-vibrant-red cursor-pointer transition-colors duration-300">
              Cart
              {items.length > 0 ? <>({items.length})</> : null }
            </div>
          </div>
        </Link>
        <Authorization />
      </div>
    </div>
  );
};

export default Header;

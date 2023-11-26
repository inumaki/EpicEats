import { useContext, useState } from "react";
import { Auth } from "../context/AuthContext";

const Authorization = () => {
  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn, logIn, logOut } =
    Auth();
  return (
    <div className="text-gray-700 hover:text-vibrant-red focus:text-vibrant-red cursor-pointer transition-colors duration-300">
      {isLoggedIn ? (
        <div onClick={logOut}>{"Log out"}</div>
      ) : (
        <div onClick={logIn}>{"Log in"}</div>
      )}
    </div>
  );
};
export default Authorization;

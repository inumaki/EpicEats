import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const Auth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = (props) => {
  const [authUser, setAuthUser] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState();
  useEffect(() => {
    setIsLoggedIn(true);
    setAuthUser({
      name: "eto",
      email: "eto@gmail.com",
    });
  }, []);

  const logIn = () => {
    setIsLoggedIn(true);
    setAuthUser({
      name: "eto",
      email: "eto@gmail.com",
    });
  };

  const logOut = () => {
    setIsLoggedIn(false);
    setAuthUser();
  };
  const value = {
    authUser,
    setAuthUser,
    isLoggedIn,
    setIsLoggedIn,
    logOut,
    logIn,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

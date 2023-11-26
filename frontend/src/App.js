import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import Footer from "./components/Footer";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import { AuthProvider } from "./context/AuthContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";


const InstaMart = lazy(() => import("./components/InstaMart")); //lazy loading

const Container = () => {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    setUserInfo({ username: "eto", email: "eto@gmail.com" });
  }, []); //one time

  return (
    <>
      <Provider store={store}>
        <AuthProvider>
          <Header />
          <Outlet />
        </AuthProvider>
      </Provider>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    children: [
      {
        path: "/home",
        element: <Body />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <InstaMart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

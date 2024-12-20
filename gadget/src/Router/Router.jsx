import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Component/Dashboard/Dashborad";
import Details from "../Component/Details/Details";
import ErrorPage from "../Component/ErrorPage/Errorpage";
import GadgetList from "../Component/Home/GadgetList";
import Home from "../Component/Home/Home";
import Offers from "../Component/Offers/Offers";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: ":category",
        element: <GadgetList />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/offers",
    element: <Offers />,
  },
  {
    path: "/details/:id",
    loader: ({ params }) =>
      fetch(`/data.json`)
        .then((response) => response.json())
        .then((data) => data.find((gadget) => gadget.product_id === params.id)),
    element: <Details></Details>,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default Router;

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Dashborad from "../Component/Dashboard/Dashborad";
import Errorpage from "../Component/ErrorPage/Errorpage";
import Home from "../Component/Home/Home";
import Statistics from "../Component/Statistics/Statistics";
import Layout from "../Layout/Layout";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/dashboard",
        element: <Dashborad></Dashborad>,
      },

      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
    ],
  },
  {
    path: "*",
    element: <Errorpage></Errorpage>,
  },
]);

export default Router;

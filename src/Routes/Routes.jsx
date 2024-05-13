import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ViewDetails from "../Pages/Viewdetails/ViewDetails";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";
import AddFoodItem from "../Pages/AddFoodItems/AddFoodItem";
import ManageMyFood from "../Pages/ManageMyFood/ManageMyFood";
import UpdateFood from "../Pages/UpdateFood/UpdateFood";
import MyFoodRequests from "../Pages/MyFoodRequests/MyFoodRequests";
import ContactUs from "../Pages/ContactUS/ContactUs";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/add-food",
        element: <PrivateRoute><AddFoodItem></AddFoodItem></PrivateRoute>,
      },
      {
        path: "/available-foods",
        element: <AvailableFoods></AvailableFoods>,
      },
      {
        path: "/manage-my-food",
        element: <PrivateRoute><ManageMyFood></ManageMyFood></PrivateRoute>,
      },
      {
  path: "/update-food/:id",
  element: <PrivateRoute><UpdateFood></UpdateFood></PrivateRoute>,
  loader: ({ params }) =>
    fetch(`${import.meta.env.VITE_API_URL}/foods/${params.id}`, {
      credentials: 'include' // Add the credentials option here
    }).then((res) => res.json()),
},
      {
        path: '/my-food-request',
        element: <PrivateRoute><MyFoodRequests></MyFoodRequests></PrivateRoute>
      },
     {
  path: "/view-details/:id",
  element: <PrivateRoute><ViewDetails /></PrivateRoute>,
  loader: ({ params }) => {
    return fetch(`${import.meta.env.VITE_API_URL}/foods/${params.id}`, {
      credentials: 'include' // Setting credentials to include
    }).then((res) => res.json());
       }
      },
      {
        path: '/contact-us',
        element:<ContactUs></ContactUs>
     }

    ],
  },
]);

export default router;
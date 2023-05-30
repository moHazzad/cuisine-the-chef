import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Blog from "./components/Blog/Blog.jsx";
import LogIn from "./components/LoginPage/Login/LogIn.jsx";
import Register from "./components/LoginPage/Register/Register.jsx";
import AuthProvider from "./components/AuthProvider/AuthProvider.jsx";
import ChefDetails from "./components/Home/ChefDetails.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivetRout from "./components/PrivetRout/PrivetRout.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "chefDetails/:id",
        element: <PrivetRout >  <ChefDetails />  </PrivetRout>   ,
        loader:({params}) => fetch(`https://master-cuisine-sever-hazzadmdap-gmailcom.vercel.app/chefs/${params.id}`) 
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "login",
        element: <LogIn />,
      },
      {
        path: "Register",
        element: <Register />,
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
    
  </React.StrictMode>
);

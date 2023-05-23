import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/layout/MainLayout";
import Home from "../pages/Home";
import path from "path";
import { SignUpForm } from "../pages/auth/SignUp";
import { SignInForm } from "../pages/auth/SignIn";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },

  {
    path: "/signup",
    element: <SignUpForm />,
  },
  {
    path: "/signin",
    element: <SignInForm />,
  },
]);

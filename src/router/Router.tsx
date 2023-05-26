import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/layout/MainLayout";
import Home from "../pages/Home";
import { SignUpForm } from "../pages/auth/SignUp";
import { SignInForm } from "../pages/auth/SignIn";
import ExploreMore from "../pages/ExploreMore";
import CreateReciepes from "../pages/CreateReciepes";
import PrivateRoute from "../privateRoute/PrivateRoute";
import RecipeDetailsPage from "../pages/detailspage/DetailPage";

export const Router = createBrowserRouter([
  {
    path: "/",
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
  {
    path: "/exploremore",
    element: (
      <PrivateRoute>
        <ExploreMore />
      </PrivateRoute>
    ),
  },
  {
    path: "/create",
    element: <CreateReciepes />,
  },
  {
    path: "/detail",
    element: <RecipeDetailsPage />,
  },
]);

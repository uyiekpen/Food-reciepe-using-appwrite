import React, { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const user = useSelector((state: any) => state.user); // Accessing the user state from Redux

  return user ? (
    <>
      {React.Children.map(children, (child, index) => (
        <React.Fragment key={index}>{child}</React.Fragment>
      ))}
    </>
  ) : (
    <Navigate to="/exploremore" replace />
  );
};

export default PrivateRoute;

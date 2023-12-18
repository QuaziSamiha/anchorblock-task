// import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = () => {
  const location = useLocation();
//   const isAuthenticated = useSelector((state) => state.auth.user !== null);
  return <Navigate state={{ from: location }} to="/signup" replace></Navigate>;
};

export default PrivateRoute;

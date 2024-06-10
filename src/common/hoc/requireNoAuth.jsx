import { Navigate } from "react-router";
import { userSelector } from "../../redux-saga/redux/slices/userSlice";
import { useSelector } from "react-redux";
import { APP_URL } from "../../config";

const requireNoAuth = (Component) => {
  function NoAuthHoc(props) {
    const { isAuthenticated } = useSelector(userSelector);
    console.log(isAuthenticated);
    return !isAuthenticated ? (
      <Navigate to={APP_URL.DASHBOARD} />
    ) : (
      <Component {...props} />
    );
  }

  return (
    <div className={`w-full min-h-screen flex justify-center items-center `}>
      <NoAuthHoc />
    </div>
  );
};
export default requireNoAuth;

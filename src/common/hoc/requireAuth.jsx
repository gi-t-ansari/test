import { Navigate } from "react-router";
import { APP_URL as URLS } from "../../config";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux-saga/redux/slices/userSlice";
import Layout from "../layout/Layout";

const requireAuth = (Component) => {
  function AuthHoc(props) {
    const { isAuthenticated } = useSelector(userSelector);

    return !isAuthenticated ? (
      <Layout>
        <Component {...props} />
      </Layout>
    ) : (
      <Navigate to={URLS.LOGIN} />
    );
  }

  return <AuthHoc />;
};
export default requireAuth;

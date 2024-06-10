import { Suspense, lazy } from "react";
// import { CircularProgress } from "../../common/components";

const LazyLogin = lazy(() => import("./Login"));
const LazySignUp = lazy(() => import("./SignUp"));

export const Login = (props) => (
  <Suspense fallback={<>Loading...</>}>
    <LazyLogin {...props} />
  </Suspense>
);

export const SignUp = (props) => (
  <Suspense fallback={<>Loading...</>}>
    <LazySignUp {...props} />
  </Suspense>
);

import { Suspense, lazy } from "react";
// import { CircularProgress } from "../../common";

const LazyAccount = lazy(() => import("./Account"));

export const Account = (props) => (
  <Suspense fallback={<>Loading..</>}>
    <LazyAccount {...props} />
  </Suspense>
);

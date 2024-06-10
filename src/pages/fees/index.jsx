import { Suspense, lazy } from "react";
// import { CircularProgress } from "../../common";

const LazyFees = lazy(() => import("./Fees"));

export const Fees = (props) => (
  <Suspense fallback={<>Loading..</>}>
    <LazyFees {...props} />
  </Suspense>
);

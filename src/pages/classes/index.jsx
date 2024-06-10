import { Suspense, lazy } from "react";
// import { CircularProgress } from "../../common";

const LazyClasses = lazy(() => import("./Classes"));

export const Classes = (props) => (
  <Suspense fallback={<>Loading..</>}>
    <LazyClasses {...props} />
  </Suspense>
);

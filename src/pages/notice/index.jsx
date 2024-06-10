import { Suspense, lazy } from "react";
// import { CircularProgress } from "../../common";

const LazyNotice = lazy(() => import("./Notice"));

export const Notice = (props) => (
  <Suspense fallback={<>Loading..</>}>
    <LazyNotice {...props} />
  </Suspense>
);

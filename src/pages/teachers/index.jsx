import { Suspense, lazy } from "react";
// import { CircularProgress } from "../../common";

const LazyTeachers = lazy(() => import("./Teachers"));

export const Teachers = (props) => (
  <Suspense fallback={<>Loading..</>}>
    <LazyTeachers {...props} />
  </Suspense>
);

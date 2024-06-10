import { Suspense, lazy } from "react";
// import { CircularProgress } from "../../common";

const LazyStudents = lazy(() => import("./Students"));

export const Students = (props) => (
  <Suspense fallback={<>Loading..</>}>
    <LazyStudents {...props} />
  </Suspense>
);

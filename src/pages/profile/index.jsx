import { Suspense, lazy } from "react";
// import { CircularProgress } from "../../common";

const LazyProfile = lazy(() => import("./Profile"));

export const Profile = (props) => (
  <Suspense fallback={<>Loading..</>}>
    <LazyProfile {...props} />
  </Suspense>
);

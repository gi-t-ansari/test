import { Suspense, lazy } from "react";
// import { CircularProgress } from "../../common";

const LazyAttendance = lazy(() => import("./Attendance"));

export const Attendance = (props) => (
  <Suspense fallback={<>Loading..</>}>
    <LazyAttendance {...props} />
  </Suspense>
);

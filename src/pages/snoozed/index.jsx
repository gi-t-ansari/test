import { Suspense, lazy } from "react";

const LazySnoozed = lazy(() => import("./Snoozed"));

export const Snoozed = (props) => (
  <Suspense fallback={<>Loading...</>}>
    <LazySnoozed {...props} />
  </Suspense>
);

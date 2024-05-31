import { Suspense, lazy } from "react";

const LazySent = lazy(() => import("./Sent"));

export const Sent = (props) => (
  <Suspense fallback={<>Loading...</>}>
    <LazySent {...props} />
  </Suspense>
);

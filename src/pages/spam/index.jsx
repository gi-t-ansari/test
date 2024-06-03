import { Suspense, lazy } from "react";

const LazySpam = lazy(() => import("./Spam"));

export const Spam = (props) => (
  <Suspense fallback={<>Loading...</>}>
    <LazySpam {...props} />
  </Suspense>
);

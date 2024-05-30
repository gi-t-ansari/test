import { Suspense, lazy } from "react";

const LazyDrafts = lazy(() => import("./Drafts"));

export const Drafts = (props) => (
  <Suspense fallback={<>Loading...</>}>
    <LazyDrafts {...props} />
  </Suspense>
);

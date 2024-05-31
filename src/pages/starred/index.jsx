import { Suspense, lazy } from "react";

const LazyStarred = lazy(() => import("./Starred"));

export const Starred = (props) => (
  <Suspense fallback={<>Loading...</>}>
    <LazyStarred {...props} />
  </Suspense>
);

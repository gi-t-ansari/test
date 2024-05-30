import { Suspense, lazy } from "react";

const LazyTrash = lazy(() => import("./Trash"));

export const Trash = (props) => (
  <Suspense fallback={<>Loading...</>}>
    <LazyTrash {...props} />
  </Suspense>
);

import { Suspense, lazy } from "react";

const LazyInbox = lazy(() => import("./Inbox"));

export const Inbox = (props) => (
  <Suspense fallback={<>Loading...</>}>
    <LazyInbox {...props} />
  </Suspense>
);

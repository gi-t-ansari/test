import React, { useState } from "react";
import "./App.css";
import Header from "./common/layout/main/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { APP_URL } from "./config";
import { Drafts, Inbox, Sent, Snoozed, Spam, Starred, Trash } from "./pages";
import Layout from "./common/layout/main/Layout";

function App() {
  const [expanded, setExpanded] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={APP_URL.INBOX}
          element={
            <Layout expanded={expanded} setExpanded={setExpanded}>
              <Inbox expanded={expanded} />
            </Layout>
          }
        />
        <Route
          path={APP_URL.SNOOZED}
          element={
            <Layout expanded={expanded} setExpanded={setExpanded}>
              <Snoozed expanded={expanded} />
            </Layout>
          }
        />
        <Route
          path={APP_URL.SENT}
          element={
            <Layout expanded={expanded} setExpanded={setExpanded}>
              <Sent />
            </Layout>
          }
        />
        <Route
          path={APP_URL.STARRED}
          element={
            <Layout expanded={expanded} setExpanded={setExpanded}>
              <Starred />
            </Layout>
          }
        />
        <Route
          path={APP_URL.DRAFTS}
          element={
            <Layout expanded={expanded} setExpanded={setExpanded}>
              <Drafts />
            </Layout>
          }
        />
        <Route
          path={APP_URL.TRASH}
          element={
            <Layout expanded={expanded} setExpanded={setExpanded}>
              <Trash />
            </Layout>
          }
        />
        <Route
          path={APP_URL.SPAM}
          element={
            <Layout expanded={expanded} setExpanded={setExpanded}>
              <Spam />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

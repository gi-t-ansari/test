import React from "react";
import "./App.css";
import Header from "./common/layout/main/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { APP_URL } from "./config";
import { Drafts, Inbox, Sent, Spam, Starred, Trash } from "./pages";
import Layout from "./common/layout/main/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={APP_URL.INBOX}
          element={
            <Layout>
              <Inbox />
            </Layout>
          }
        />
        <Route
          path={APP_URL.SENT}
          element={
            <Layout>
              <Sent />
            </Layout>
          }
        />
        <Route
          path={APP_URL.STARRED}
          element={
            <Layout>
              <Starred />
            </Layout>
          }
        />
        <Route
          path={APP_URL.DRAFTS}
          element={
            <Layout>
              <Drafts />
            </Layout>
          }
        />
        <Route
          path={APP_URL.TRASH}
          element={
            <Layout>
              <Trash />
            </Layout>
          }
        />
        <Route
          path={APP_URL.SPAM}
          element={
            <Layout>
              <Spam />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

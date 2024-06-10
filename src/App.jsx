import { React } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { APP_URL } from "./config";
import { requireAuth, requireNoAuth } from "./common";
import {
  Account,
  Attendance,
  Classes,
  Dashboard,
  Fees,
  Login,
  Notice,
  Profile,
  SignUp,
  Students,
  Teachers,
} from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={APP_URL.LOGIN} element={requireNoAuth(Login)} />
          <Route path={APP_URL.SIGNUP} element={requireNoAuth(SignUp)} />
          <Route path={APP_URL.DASHBOARD} element={requireAuth(Dashboard)} />
          <Route path={APP_URL.STUDENTS} element={requireAuth(Students)} />
          <Route path={APP_URL.TEACHERS} element={requireAuth(Teachers)} />
          <Route path={APP_URL.CLASSES} element={requireAuth(Classes)} />
          <Route path={APP_URL.ATTENDANCE} element={requireAuth(Attendance)} />
          <Route path={APP_URL.NOTICE} element={requireAuth(Notice)} />
          <Route path={APP_URL.ACCOUNT} element={requireAuth(Account)} />
          <Route path={APP_URL.PROFILE} element={requireAuth(Profile)} />
          <Route path={APP_URL.FEES} element={requireAuth(Fees)} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

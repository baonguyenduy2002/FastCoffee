import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import RequireAuth from "./components/RequireAuth";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth redirectTo={"/dashboard"}>
              <LoginPage />
            </RequireAuth>
          }
        />

        <Route
          path="/*"
          element={
            <RequireAuth redirectTo={"/"}>
              <DashboardPage />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
};

export default App;

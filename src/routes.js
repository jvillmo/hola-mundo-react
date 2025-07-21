import React from "react";
import {
  BrowserRouter,
  Routes as RouterRoutes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import Home from "./pages/home";
import App from "./components/App";

export default function Routes() {
  return (
    <>
      <BrowserRouter>
        <Link className="btn btn-success m-1" to="/home">
          home
        </Link>

        <Link className="btn btn-success m-1" to="/app">
          app
        </Link>

        <RouterRoutes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/app" element={<App />} />
          <Route path="/home" element={<Home />} />
        </RouterRoutes>
      </BrowserRouter>
    </>
  );
}

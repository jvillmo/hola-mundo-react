import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Home from "./pages/home";
import App from "./components/App";

export default function Routes() {
  return (
    <Routes>
      <Link className="btn btn-success m-1" to="/home">
        home
      </Link>
      <Route path="/" element={<home />} />
    </Routes>
  );
}

/*
class Routes extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Link className="btn btn-success m-1" to="/home">
            home
          </Link>

          <Link className="btn btn-success m-1" to="/app">
            app
          </Link>

          <Redirect exact from="/" to="/home" />

          <Switch>
            <Route path="/app">
              <App />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
*/

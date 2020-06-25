import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./react2components/PrivateRoute";
import FoodtrkrPage from "./react2components/FoodtrkrPage";
import TruckLogin from "./react2components/TruckLogin";
import Nav from "./react2components/Nav";

// import "./styles.scss";

// created routes + privateRoutes
export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={TruckLogin} />
          <PrivateRoute exact path="/FoodtrkrPage" component={FoodtrkrPage} />
        </Switch>
      </div>
    </Router>
  );
}

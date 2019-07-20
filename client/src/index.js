import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { Provider } from "react-redux";
import "./index.css";
// import App from './App';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Welcome from "./components/Welcome";
import Login from "./containers/Login";
import SignUp from "./containers/SignUp";
import UserWelcome from "./components/UserWelcome";
import Logout from "./containers/Logout";
import Building from "./containers/Building";
import BuildingContainer from "./containers/BuildingContainer";

import "bootstrap/dist/css/bootstrap.css";

import * as serviceWorker from "./serviceWorker";

const initialState = {
  buildings: []
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/user-welcome" component={UserWelcome} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/building/new" component={BuildingContainer} />

        <Route
          exact
          path="/building/:id"
          render={props => {
            return <Building buildingId={props.match.params.id} />;
          }}
        />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

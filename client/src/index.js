import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
// import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Welcome from './Welcome';
import Login from './Login';
import SignUp from './SignUp';
import Building from './components/Building';
import Buildings from './components/Buildings';
import BuildingDocuments from './BuildingDocuments';
import TenantsList from './TenantsList';
import BuildingContainer from './containers/BuildingContainer';
// import TenantsList from './TenantsList';
import * as serviceWorker from './serviceWorker';

const reducer = (s) => s
const initialState = {
  address: "2942 Baisley Avenue, Bronx, NY"
}

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render((
  <Provider store={store}>
    <Router>

        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/login" component={Login} />
          <Route exact path ="/signup" component={SignUp} />
          <Route exact path="/building" component={Building} />
          <Route exact path="/documents" component={BuildingDocuments} />
          <Route exact path="/tenants" component={TenantsList} />
          <Route exact path="/buildings" component={Buildings} />
          <Route exact path="/building/new"
            render={(props) => {
              return <BuildingContainer />
            }}
          />
          <Route exact path ="/building/:id"
             render={(props) => {
               return <Building buildingId={props.match.params.id}  />
             }}
          />
        </Switch>
      
    </Router>
  </Provider>),
  document.getElementById('root')
);

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

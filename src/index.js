import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Welcome from './Welcome';
import Login from './Login';
import SignUp from './SignUp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
  <Router>
    <React.Fragment>
      <NavBar />
      <Route exact path="/" component={Welcome} />
      <Route exact path="/login" component={Login} />
      <Route exact path ="/signup" component={SignUp} />
    </React.Fragment>
  </Router>),
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

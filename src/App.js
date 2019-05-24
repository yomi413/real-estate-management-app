import React from 'react';
import './App.css';
// import Welcome from '/Welcome';
import Tenant from './components/Tenant';
// import House from './components/House';
// import TenantsList from 'TenantsList';

function App() {
  return (
    <div className="App">

      <Tenant name="Tom" lease='true' rent='1000'/>


    </div>
  );
}

export default App;

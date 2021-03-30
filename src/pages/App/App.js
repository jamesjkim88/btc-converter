import React from 'react';
import InputAmount from '../../components/InputAmount/InputAmount';
import 'semantic-ui-css/semantic.min.css'
import { Route, Switch } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
    <nav>
      <ul>
        <li className="nav-left-pad"><img src="https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg" alt="BTC" width="75"/></li>
        <li className="nav-top-pad"><h1>Simply BTC-to-USD</h1></li>
        <li className="nav-right-pad li.nav-top-pad">help</li>
      </ul>
    </nav>
      <InputAmount />
    </div>
  );
}

export default App;
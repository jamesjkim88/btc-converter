import React from 'react';
import InputAmount from '../../components/InputAmount/InputAmount';
import 'semantic-ui-css/semantic.min.css'
import { Route, Switch } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';


function App() {
  return (
    <div className="App container">
      <InputAmount />
    </div>
  );
}

export default App;
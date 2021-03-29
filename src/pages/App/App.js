import React from 'react';
import InputAmount from '../../components/InputAmount/InputAmount';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';


function App() {
  return (
    <div className="App">
      <InputAmount />
    </div>
  );
}

export default App;
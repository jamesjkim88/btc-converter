import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import InputAmount from '../../components/InputAmount/InputAmount';
import Info from '../../components/Info/Info';
import 'semantic-ui-css/semantic.min.css'
import { Route, Switch } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <InputAmount />
      <Info />
    </div>
  );
}

export default App;
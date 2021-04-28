import React, { Fragment } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.scss';
import Body from './components/body/Body';
import Header from './components/header/Header';

function App() {
  return (
    <Router>
      <Header />
      <Body/>
    </Router>
  );
}

export default App;

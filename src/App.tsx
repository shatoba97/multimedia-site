import React from 'react';
import { useSelector } from 'react-redux';
import {
  Route,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';
import './App.scss';
import Auth from './components/auth/Auth';
import AllAnimals from './components/body/all-animals/AllAnimals';
import ToDayAnimals from './components/body/to-day/ToDayAnimals';
import Header from './components/header/Header';
import Animals from './core/shared/components/animals/Animals';
import { Layout } from './core/shared/components/layout/Layout';
import { StoreModel } from './core/store/store';

function App() {
  const token = useSelector((state: StoreModel) => {
    return state.userReducer.token;
  });

  return (
    <Router>
      <Route exact path='/'>
        {!token ? <Redirect to='/login' /> : <Redirect to='/today' />}
      </Route>
      <Route exact path={'/login'}>
        <Auth />
      </Route>
      <Route exact path={'/today'}>
        <Layout>
          <Header />
          <Animals Component={ToDayAnimals} type={'toDay'}></Animals>
        </Layout>
      </Route>
      <Route exact path={'/animals'}>
        <Layout>
          <Header />
          <Animals Component={AllAnimals} type={'all'}></Animals>
        </Layout>
      </Route>
    </Router>
  );
}

export default App;

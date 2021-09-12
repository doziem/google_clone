import React from 'react';
import { Route, Switch } from "react-router-dom"
import './App.css';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path='/searchPage'>
          <SearchPage />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

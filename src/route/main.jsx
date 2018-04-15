/* eslint-disable */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../composants/Home';
import personneList from '../composants/personneList';
import page2 from '../composants/page2';


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/personneList' component={personneList}/>
      <Route path='/page2' component={page2}/>
    </Switch>
  </main>
);

export default Main;

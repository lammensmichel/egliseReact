/* eslint-disable */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../composants/Home';
import personneList from '../composants/personneList';
import personne from '../composants/personne';


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/personneList' component={personneList}/>
      <Route path='/personne' component={personne}/>
    </Switch>
  </main>
);

export default Main;

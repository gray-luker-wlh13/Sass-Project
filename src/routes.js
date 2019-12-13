import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './Components/Landing';
import Home from './Components/Home';

export default  (
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/home' component={Home}/>
    </Switch>
);
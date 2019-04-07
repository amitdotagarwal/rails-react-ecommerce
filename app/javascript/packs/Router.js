import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Menu from '../components/Menu';

const Router = () => {
    <Switch>
        <Route exact path='/' component = { Menu } />
    </Switch>
}

export default Router;
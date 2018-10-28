import React from 'react';
import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard';
import Edit from './components/Edit/Edit';
import Form from './components/Form/Form';
// import Header from './components/Header/Header';
import Options from './components/Options/Options';
import Register from './components/Register/Register';
import Reviews from './components/Reviews/Reviews';
import Vehicle from './components/Vehicle/Vehicle';
import { Switch, Route } from 'react-router-dom';
import Profile_Vehicles from './components/ProfileVehicles/Profile_Vehicles';


export default(
    <Switch>
        <Route component = {Auth} exact path ='/'></Route>
        <Route component = {Dashboard} path ='/dashboard'></Route>
        <Route component = {Edit} path ='/edit/:profileId'></Route>
        <Route component = {Form} path ='/newprofile'></Route>
        <Route component = {Options} path ='/options'></Route>
        <Route component = {Register} path ='/register'></Route>
        <Route component = {Reviews} path ='/reviews'></Route>
        <Route component = {Vehicle} path = '/vehicle'></Route>
        <Route component = {Profile_Vehicles} path = '/profilelist'></Route>

    </Switch>
)



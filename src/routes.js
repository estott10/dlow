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
import Admin from './components/Admin/Admin';
import { Switch, Route } from 'react-router-dom';
import ProfileVehicles from './components/ProfileVehicles/ProfileVehicles';


export default(
    <Switch>
        <Route component = {Auth} exact path ='/'></Route>
        <Route component = {Dashboard} path ='/dashboard'></Route>
        <Route component = {Edit} path ='/edit/:profileId'></Route>
        <Route component = {Form} path ='/newprofile'></Route>
        <Route component = {Options} path ='/options'></Route>
        <Route component = {Register} path ='/register'></Route>
        <Route component = {Reviews} path ='/reviews/:make/:model'></Route>
        <Route component = {Vehicle} path = '/vehicle'></Route>
        <Route component = {ProfileVehicles} path = '/profilelist/:profileid'></Route>
        <Route component = {Admin} path = '/admin'></Route>
    </Switch>
)



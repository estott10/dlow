import React, { Component } from 'react';
// import logo from './logo.svg';
import './style.css';
import Header from './components/Header/Header';
import routes from './routes';

export default class App extends Component {
  render() {
    return (
      <div className="App">
         <Header />

         {routes}
      </div>
    )
  }
}


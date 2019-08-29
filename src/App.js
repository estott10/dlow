import React, { Component } from 'react';
// import logo from './logo.svg';
import './style.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import routes from './routes';

export default class App extends Component {
  render() {
    return (
      <div className="App">
         <Header />

         {routes}
         <Footer />
      </div>
    )
  }
}


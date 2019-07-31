import React, { Component } from 'react';
import Signin from './auth/signin';
import Home from './pages/home';
import Navigation from './navigation/navigation'
export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>xZero</h1>
        <Signin />
        <Home />
        <Navigation />
      </div>
    );
  }
}

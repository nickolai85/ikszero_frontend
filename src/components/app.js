import React, { Component } from 'react';
import Signin from './auth/signin';
import Home from './pages/home';
import Navigation from './navigation/navigation'
export default class App extends Component {
  constructor(){
    super();
    this.state={
      pageTitle: "Welcome to xZero",
      navigation:[
        {title: 'Home' , link:'home/'},
        {title: 'About' , link:'about/'},
        {title: 'Contact' , link:'contact/'}
      ]
    }
  }
  navitems(){
    return this.state.navigation.map(item=>{
      return <Navigation title = {item.title} url = {item.link}/>
    })
  }
  render() {
    return (
      <div className='app'>
        <h1>xZero</h1>
        <Signin />
        <Home />
       {this.navitems()}
      </div>
    );
  }
}

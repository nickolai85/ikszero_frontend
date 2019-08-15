import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
 } from "react-router-dom";

import Signin from './auth/signin';
import Signup from './auth/signup';
import Home from './pages/home';
import Navigation from './navigation/navigation';
import NoMatch from "./pages/no-match"

export default class App extends Component {
  
  render() {
    return (
      <div className='app'>
       <Router>
         <div>
           {/*this.navitems()*/}
           <Navigation />
           <Switch>
            <Route exact path = "/" component={Home} />
             <Route path = "/signin" component={Signin} />
             <Route path = "/signup" component={Signup} />
             <Route component={NoMatch} />
           </Switch>
         </div>
       </Router>

      </div>
    );
  }
}

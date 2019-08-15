import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class Navigation extends Component {
  constructor(){
    super();
    this.state={
      pageTitle: "Welcome to xZero",
      navigation:[
        {id:0 , title: 'Signin' , link:'/signin'},
        {id:1 , title: 'Signup' , link:'/signup'}
      ]
    }
    this.navlinks = this.navlinks.bind(this);
  }
  navlinks(){
    return this.state.navigation.map(item =>{
        return <NavLink to = {item.link}>
                 {item.title}
              </NavLink>
        }
      )
  }
  render() {
      return (
          <div>
             <NavLink exact to="/">
                  Home
             </NavLink>
             {this.navlinks()}
             <button>Contact</button>
             <button>Blog</button>
             { false ? <button>Add Blog</button> : null }
          </div>
      );
  }
}


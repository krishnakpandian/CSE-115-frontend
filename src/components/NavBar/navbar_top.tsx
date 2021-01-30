import React, { Component, RefObject } from "react";
import { useState } from 'react';
import PropTypes from "prop-types";
import './navbar_top.css'
import "../../bulma.css"
import truck_logo from '../../assets/moving_truck.png'
import form_logo from '../../assets/form_icon.png'
import apartment_logo from '../../assets/apartment_icon.png'
import newUser from '../Signup/signup_form'

type state = { collapsed: boolean,
              signupCollapsed: boolean
              email: string,
              password: string };
type props = {};

class NavbarTop extends React.Component<{}, any> {
  
  constructor(props) {
    super(props);
    
    this.state = { collapsed: true,
                  signupCollapsed: true,
                  email: "",
                  password: "" };
    this.handleChange = this.handleChange.bind(this);
  }
  

  handleToggle() {
    this.setState({ collapsed: !this.state.collapsed });
    console.log("Toggle state: ", this.state)
  }

  handleSignup() {
    this.setState({ signupCollapsed: !this.state.signupCollapsed });
    
  }

  handleChange(field){
  //  this.setState({[field.target.name]:field.target.value});
    this.setState({ [field.target.name]: field.target.value});
    console.log("Email/password changing: ", field.target.value);
  }

  signUpClick() {
    newUser(this.state.email, this.state.password);
    console.log(this.state);
  }

  render() {
    return (
      <section>
      <nav className="navbar has-shadow" id="top_navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <div className="navbar-brand">
            <h1 className="navbar-item title is-1" id="logo_title">
              We-Locate
            </h1>
          </div>
           
          <div className={"navbar-burger dropdown is-right" + (this.state.collapsed ? "" : " is-active")} onClick={() => this.handleToggle()} aria-label="menu"
            aria-haspopup="true" aria-controls="dropdown-menu" aria-expanded="false">
            <div className="dropdown-trigger">
              
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  <button className="button dropdown-item" id="list_button" onClick={this.signUpClick}>Sign Up</button>
                  <button className="button dropdown-item" id="list_button" onClick={this.logInClick}>Login</button>
                </div>
            </div>
          </div>
        </div>
        <div id="navbarButtons" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button className="button is-black is-outlined" onClick={this.signUpClick}>Sign Up</button>
                <button className="button is-black is-outlined" onClick={this.logInClick}>Login</button>
              </div>
            </div>
          </div>
        </div>
      </nav> 
      
      <div className="box">
            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left">
                <input name="email" type="email" placeholder="test@gmail.com" className="input" required
                 onChange={this.handleChange}>
              
                </input>
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control has-icons-left">
                <input name="password" type="password" placeholder="*******" className="input" required 
                onChange={this.handleChange}>
                </input>
              </div>
            </div>
            <div>
              <button className="button is-success" onClick={() => this.signUpClick()}>
                Login
              </button>
            </div>
      </div>

      <div className="columns is-centered" id="about_section">
        <div className="column is-one-third">
          <div id="info_card">
            <div className='is-flex is-horizontal-center'>
              <figure className='image is-64x64'><img src={form_logo}></img></figure>
            </div>
            <h1 className="title is-2"> Search </h1>
            <p className="is-size-4">Enter an address to receive vital information
              about cost of living, traffic, and distances to 
              places to visit.
            </p>
            </div>
        </div>
        <div className="column is-one-third">
          <div id="info_card">
            <div className='is-flex is-horizontal-center'>
              <figure className='image is-64x64'><img src={apartment_logo}></img></figure>
            </div>
            <h1 className="title is-2"> Choose </h1>
            <p className="is-size-4">Pick a place that fits your creteria from the results
              and save it along with other relevant links. 
            </p>
          </div>
        </div>
        <div className="column is-one-third">
          <div id="info_card">
              <div className='is-flex is-horizontal-center'>
                <figure className='image is-64x64'><img src={truck_logo}></img></figure>
              </div>
              <h1 className="title is-2"> Relocate </h1>
              <p className="is-size-4">Now that you are informed and prepared, it is time to make your 
                life-changing move. 
              </p>
              
            </div>
          </div>
      </div>

      <div className="container is-widescreen">
        <div className="notification" id="prompt_bar">
          <h1 className="navbar-item title is-1 is-flex is-horizontal-center" id="prompt_text">
            Begin Your Search 
          </h1>
        </div>
      </div>

      </section>
   );
  }

  logInClick() {
    console.log("Login button has been pressed.");
  }
  
}
export default NavbarTop;
import logo from './logo.svg';
import './App.css';
import React from "react";
import {Route} from "react-router-dom";

import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Nav from "./components/Nav"
import Cards from "./components/Cards"
const App = () =>{
  return <>
  <Nav />
  <Route exact path="/home" component={Home}/>
  <Route exact path="/about" component={About}/>
  <Route path="/contact" component={Contact}/>
  <Route path="/cards" component={Cards}/>
  <Route path="/card/:id" component={Card}/>
</>;
}

export default App;

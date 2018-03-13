import React, { Component } from 'react';
import logo from './logo.svg';
import { Flag } from "semantic-ui-react";

import Caroussel from './components/Carousel'

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';

let data = [
  {src:'/img/a.jpg',titre:'Aziz',alt:'',linkTo:''},
  {src:'/img/b.jpg',titre:'Bryson Tiller',alt:'',linkTo:''},
  {src:'/img/c.png',titre:'DUT2',alt:'',linkTo:''},
]

class App extends Component {
  render() {
    return (
     <div>
        <Caroussel data = {data}/>
      
     </div>
    );
  }
}

export default App;

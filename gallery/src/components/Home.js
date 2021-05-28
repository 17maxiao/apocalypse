import React from 'react'
import '../style/General.css';
import {
  Link
} from "react-router-dom";
import Navbar from './Navbar.js';

export default class Home extends React.Component {

  render() {  
    return (
      <div className="home-bg">
        <Navbar></Navbar>
        <p class="white">
          Welcome to <em>the Apocalypse: Here and Now</em>, a virtual exhibition. 
          <br></br>
          <br></br>
          The last few years, from the late 2010s-2021, have obtained a reputation for being years of “bad luck” on a global scale. From environmental destruction, natural disasters, the pandemic, and even more, for many it seems as though the world is ending now. 
          <br></br>
          <br></br>
          The exhibition is sorted into 5 separate “galleries” that explore the topics of the environment, mental health, the COVID-19 pandemic, racism, culture, government, sexuality, and gender roles. With 22 artists featured, the work of the
          <em>Apocalypse: Here and Now</em> chronicles and portrays personal experiences of the more horrific parts of the modern age. 
        </p>
        <br></br>
        <br></br>
        <Link to={'/climate'}><p class="white">Enter Here</p></Link>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
}
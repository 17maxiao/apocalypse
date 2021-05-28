import React from 'react'
// import ScrollText from 'react-scroll-text'
import '../style/General.css'
import logo from '../images/logoheader.png'


export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }


  render() {    
    return (
        <div >
            <br></br>
            <br></br>
            <br></br>
            <img class="logo-img" src={logo}></img>
            <br></br>
            {/* <ScrollText><h5>the end of the world the end of the world the end of the world the end of the world 
            the end of the world the end of the world the end of the world the end of the world the end of the world the end of the world
            the end of the world the end of the world the end of the world the end of the world the end of the world the end of the world
            the end of the world the end of the world the end of the world the end of the world the end of the world the end of the world 
            the end of the world the end of the world the end of the world the end of the world the end of the world the end of the world 
            the end of the world the end of the world the end of the world the end of the world the end of the world the end of the world
            the end of the world the end of the world the end of the world the end of the world the end of the world the end of the world
            the end of the world the end of the world the end of the world the end of the world the end of the world the end of the world 
            the end of the world the end of the world the end of the world the end of the world the end of the world the end of the world
            the end of the world the end of the world the end of the world the end of the world the end of the world the end of the world
            the end of the world the end of the world the end of the world the end of the world the end of the world the end of the world 
            the end of the world the end of the world the end of the world the end of the world the end of the world the end of the world
            the end of the world the end of the world the end of the world the end of the world the end of the world the end of the world
            the end of the world the end of the world the end of the world the end of the world the end of the world the end of the world 
            the end of the world the end of the world the end of the world the end of the world the end of the world the end of the world
            the end of the world the end of the world the end of the world the end of the world the end of the world the end of the world
            the end of the world the end of the world the end of the world the end of the world the end of the world the end of the world 
            the end of the world the end of the world the end of the world the end of the world the end of the world the end of the world
            the end of the world the end of the world the end of the world the end of the world the end of the world the end of the world
            the end of the world the end of the world the end of the world the end of the world the end of the world the end of the world 
            the end of the world the end of the world the end of the world the end of the world the end of the world the end of the world
            the end of the world the end of the world the end of the world the end of the world the end of the world the end of the world
            the end of the world the end of the world the end of the world the end of the world the end of the world the end of the world 
            the end of the world the end of the world the end of the world the end of the world the end of the world the end of the world
            the end of the world the end of the world the end of the world the end of the world the end of the world the end of the world
            the end of the world the end of the world the end of the world the end of the world the end of the world the end of the world 
            the end of the world the end of the world the end of the world the end of the world the end of the world the end of the world
            the end of the world the end of the world the end of the world the end of the world the end of the world the end of the world
            the end of the world the end of the world the end of the world the end of the world the end of the world the end of the world 
            </h5></ScrollText> */}
            <div class="topnav">
              <div class="topnav-centered">
                <a class="black" href={'/'}>Entrance</a>
                <a class="black" href={'/climate'}>1</a>
                <a class="black" href={'/mental-health'}>2</a>
                <a class="black" href={'/pandemic'}>3</a>
                <a class="black" href={'/racism-government'}>4</a>
                <a class="black" href={'/lgbtq-gender'}>4</a>
              </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
        </div>
    );
  }
}
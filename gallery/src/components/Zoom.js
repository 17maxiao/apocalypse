import React, { Component } from "react";
import "../style/Zoom.css";

class Zoom extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            src: props.src,
            backgroundImage: `url(${props.src})`,
            backgroundPosition: '0% 0%'
        }
    }


  handleMouseMove = e => {
    const { left, top, width, height } = e.target.getBoundingClientRect()
    const x = (e.pageX - left) / width * 100
    const y = (e.pageY - top) / height * 100
    this.setState({ backgroundPosition: `${x}% ${y}%` })
  }

  render = () =>
    <figure onMouseMove={this.handleMouseMove} style={this.state}>
      <img src={this.state.src} />
    </figure>
}

export default Zoom;


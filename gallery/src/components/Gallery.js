import React, { Component } from "react";
import Zoom from "./Zoom.js"
import HorizontalScroller from 'react-horizontal-scroll-container';
import "../style/Gallery.css";
import "../style/General.css";

const MenuItem = ({ type, name, artist, year, dsc, med, link }) => {
  if (type === "image") {
    return <div>
      <Zoom src={link}></Zoom>
    </div>;
  } else if (type === "poem") {
    return <div>
      <img class="poem-img" src={link}></img>
    </div>
  } else if (type === "video/mp4" && link.includes("https://www.youtube.com/embed/")) {
    return <div>
    <iframe width="888px" height="550px" src={link} 
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen></iframe>
  </div>;

  } else if (type === "text") {
    return <div className="text-container">
      <h1>{artist}</h1>
      <h2>{name}</h2>
      <h3>{year}</h3>
      <h4><em>{med}</em></h4>
      <p>{dsc}</p>
    </div>
  } else if (type ==="title") {
    return <div>
      <div className="title-container">
        <h1 class="center">CLIMATE</h1>
        <h2 class="center"><em>Scroll down to enter the gallery</em></h2>
        <br></br>
        <h5 class="center">Use the browser side scroll bar if gallery scroll is not showing full view</h5>
      </div>
    </div>
  } else if (type ==="link") {
    return <div>
    <div className="end-container">
      <h1 class="center">Next gallery: Mental Health</h1>
      <h2 class="center"><a href={link} class="white"><em>Enter here</em></a></h2>
    </div>
  </div>
  } else {
    return <div>
      <video width="888px" height="550px" controls>
        <source src={link} type={type} preload="auto"></source>
        Your browser does not support the video tag.
      </video>
    </div>;
  }

};

class Gallery extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: props.list,
    }
  }


  render() {

    return (
      <div className="Gallery">
        <HorizontalScroller invert sensibility={30}>
        {this.state.list.map((el) => (
          <div className="gallery-item">
            <MenuItem key={el.link} type={el.type} name={el.name} artist={el.artist} year={el.year} dsc={el.dsc} link={el.link} />
          </div>
        ))}
        </HorizontalScroller>
      </div>
    );
  }
}
export default Gallery;

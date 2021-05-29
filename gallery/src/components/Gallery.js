import React, { Component } from "react";
import Zoom from "./Zoom.js"
import HorizontalScroller from 'react-horizontal-scroll-container';
import "../style/Gallery.css";
import "../style/General.css";

const MenuItem = ({ type, name, artist, year, dsc, materials, link }) => {
  if (type === "image") {
    return <div>
      <Zoom src={link}></Zoom>
    </div>;
  } else if (type === "poetry") {
    return <div>
      <img class="poetry-img" src={link}></img>
    </div>
  } else if (type === "video/mp4" && link.includes("https://www.youtube.com/embed/")) {
    return <div>
    <iframe width="800px" height="450px" src={link} 
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen></iframe>
  </div>;

  } else if (type === "text") {
    return <div className="text-container">
      <h1 class="title-container">{artist}</h1>
      <h2 class="title-container">{name}</h2>
      <h3 class="title-container">{year}</h3>
      <h4 class="title-container"><em>{materials}</em></h4>
      <p class="text-container">{dsc}</p>
    </div>
  } else if (type ==="title") {
    return <div>
      <div className="entrance-container">
        <h1 class="center">{name}</h1>
        <h2 class="center"><em>Scroll down to enter the gallery</em></h2>
        <br></br>
        <h5 class="center">Use the browser side scroll bar if gallery scroll is not showing full view</h5>
      </div>
    </div>
  } else if (type ==="link") {
    return <div>
    <div className="end-container">
      <h1 class="center">Next: {name}</h1>
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
            <MenuItem key={el.link} type={el.type} name={el.name} artist={el.artist} year={el.year} dsc={el.dsc} link={el.link} materials={el.materials}/>
          </div>
        ))}
        </HorizontalScroller>
      </div>
    );
  }
}
export default Gallery;

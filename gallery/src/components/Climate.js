import React from 'react'
import Gallery from './Gallery.js'
import '../style/General.css'
import Navbar from './Navbar.js'
import daniel1 from '../images/1 - Climate/1.1.1.jpg'
import daniel2 from '../images/1 - Climate/1.1.2.jpg'
import meghan1 from '../images/1 - Climate/1.2.1.JPG'
import meghan2 from '../images/1 - Climate/1.2.2.jpeg'
import tatiana1 from '../images/1 - Climate/1.3.1.png'
import tatiana2 from '../images/1 - Climate/1.3.2.png'
import tatiana3 from '../images/1 - Climate/1.3.3.png'


export default class Climate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        // {type: "video/mp4", name: "", artist: "", year: "", dsc: "", link: "https://www.youtube.com/embed/ySvIoOs9Cr8"},
        {link:"", type:"title", name:"CLIMATE", artist:"", year:"", med: "", dsc:""},
        {link:"", type:"text", name:"Fire Above Osoyoos", artist:"Daniel Huszar (he/him)", year:"2020", med:"Photographic Image Shot on 120mm film", dsc:"Referring to the town in British Columbia, Fire Above Osoyoos depicts a sunset highlighting the smoke from wildfires plaguing the west coast of North America. This particular photoset deviates from the bulk of Huszar’s photographs, which generally depict the urban built environment and human relation within it. But despite differing in subject matter, thematically, Fire Above Osoyoos continues Huszar’s exploration of how people interact with the environment, shifting from how direct actions made by people impact the world to how the environment responds and changes in return. By capturing the intensity of the heavy smoke coloured orange in by the setting sun, Huszar draws attention to the devastating effects of climate change and its impact on the natural world as well as the human race."},
        {link: daniel1, type:"image", name:"", artist:"", year:"", med:"", dsc:""},
        {link: daniel2, type:"image", name:"", artist:"", year:"", med: "", dsc:""},
        {link:"", type:"text", name:"Svalbard, 79.75º North: Pack Ice II, State I", artist:"Megan Broughton (she/her)", year:"2020", med:"Etching: hardground, aquatint", dsc:""},
        {link: meghan1, type:"image", name:"", artist:"", year:"", med:"", dsc:""},
        {link:"", type:"text", name:"Svalbard, 79.75º North: Pack Ice II, State I", artist:"Megan Broughton (she/her)", year:"2020", med:"", dsc:""},
        {link: meghan2, type:"image", name:"", artist:"", year:"", med:"", dsc:""},
        {link:"", type:"", name:"", artist:"", year:"", med:"", dsc:""},
        {link: tatiana1, type:"poem", name:"", artist:"", year:"", med:"", dsc:""},
        {link: tatiana2, type:"poem", name:"", artist:"", year:"", med:"", dsc:""},
        {link: tatiana3, type:"poem", name:"", artist:"", year:"", med:"", dsc:""},
        {link: "/mental-health", type:"link", name:"", artist:"", year:"", med:"", dsc:""},
      ],
    }
  }

  componentDidMount() {
  }


  render() {  
    return (
        <div className="climate-bg">
          <Navbar></Navbar>
          <Gallery list={this.state.list}/>
        </div>
    );
  }
}
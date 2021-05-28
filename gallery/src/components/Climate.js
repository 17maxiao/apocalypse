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
        {link:"", type:"text", name:"Svalbard, 79.75º North: Pack Ice II, State I", artist:"Megan Broughton (she/her)", year:"2020", med:"Etching: hardground, aquatint", dsc:"In June 2019, Broughton participated in The Arctic Circle Residency, which took place in Norway during a record-breaking month of high temperatures. These prints, both from a series titled Svalbard, 79.75º North refer to an instance when Broughton’s ship was trapped for twelve hours in low-latitude pack ice impacted by the melting of the Greenland ice sheet. This illuminating moment allowed Broughton to experience firsthand the immense damage caused by the Arctic warming faster than the rest of the planet, a catastrophic phenomenon called Arctic Amplification. Since then, Broughton has been processing through experimental copperplate etchings with themes of destruction, reconfiguration, and depth. The etching medium echoes melting ice and water: in acid, copper erodes like melting ice - a natural resource, lost. The Pack Ice II plates were regularly reshaped by acid via extensive flatbiting, and printed in states in between. Destroying the plates creates at once an erasure of the image and creation of new blank space. What was initially planned as pure destruction turned into a dynamic exchange which fueled itself in unpredictable ways."},
        {link: meghan1, type:"image", name:"", artist:"", year:"", med:"", dsc:""},
        {link:"", type:"text", name:"Svalbard, 79.75º North: Pack Ice II, State I", artist:"Megan Broughton (she/her)", year:"2020", med:"Etching: softground, hardground, waterbite aquatint", dsc:"Pack Ice I functions as an elegiac, melancholy image."},
        {link: meghan2, type:"image", name:"", artist:"", year:"", med:"", dsc:""},
        {link:"", type:"text", name:"Excerpts from (o) decompose", artist:"Tatiana Borie (they/them)", year:"2020", med:"Poetry", dsc:"Borie’s work (o) decompose describes the narrator’s desire to reunite their body with the earth, ultimately ending their life in the process. Though initially the work seems to primarily deal with the ending of life, (o) decompose does not seek to focus on this. Providing no relevant motive for why the narrator would wish to depart from the material world, instead the work examines the detrimental effects that leaving one’s body behind could do to the environment. Contrasting imagery of the lush greenery with the industrial landscape of New York City, Borie subtly points out ways human beings have encroached on the natural world. The obsession to find the perfect spot, to prepare the body just right also sees Borie drawing attention to the ways that participation in industrial production can continue to disturb nature even after death. While part of a larger work, the excerpts shown here demonstrate the initial longing to commit such a decisive act, the desire to do so in as natural a way as possible, and the actual result of the act itself."},
        {link: tatiana1, type:"poetry", name:"", artist:"", year:"", med:"", dsc:""},
        {link: tatiana2, type:"poetry", name:"", artist:"", year:"", med:"", dsc:""},
        {link: tatiana3, type:"poetry", name:"", artist:"", year:"", med:"", dsc:""},
        {link: "/mental-health", type:"link", name:"MENTAL HEALTH", artist:"", year:"", med:"", dsc:""},
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
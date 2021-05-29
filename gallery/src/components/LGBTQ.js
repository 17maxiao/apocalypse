import React from 'react'
import Gallery from './Gallery.js'
import '../style/General.css'
import Navbar from './Navbar.js'
import bailey1 from '../images/5 - LGBTQ+ and Gender/5.1.1.jpeg'
import bailey2 from '../images/5 - LGBTQ+ and Gender/5.1.2.jpeg'
import david1 from '../images/5 - LGBTQ+ and Gender/5.2.jpg'
import lea1 from '../images/5 - LGBTQ+ and Gender/5.3.jpg'
import julia1 from '../images/5 - LGBTQ+ and Gender/5.4.1.JPG'
import julia2 from '../images/5 - LGBTQ+ and Gender/5.4.2.JPG'


export default class Racism extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
        list: [
            {link:"", type:"title", name:"LGBTQ+ & GENDER ISSUES", artist:"", year:"", materials: "", dsc:""},
            {link:"", type:"text", name:"Sacred Ground", artist:"Bailey Triggs (he/they/she)", year:"", materials: "Woodblock prints", dsc:""},
            {link:bailey1, type:"image", name:"", artist:"", year:"", materials: "", dsc:""},
            {link:"", type:"text", name:"No Place Like Home", artist:"Bailey Triggs (he/they/she)", year:"", materials: "Woodblock prints", dsc:""},
            {link:bailey2, type:"image", name:"", artist:"", year:"", materials: "", dsc:""},
            {link:"", type:"text", name:"Tapettes en Feu contre le Fascisme", artist:"David Widgington (he/him)", year:"2018", materials: "Cotton, acrylic, spray paint, glitter", dsc:"Tapettes en Feu contre le Fascisme  speaks overall to the rise of white supremacist fueled fascism in the West, and how this will further oppress homosexuals. Still, this subjugation will not occur without opposition. Widgington depicts a gratified pair of tapettes en feu (French for flaming faggots) passionately throwing Molotov cocktails at their oppressor. Though the word fascism looms large in the piece, the focus is on the figures and their personal stances (including fuck all pipelines and silence = death), with Widgington refusing to give a voice to fascist forces. Widgington’s decision to make a banner rather than a typical painting is intentional: not only is the content political but so is the act of creation itself. The work becomes a protest tool that contributes to a shared oppositional cultural heritage built by activists throughout history. Tapettes en Feu contre le Fascisme is one of 25 protest banners being created by Widgington in his «MTL» series, which explicitly express his anger at the status quo in times of global crisis."},
            {link:david1, type:"image", name:"", artist:"", year:"", materials: "", dsc:""},
            {link:"", type:"text", name:"Mother of all Atrocities", artist:"Lea Elise", year:"2021", materials: "Acrylic on canvas", dsc:"Inspired by the Whore of Babylon from the Book of Revelations, Lea Elise’s work depicts the moment after the Mother of all Atrocities herself has been defeated. Presenting a mass of vibrant female bodies arranged around each other in various poses, Elise speaks to how women throughout history have been seen as both evil figures as well as vessels to be used for male-determined purposes. In addition, the painting explores how, though violence against women is so harmful, it brings survivors together to take care of each other as no one else will help to do so. Elise, who has experienced this violence, believes that the way to move out of this detrimental reality is to destigmatize survivors and their experiences, even if this may feel like the end of the world for those who profit from this oppression."},
            {link:lea1, type:"image", name:"", artist:"", year:"", materials: "", dsc:""},
            {link:"", type:"text", name:"Hide and Go Seek and Wherever You Are", artist:"Julia Wess (she/they)", year:"2018 and 2019", materials: "Oil on canvas", dsc:"Julia Wess’ self-portraits speak to the mental toll non-men face due to the hostile environment public spaces can offer. Hide and Go Seek explores interaction with crowded cityscapes, portraying the stress non-men feel when in a space where anyone could be a danger. Depicting herself in a metro car with her hood up, Wess hides from unconcerned men in mugshot positions while looking at the viewer, revealing her vulnerability in a space where the power lies with potential threats. Meanwhile Wherever You Are, with its ominous title, sees Wess’ emotions during her moments spent alone. Sitting naked while being pecked at by vultures, the viewer experiences Wess’ feeling of suspense and uncertainty."},
            {link:julia1, type:"image", name:"", artist:"", year:"", materials: "", dsc:""},
            {link:julia2, type:"image", name:"", artist:"", year:"", materials: "", dsc:""},
            {link:"/outpost", type:"link", name:"Outpost", artist:"", year:"", materials: "", dsc:""},
        ],
    }
}


    render() {  
    return (
        <div className="lgbtq-bg">
            <Navbar></Navbar>
            <Gallery list={this.state.list}/>
        </div>
    );
    }
}
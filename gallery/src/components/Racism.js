import React from 'react'
import Gallery from './Gallery.js'
import '../style/General.css'
import Navbar from './Navbar.js'
// 4.1 is a youtube video for herzog by alexandre
import shirley1 from '../images/4 - Racism-Culture-Government/4.2.1.jpg'
import shirley2 from '../images/4 - Racism-Culture-Government/4.2.2.jpg'
import shirley3 from '../images/4 - Racism-Culture-Government/4.2.3.jpg'
import shirley4 from '../images/4 - Racism-Culture-Government/4.2.4.jpg'
import pow1 from '../images/4 - Racism-Culture-Government/4.3.1.jpg'
import pow2 from '../images/4 - Racism-Culture-Government/4.3.2.jpg'
import pow3 from '../images/4 - Racism-Culture-Government/4.3.3.jpg'


export default class Racism extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
        list: [
            {link:"", type:"title", name:"RACISM/GOVERNMENT", artist:"", year:"2021", materials: "", dsc:""},
            {link:"", type:"text", name:"Herzog", artist:"Alexandre Vachon aka ACV (he/him)", year:"2020", materials:"Music Video and Song", dsc:"As an activist, scholar, and musician, Alexandre Vachon’s work frequently discusses both systemic racism as well as his own experience as a Black man in Canada. Herzog (and its accompanying music video) is from Vachon’s album, released under the name ACV and entitled Saul Bellow Négrophilique, which interacts with Saul Bellow’s novels from the perspective of a Black Montrealer. Named after the corresponding Saul Bellow novel, Herzog depicts a narrator who at first listen describes his own shortcomings in a failed relationship and his reactions against his former partner. But the lyrics also reveal something deeper: how Black people and other marginalized individuals grow up in broken environments that discourage emotional vulnerability and self-reflection. The accompanying music video, whose director was also a person of colour, demonstrates the difficult path to accepting self-growth by showing the subject (here portrayed by Vachon himself) alone in a field, processing and expressing the sentiments expressed in the song. With his journey evident in the subject's movements, the expressions on his face, and the moving landscape behind him, Vachon’s Herzog demonstrates the negative impact that systemic racism has on the mental health of Black individuals."},
            {link:"https://www.youtube.com/embed/ySvIoOs9Cr8", type:"video/mp4", name:"", artist:"", year:"", materials:"", dsc:""},
            {link:"", type:"text", name:"Projections", artist:"Shirley Yang", year:"2020", materials:"Digital photographs", dsc:"With Projections, Shirley Yang takes on how cultural appropriation impacts Asian (specifically East Asian) culture. Despite the popularity of Asian visual elements in Western art and media, Asian people themselves still experience racism just for celebrating their own traditions and practices. Inspired by work done by Alex Oh and Julia Kong, Projections, taken after the pandemic inspired a new wave of anti-Asian racism, honors and reclaims Asian culture without projecting a western influence on it. By projecting Chinese characters and the symbol of a dragon on models of Asian descent, Yang both takes back her own culture and reasserts Asian agency. The variation in poses and facial expressions of the models affirms that while Asian people may be heirs to such a rich heritage, they carry it with them rather than become solely defined by it. Projections sees Yang rejecting appropriation and demonstrating instead the beauty and intricacy of Asian culture as it lives on in individuals."},
            {link:shirley1, type:"image", name:"", artist:"", year:"", materials:"", dsc:""},
            {link:shirley2, type:"image", name:"", artist:"", year:"", materials:"", dsc:""},
            {link:shirley3, type:"image", name:"", artist:"", year:"", materials:"", dsc:""},
            {link:shirley4, type:"image", name:"", artist:"", year:"", materials:"", dsc:""},
            {link:"", type:"text", name:"Dreaming of a Better Future in Hong Kong", artist:"Mr. Pow", year:"2019", materials:"Digital Photographs", dsc:"Mr. Pow’s photoset was captured June 9, 2019, when peaceful protests that were triggered by the signing of the Anti-Extradition Law Amendment occurred in Hong Kong. Mr. Pow, who stumbled upon the demonstration while unaware of the context, captured these early serene moments when protesters were able to take to the streets safely. In these images, the enormous crowd stands together as one, demonstrating the strength and unification of Hong Kong citizens in this instant. Police walk the streets without contact with civilians, a phenomenon that unfortunately would not last as clashes between protestors and themselves became violent."},
            {link:pow1, type:"image", name:"", artist:"", year:"", materials:"", dsc:""},
            {link:pow2, type:"image", name:"", artist:"", year:"", materials:"", dsc:""},
            {link:pow3, type:"image", name:"", artist:"", year:"", materials:"", dsc:""},
            {link:"/lgbtq-gender", type:"link", name:"LGBTQ+ & GENDER ISSUES", artist:"", year:"", materials:"", dsc:""},
        ],
    }
}


    render() {  
    return (
        <div className="racism-bg">
            <Navbar></Navbar>
            <Gallery list={this.state.list}/>
        </div>
    );
    }
}
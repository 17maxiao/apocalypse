import React from 'react'
import Gallery from './Gallery.js'
import '../style/General.css'
import Navbar from './Navbar.js'
import isabella1 from '../images/2 - Mental Health/2.1.JPG'
import christophe1 from '../images/2 - Mental Health/2.2.jpg'
import stephanie1 from '../images/2 - Mental Health/2.3.1.jpg'
import stephanie2 from '../images/2 - Mental Health/2.3.2.jpg'
import emily1 from '../images/2 - Mental Health/2.4.jpg'
import jeanmarie1 from '../images/2 - Mental Health/2.5.jpeg'


export default class Mental extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
        list: [
            {link:"", type:"title", name:"MENTAL HEALTH", artist:"", year:"", materials: "", dsc:""},
            {link:"", type:"text", name:"Ascension", artist:"Isabella Wang (she/her)", year:"2020", materials:"Acrylic on canvas", dsc:"With its loud colours and chaotic subject matter, Ascension portrays the feeling that Isabella Wang experiences during manic moments through an absurdist lens. The work engages the physical senses: the texture of the large human form tricks the viewer into believing it would feel like skin if touched, the immense scale of the mouth behind it evokes the illusion that one can hear its shouts in real life, and the figure drinking in the background prompts the spectator to consider the taste on their own tongue. Yet Ascension also induces a distinctly personal, mental journey through its blue-hued swirls, resembling meditative labyrinths, with tiny ant-like figures leading the eye to follow the paths in a certain direction. Through her work, Wang invites the viewer into her personal world, one so fragile and chaotic that it feels as though it may end soon, while also challenging them to embark on their own journey interacting with their individual mental health and experience in a broader sense."},
            {link:isabella1, type:"image", name:"", artist:"", year:"", materials:"", dsc:""},
            {link:"", type:"text", name:"Aziyadé", artist:"Christophe Domec (he/him)", year:"2020", materials:"Photographic Image Shot on 35mm film", dsc:"Aziyadé, named after the subject of the photograph, portrays a friend of the artist during a visit to Domec’s hometown. While taking the image, Domec and the subject intentionally attempted to create a dramatic, anxious mood without explaining to each other why. Yet at the same time, both the artist and subject were grappling with their own mental health issues, clearly portrayed in the image through the use of minimal, bright light contrasted with heavy shadows in the background. Represented in the stark lighting and the image’s use of colour, Aziyadé presents an initially unconscious exploration of Domec and his subject’s subjective experiences with their own mental health. Domec’s two dimensional, visually simple image holds all of the complexity of a three dimensional moment set against the backdrop of the coronavirus pandemic (when this photo was taken), and the relationship between the artist and his friend."},
            {link:christophe1, type:"image", name:"", artist:"", year:"", materials:"", dsc:""},
            {link:"", type:"text", name:"I am Lost", artist:"Stephanie Ching (she/her)", year:"2018", materials:"Digital photographs", dsc:"Stephanie Ching’s work frequently depicts her own personal world, consisting of emotions, past experiences, and memories. While I am Lost does not differ immensely from this, the photo set emphasises the artist’s understanding of mental illness experienced not by her, but rather by a close acquaintance.  Though Ching herself does not suffer from mental illness, I am Lost demonstrates the process of interacting with and attempting to understand her acquaintance’s mental health by connecting it to feelings she has experienced in the past, such as anxiety or the desire to escape from reality. Inspired by photographer Edward Honaker, who uses self-portraiture to portray his battle with depression, Ching depicts an identity-less subject to allow the viewer to explore understanding someone else’s mental health experience. By leaving the face and much of the body covered, the viewer is invited to explore their own journey with mental health onto the work, influenced by their personal history."},
            {link:stephanie1, type:"image", name:"", artist:"", year:"", materials:"", dsc:""},
            {link:stephanie2, type:"image", name:"", artist:"", year:"", materials:"", dsc:""},
            {link:"", type:"text", name:"Portraits", artist:"Emily Zou (she/her)", year:"2020", materials:"Leftover and found stretchers, canvas, string, wire, and acrylic paint", dsc:"Portraits has roots in Zou’s practice of working with string and ripped canvas as a therapeutic exercise to combat symptoms of depression and anxiety. Zou uses found and leftover materials meaning that every aspect of the construction has its own story, giving a historical vivacity to each piece. Though the individual structures of the work appear to be dark and muted, when viewed up close and in direct light, luminous colours are revealed in the intricate tangles and details of the pieces. Much like human beings, the pieces in Portraits take on a life of their own, mimicking bodies. Zou breathes life into these vessels by purposely giving them human attributes, even if subtly. For example, the larger piece is five feet and five inches tall, the height of Zou herself, and the smaller piece leaves a space large enough for an adult human head. The combination of an artistic soul and physical body forms a presence that invites both the artist and viewer to feel less lonely, whether that be during lockdown or otherwise."},
            {link:emily1, type:"image", name:"", artist:"", year:"", materials:"", dsc:""},
            {link:"", type:"text", name:"Alone", artist:"Jeanmarie Weatherhead (they/them)", year:"2020", materials:"Acrylic on canvas", dsc:"Also known by their initials CJW, Jeanmarie Weatherhead’s artistic practice acts as an exploratory process of oppositional forces such as reality and illusion, desire and consequence. Alone is no exception. Painted as part of a series of works following Weatherhead’s graduation from university and influenced by the experience of the pandemic, Alone juxtaposes the comfortable with the peculiar. While the snowy, pastoral landscape is something many would be familiar with, from movies or personal experience, the darkness of the sky, lightened oddly enough by the clouds, lends a foreboding tone to the scene. Coupled with the lone figure rendered almost completely in black, save for its sad eyes, Alone demonstrates the difficulty of living isolated in a world of endless winter, one so predictable but still depressing. Still, the work leaves the viewer with some hope in the form of an oncoming car. The car illuminates the space with its headlights, and follows a road that continues out of frame, perhaps to a better place and time."},
            {link:jeanmarie1, type:"image", name:"", artist:"", year:"", materials:"", dsc:""},
            {link: "/pandemic", type:"link", name:"PANDEMIC", artist:"", year:"", materials:"", dsc:""},

        ],
    }
}


    render() {  
    return (
        <div className="mental-bg">
            <Navbar></Navbar>
            <Gallery list={this.state.list}/>
        </div>
    );
    }
}
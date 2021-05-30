import React from 'react'
import '../style/General.css';
import fb from '../images/fb.png'
import ig from '../images/ig.png'
import Navbar from './Navbar.js';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

export default class Home extends React.Component {

    render() {  
        return (
            <div className="home-bg">
            <Navbar></Navbar>
            <h1 class="black center">Artist Outpost</h1>
            <p class="black center">
                Click on the artists’ names below to see their websites as well as their social media accounts where relevant
            </p>
            <br></br>
            <br></br>
            <h3 class="black center"><a class = "white" href={"https://danielhuszar.com"}>Daniel Huszar</a> - IG: <a class="black" href={"https://www.instagram.com/est__daniel/"}>@est__daniel</a></h3>
            <br></br>
            <h3 class="black center"><a class = "white" href={"https://cargocollective.com/meganbroughton"}>Megan Broughton</a> - IG: <a class="black" href={"https://www.instagram.com/meganbroughtonartist/"}>@meganbroughtonartist</a></h3>
            <br></br>
            <h3 class="black center"><a class = "white" href={"https://tatianaborie.com"}>Tatiana Borie</a></h3>
            <br></br>
            <h3 class="white center">Isabella Wang</h3>
            <br></br>
            <h3 class="white center">Christophe Domec</h3>
            <br></br>
            <h3 class="black center">Stephanie Ching - IG: <a class="black" href={"https://www.instagram.com/justsomeworkofsteph/"}>@justsomeworkofsteph</a></h3>
            <br></br>
            <h3 class="white center">Emily Zou</h3>
            <br></br>
            <h3 class="white center">Jeanmarie Weatherhead aka CJW</h3>
            <br></br>
            <h3 class="white center">Santo Jacobsson</h3>
            <br></br>
            <h3 class="black center"><a class = "white" href={"https://open.spotify.com/artist/5XPpLQa8MoU7XkCM3JGe2A?si=tshSdVdjRwSzkR8vDvKpsg"}>Freddy Detchou aka SUPER FREDDY</a> - IG: <a class="black" href={"https://www.instagram.com/superfreddy24/"}>@superfreddy24</a></h3>
            <h3 class="black center"><a class = "black" href={"https://open.spotify.com/artist/5XPpLQa8MoU7XkCM3JGe2A?si=tshSdVdjRwSzkR8vDvKpsg"}>Spotify @ SUPER FREDDY</a></h3>
            <br></br>
            <h3 class="white center">José Galván Martínez</h3>
            <br></br>
            <h3 class="white center">Riesbri</h3>
            <br></br>
            <h3 class="black center"><a class = "white" href={"https://margaretzhang.com"}>Margaret Zhang</a></h3>
            <br></br>
            <h3 class="white center"><a class = "white" href={""}>Mia Ari</a> - IG:<a class="black" href={"https://www.instagram.com/frickenmia/"}>@frickenmia</a></h3>
            <h3 class="black center">IG - <a class = "black" href={"https://www.instagram.com/miaariart/"}>@miaariart</a></h3>
            <br></br>
            <h3 class="white center">Lale Ceylan</h3>
            <br></br>
            <h3 class="white center">Alexandre Vachon aka ACV</h3>
            <br></br>
            <h3 class="white center">Shirley Yang</h3>
            <br></br>
            <h3 class="white center">Mr. Pow</h3>
            <br></br>
            <h3 class="white center">Bailey Triggs</h3>
            <br></br>   
            <h3 class="white center"><a class = "white" href={"http://burningbillboard.art"}>David Widgington</a> - IG:<a class="black" href={"https://www.instagram.com/david_widge/"}>@david_widge</a></h3>
            <br></br>   
            <h3 class="white center"><a class = "white" href={"https://www.leaelise.com"}>Lea Elise</a> - IG:<a class="black" href={"https://www.instagram.com/lea.elise.art/"}>@lea.elise.art</a></h3>
            <br></br>
            <h3 class="white center">Julia Wess</h3>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="socials-container">
                <a href={"https://www.instagram.com/apocalypseexhibition/"}><img class="centered-img" align width="50px" height="50px" src={ig}></img></a>
                <a href={"https://www.facebook.com/apocalypseexhibition/"}><img class="centered-img" width="50px" height="50px" src={fb}></img></a>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <p class="white center">Enjoyed your experience at <em>the Apocalypse: Here and Now</em> gallery? Send our wonderful volunteer web developer who built this website a <a href={"https://ko-fi.com/mayyyy"}><b class="black">coffee</b></a>!</p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            </div>
        );
    }
}
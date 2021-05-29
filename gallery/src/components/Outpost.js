import React from 'react'
import '../style/General.css';
import {
  Link
} from "react-router-dom";
import Navbar from './Navbar.js';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class Home extends React.Component {

    render() {  
        return (
            <div className="home-bg">
            <Navbar></Navbar>
            <h1 class="white center">Artist Outpost</h1>
            <p class="white center">
                Click on the artists’ names below to see their websites as well as their social media accounts where relevant
            </p>
            <br></br>
            <br></br>
            <Row>
                <Col>
                    <p>
                        Daniel Huszar
                    </p>
                </Col>
                <Col>
                    <p>
                        Jeanmarie Weatherhead aka CJW
                    </p>
                </Col>
                <Col>
                    <p>
                        Lale Ceylan
                    </p>
                </Col>
            </Row>
            
            <Link to={'/climate'}><p class="white">Enter Here</p></Link>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            </div>
        );
    }
}
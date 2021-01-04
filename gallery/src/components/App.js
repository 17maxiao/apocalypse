// import logo from './logo.svg';
// import './App.css';
import Home from './Home.js';
import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
import Navbar from './Navbar.js';


export default class App extends React.Component {

	render() {
		return (
			<div className="App">
				<Navbar></Navbar>
					<Router>
						<Switch>
							<Route
								exact
								path="/"
								render={() => (
									<Home />
								)}
							/>
							<Route
								exact
								path="/home"
								render={() => (
									<Home />
								)}
							/>	
						</Switch>
					</Router>
			</div>
		);
	}
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
}


// import logo from './logo.svg';
// import './App.css';
import Home from './Home.js';
import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
import Climate from './Climate.js';


export default class App extends React.Component {

	render() {
		return (
			<div className="App">
					<Router>
						<Switch>
							<Route
								exact
								path="/"
								render={() => (
									<Home/>
								)}
							/>
							<Route
								exact
								path="/climate"
								render={() => (
									<Climate/>
								)}
							/>
						</Switch>
					</Router>
			</div>
		);
	}
}


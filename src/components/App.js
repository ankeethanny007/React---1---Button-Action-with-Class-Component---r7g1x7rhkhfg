import React, {Component, useState} from "react";
import '../styles/App.css';
import Button from "./Button";

class App extends Component {
    constructor(props) {
		super(props);
	};

    render() {
    	return(
    		<div id="main">
		<Button/>
    		</div>
    	);
    }
}


export default App;


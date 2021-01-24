import React, { Component } from 'react'
import './App.css';
import Nav from "./components/Nav"
import Desc from "./components/Description"
import Input from "./components/Input"
import Output from "./components/Output"
import Footer from "./components/Footer"
import ImageClassification from "./ml/ImageClassification";

export class App extends Component {

/* 	componentDidMount() {
        const script = document.createElement("script");    
        script.async = true;    
        script.src = "./ml/ImageClassification.js";    
        this.div.appendChild(script);  
	}
 */

	render() {
		return (
			<div ref={el => (this.div = el)}>
				<div className="container">
				<Nav/>
				<Desc/>
				<Input/>
				{/* <ImageClassification/> */}
				<Output/>
				<Footer/>
				</div>
			</div>
		)
    }
}

export default App

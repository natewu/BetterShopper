import React, { Component } from 'react'
import './App.css';
import Nav from "./components/Nav"
import Desc from "./components/Description"
import Input from "./components/Input"
import Output from "./components/Output"
import Footer from "./components/Footer"
import ImageClassification from "./ml/ImageClassification";

export class App extends Component {
	render() {
		return (
			<div ref={el => (this.div = el)}>
				<div className="container">
				<Nav/>
				<Desc/>
				<Input/>
				{/* <ImageClassification/> */}
				
				<Footer style={{bottom:0}}/>
				</div>
			</div>
		)
    }
}

export default App

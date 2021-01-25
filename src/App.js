import React, { Component } from 'react'
import { ParallaxProvider} from 'react-scroll-parallax';
import './App.css';
import Nav from "./components/Nav"
import Desc from "./components/Description"
import Input from "./components/Input"
// import Output from "./components/Output"
import Footer from "./components/Footer"
import ParallaxImage from "./components/ParallaxImage"
// import ImageClassification from "./ml/ImageClassification";

export class App extends Component {
	render() {
		return (
			<ParallaxProvider blur={{ min: -15, max: 15 }}>
			<div ref={el => (this.div = el)}>
				<div className="container">
				<ParallaxImage/>
				<Nav/>
				<Desc/>
				<Input/>
				{/* <ImageClassification/> */}
				
				<Footer style={{bottom:0}}/>
				</div>
			</div>
			</ParallaxProvider>
		)
    }
}

export default App

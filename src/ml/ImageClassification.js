import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';
import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

export class ImageClassification extends Component {
    async upload() {
        console.log("upload");
        const img = document.getElementById("img")
        const model = await mobilenet.load();
        const predictions = await model.classify(img);
        console.log('Predictions: ');
        console.log(predictions);
        
    }

    async init(){
        const tf = require("@tensorflow/tfjs");
        const model = await tf.loadLayersModel("./clothingModel/model.json");
        console.log("loaded");
        model.summary();
    }
        
    render() {
    
        return (
            <div>
                <img id="img" alt="car" src="./shirt.png"/>
                <Button onClick={async() => await this.upload()} variant="outlined" color="primary" style={{margin:"0 15px 0 auto"}}>Browse</Button>
                {this.init()}
            </div>
        )
    }
}


export default ImageClassification


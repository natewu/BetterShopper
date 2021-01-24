import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';
import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

export class ImageClassification extends Component {
    async upload() {
        console.log("upload");
        const img = document.getElementById("test");
        console.log(img);
        const model = await mobilenet.load();
        const predictions = await model.classify(img);
        console.log('Predictions: ');
        console.log(predictions);
    }

    async init(){
        let model = undefined;
        model = await tf.loadLayersModel(".\tfjs_files\modelcheck.json");
        console.log("Model Loaded");
    }
        
    render() {
        return (
            <div style={this.props.style}>
                <Button onClick={async() => await this.upload()} variant="outlined" color="primary" style={{margin:"0 auto 0 auto"}}>Predict</Button>
                {/* {this.init()} */}
            </div>
        )
    }
}


export default ImageClassification


import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';
import React, { Component, useState } from 'react'
import Button from '@material-ui/core/Button';
import Output from "../components/Output"

export const ImageClassification = () => {
    const [results, setResults] = useState([]);
    const [showResults, setShowResults] = React.useState(false);
    const show = () => setShowResults(true);
    // let query;
    async function upload() {
        setShowResults(false);
        setResults([]);
        console.log("upload");
        const img = document.getElementById("test");
        console.log(img);
        const model = await mobilenet.load();
        const predictions = await model.classify(img);
        setResults(predictions);
        show();
        // query = results[0].className.split(",",1);
        console.log('Predictions: ');
        console.log(predictions);
    }

    return (
        <div style={{display:"grid", marginTop:"10px"}}>
            <Button onClick={async() => await upload()} variant="outlined" color="primary" style={{margin:"0 auto", padding:"10px 50px 10px 50px"}}>Shop</Button>
            { showResults ? <p><b>Product predicted:</b> {results[0].className.split(",",1)}: {((results[0].probability)*100).toFixed(2)+"%"}</p> : null}
            { showResults ? <Output search={results[0].className.split(",",1)}/> : null}
            
        </div>
    )

}


export default ImageClassification


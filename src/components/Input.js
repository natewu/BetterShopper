import React, { Component } from 'react';
import "./Input.css";
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ImageClassification from "../ml/ImageClassification";



export class Input extends Component {
    state = {
        image:[]
    }

    async loadFile(){
        console.log("file loading");
        var input = document.getElementById("input");
        console.log(input.files[0]);
        this.setState({image: []});
        // this.setState({image:  });
        var reader = new FileReader();
        console.log("Loading image");
        reader.onloadend = () =>{
            this.setState({image: this.state.image.concat(reader.result)})
        }
        console.log(this.state.image);
    }

    setImages = (e) => {
        e.preventDefault();
        this.setState({ image: [] });
        const imageFiles = e.target.files;
        const filesLength = imageFiles.length;

        for(var i = 0; i < filesLength; i++) {
            let reader = new FileReader();
            let file = imageFiles[i];

            reader.onloadend = () => {
                this.setState({image: this.state.image.concat(reader.result)});
            }

            reader.readAsDataURL(file);
        }
    }
        

    render() {
        let { image } = this.state;
        return (
            <div>
                <p>Please upload product images here.</p>
                {/* <div className="uploadImage">
                    <CloudUploadIcon className="icon"/>
                    <div className="info">
                        <p>Drag images here</p>
                        <p style={{fontSize:"1.4vmin", color:"rgb(130 130 130)"}}>Max File size {} • JPG/JPEG, PNG</p>
                    </div>
                    <Button id="upload" variant="outlined" color="primary" style={{margin:"0 15px 0 auto"}}>Browse <input type="file" name="file" onChange={this.onChangeHandler}/></Button>
                </div> */}
                <form className="uploadImage">
                    <CloudUploadIcon className="icon"/>
                    <div className="info">
                        <input id="input" type="file" name="file" onChange={this.setImages}/>
                        <p>Drag images here</p>
                        <p style={{fontSize:"1.4vmin", color:"rgb(130 130 130)"}}>Max File size {} • JPG/JPEG, PNG</p>
                    </div>
                    <Button id="upload" variant="outlined" color="primary" style={{margin:"0 15px 0 auto"}}>Browse</Button>
                </form>
                {image.map(image => <img id="test" alt="test" src={image} style={{maxWidth:"100%", height:"auto"}}/>)}
                <ImageClassification image={this.state.image}/>
            </div>
        )
    }
}

export default Input

import React, { Component } from 'react';
import "./Input.css";
// import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ImageClassification from "../ml/ImageClassification";



export class Input extends Component {
    state = {
        image:[],
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
            <div style={{minHeight:"600px"}}>
                <p>Please upload product images here.</p>
                <label for="input" className="uploadImage">
                    <CloudUploadIcon className="icon"/>
                    <div className="info">
                        <p>Browse Images</p>
                        <p style={{fontSize:"1.4vmin", color:"rgb(130 130 130)"}}>Max File size {} • JPG/JPEG, PNG</p>
                    </div>
                    <input id="input" type="file" name="file" size="50" hidden accept=".jpg, .jpeg, .png, .jfif, .webp, .svg, .bmp, .ppm" onChange={this.setImages}/>
                    {/* <Button id="upload" variant="outlined" color="primary" style={{margin:"0 15px 0 auto"}}>Browse</Button> */}
                    
                </label>
                {image.map(image => <img id="test" alt="test" src={image} style={{maxWidth:"100%", height:"auto", marginTop:"10px", marginLeft:"auto", marginRight:"auto"}}/>)}
                <ImageClassification/>
            </div>
        )
    }
}

export default Input

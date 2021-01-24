import React, { Component } from 'react';
import "./Input.css";
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

export class Input extends Component {

    constructor(props){
        super(props);
        this.state = {
            file:null
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.fileUpload(this.state.file).then((response)=>{
            console.log(response.data);
        })
    }

    onChange = (e) => {
        this.state({file:e.target.files[0]});
    }

    fileUpload(file){
        const url = "";
        const formData = new FormData();
        formData.append('file',file);
        const config = {
            headers: {
                "content-type" : "multipart/form-data"
            }
        }
        // return post(url, config);
    }

    render() {
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
                        <input type="file" name="file" onChange={this.onChange}/>
                        <p>Drag images here</p>
                        <p style={{fontSize:"1.4vmin", color:"rgb(130 130 130)"}}>Max File size {} • JPG/JPEG, PNG</p>
                    </div>
                    <Button id="upload" variant="outlined" color="primary" style={{margin:"0 15px 0 auto"}}>Browse</Button>
                </form>
            </div>
        )
    }
}

export default Input

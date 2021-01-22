import React, { Component } from 'react';
import "./Input.css";
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

export class Input extends Component {
    render() {
        return (
            <div>
                <p>Please upload product images here.</p>
                <div className="uploadImage">
                    <CloudUploadIcon className="icon"/>
                    <div className="info">
                        <p>Drag images here</p>
                        <p style={{fontSize:"1.4vmin", color:"rgb(130 130 130)"}}>Max File size {} • JPG/JPEG, PNG</p>
                    </div>
                    <Button variant="outlined" color="primary" style={{margin:"0 15px 0 auto"}}>Browse</Button>
                </div>
            </div>
        )
    }
}

export default Input

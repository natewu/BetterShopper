import React from 'react';
import "./Output.css";

export default function Output({className, probability}) {
    return (
        <div>
            <div className="output">
                <h3 style={{fontWeight:"400", paddingTop:"10px"}}>Products</h3>
                <p>{className}</p>
                <p>{probability}</p>
            </div>
        </div>
    )
}

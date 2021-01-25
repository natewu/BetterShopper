import React from 'react'
import { Parallax } from 'react-scroll-parallax';
 
const ParallaxImage = () => (
    <div style={{height:"900px"}}>
        <Parallax className="custom-class" y={[-50, 50]} tagOuter="figure">
            <img alt="img" src="/Logo.svg"></img>
        </Parallax>
        
    </div>
    
    
);


export default ParallaxImage

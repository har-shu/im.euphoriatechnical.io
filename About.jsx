import React from "react";
import web from "../src/images/hi.gif";
import Common from "./Common";

const About=()=>{
    return(
        <>
        <Common name="Know more about" 
        imgsrc ={web}  
        visit="/contact" 
        btname="Contact us" />
        
        </>
    )
}

export default About;
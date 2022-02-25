import React from "react";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import web from "../src/images/s1.jpg";

const Cards =(props) =>{
    return(
        <>
  <div className="col-md-4 col-10 mx-auto">
  <div class="card">
  <Card.Img  className = "card-image" variant="top" src={props.imgsrc } />
  <Card.Body>
    <Card.Title className="card-title font-weight-bold">{props.title}</Card.Title>
    <Card.Text>Click the button below to get Enrolled!</Card.Text>
    <NavLink to=" " class="btn btn-primary">Enroll now!</NavLink>
  </Card.Body> 
  
                </div>
            </div>
      
    
        </>
        
    );
};
export default Cards;
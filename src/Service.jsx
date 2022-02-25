import React from "react";
import Cards from "./Cards";
import Sdata from "./Sdata";
import Footer from "./Footer";
const Service =()=>{
    return(
        <>
        <div className="my-5">
        <h1 className="text-center">Our Services</h1>
        </div>
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto"> 
            <div className="row gy-4">
              {
                  Sdata.map((val,ind)=>{
                      return <Cards key="{ind}" imgsrc={val.imgsrc} title={val.title} />
                  })}
              

            </div>
        
        </div> 
        </div>
        </div>
        <Footer />
    
        </>
    )
}
export default Service;
import React from "react";

import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import { Switch,Route, Redirect } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navigation from"./Navigation";

const App =()=>{
    return(
        <>
        <Navigation />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/service" component={Service} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Redirect to="/" />


            
        </Switch>
        
        
        </>
    )
}
export default App;
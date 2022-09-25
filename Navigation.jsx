import React from "react";
import { Navbar,Container,Nav} from 'react-bootstrap';
import { NavLink } from "react-router-dom";
const Navigation = () =>{
    return(
        <>
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">

           
        <Navbar bg="bg-light" expand="lg">
  <Container fluid>
    <NavLink activeClassName='menu_active' className="navbar-brand" exact to="/">Euphoria Technical</NavLink>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
     <Nav className="ms-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        euphoriaTechnical>
      
        <li className="nav-item">
            <NavLink activeClassName="menu_active"
            exact 
            className="nav-link active"
            aria-current="page"
            to="/">Home</NavLink>
        </li>  
            <li className="nav-item">
                <NavLink activeClassName="menu_active" className="nav-link"
                to ="/service">Services</NavLink>
            </li>
            <li className="nav-item">
                <NavLink activeClassName="menu_active" className="nav-link"
                to ="/about">About</NavLink>
            </li>
            <li className="nav-item">
                <NavLink activeClassName="menu_active" className="nav-link"
                to ="/contact">Contact</NavLink>
            </li>
       
    </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>


</div>


</div>
        
        </>
    )
}
export default Navigation;
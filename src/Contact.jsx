import React,{ usestate } from "react";
import { Form,Button } from "react-bootstrap";
import Footer from "./Footer";

const Contact =()=>{
    const[data,setData ] = React.useState({
        fullname:" ",
        phone:"",
        email:"",
        msg:"",
    });
    const InputEvent = (event) =>{
        const {name,value}=event.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            };
        });
    };
    const formSubmit =(e) =>{
        e.preventDefault();
        
    };
    

    
    return(
        <>
        <div className="my-3">
         <h1 className="text-center">Contact Us!</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
             <div className="col-md-6 col-15 mx-auto">
                <form onSubmit={formSubmit}> 
                 <Form>
  <Form.Group className="mb-2" controlId="formBasicEmail">
    <Form.Label>Full Name</Form.Label>
    <Form.Control type="text" 
    name="fullname"
    value={data.fullname}
    onChange={InputEvent}
    
    placeholder="Enter your name" required />
    <Form.Text className="text-muted">
      We'll never share your details with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Mobile Number</Form.Label>
    <Form.Control type="number" 
    name="phone"
    value={data.phone}
    onChange={InputEvent}
    
    placeholder="Phone number"required />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail" />
    <Form.Label>E-mail</Form.Label>
    <Form.Control type="email" 
    name="email"
    value={data.email}
    onChange={InputEvent}
    
    placeholder="Enter your E-mail" required />

    <Form.Group className="mb-3" controlId="formBasicEmail" />
    <Form.Label>Message</Form.Label>
    <Form.Control type="text" 
    name="msg"
    value={data.msg}
    onChange={InputEvent}
    
    placeholder="Enter your message"  required/>



  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" required />
  </Form.Group>
  <Button onClick={()=>{
      alert('Thanks! we will get back to you soon.')}} variant="btn btn-outline-primary" type="submit"   required>
    Submit
  </Button>
</Form>









                 </form>
             </div>

            </div>
            
            </div>  
            <Footer />
        </>
    )
}
export default Contact;
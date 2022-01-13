import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import { useEffect, useState } from 'react';
import axios from "axios"
import Swal from "sweetalert2"
function Registration() {
    const [username, setusername] = useState("");
    const [emailaddress, setemailaddress] = useState("");
    const [password, setpassword] = useState("");


    async function userpost(){
      console.log(username,emailaddress,password)
      const userdetails={
        "username":username,
        "email":emailaddress,
        "password":password
      }
      console.log(userdetails)
      await axios.post(" https://bms-backend-server.herokuapp.com/user-register",userdetails).then(()=>{
        Swal.fire({
          title: '<strong>submitted</strong>',
          icon: 'success',
          showCloseButton: true,
          showCancelButton: true,
          focusConfirm: false,
        })
      }).catch((e)=>{Swal.fire({
        title: `<strong>${e.message}</strong>`,
        icon: 'error',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        })})
      
      setusername("")
      setemailaddress("")
      setpassword("")
      
    }
  return (
    
    <div>
            <Container Fluid style={{padding:"8%"}}>
            <Form>
     <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control value={username} onChange={(e)=>setusername(e.target.value)} placeholder="Enter name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control value={emailaddress} onChange={(e)=>setemailaddress(e.target.value)} type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control value={password} onChange={(e)=>setpassword(e.target.value)} type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" onClick={userpost}>
    Submit
  </Button>
</Form>
               
            </Container>
        </div>
  
  
  
  );
}

export default Registration;
 
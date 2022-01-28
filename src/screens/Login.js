import React, {useState, useRef} from 'react'
import { Container,Form, Button, Nav, Col,Image, Row } from 'react-bootstrap'
import { useNavigate} from "react-router-dom";
import  brn  from '../brn.png';
import { useDispatch } from 'react-redux';

export default function Login() {

    const [validData, setValidData] = useState([])
    const [invalidData, setInvalidData] = useState([])
    let username= useRef(null)
    let password= useRef(null)
    let navigate= useNavigate()

    let dispatch = useDispatch()
    
 

    let validateInformation= async()=>{
        let formData= new FormData()
        formData.append('registeredEmail', username.current.value);
        formData.append('registeredPassword', password.current.value );
        formData.append('funcName', 'verifyLogin');
    



        let postInformation= await fetch('https://pulse.brninfotech.com/pulse/modules/admin/ValidateLogin.php', 
        {
            method: 'POST',
            body: formData
        })
        let JSOData= await postInformation.json()

        dispatch({type:'Login', payload:JSOData})


        
        
  

        if(JSOData.loggedIn==="yes"){
          setValidData(JSOData)
          setInvalidData('')

        }else{
            setInvalidData(JSOData)
            setValidData('')
        }
    }
    let sending=()=>{
      navigate("/dashboard",{state:
        {
        picture: validData.profileImagePath,
        batch: validData.batchID,
        name:validData.firstName,
        stuID: validData.studentID,
        email:validData.registeredEmail,
        role:validData.role}})
    }
    


    return (
        <Container fluid className="border bg-secondary">
              <Row>
            {/* controlling responsive */}
                <Col xl={{ span: 4, offset: 1 }} sm={{ span: 12, offset: 12 }} xxl={{ span: 4, offset: 1 }}
               lg={{ span: 5, offset: 4}} md={{ span: 5, offset: 4}}>
              
                    <Image src= {brn} alt=''/>
               <Form>
               <p className="sign">Sign In</p>
              
      {/* Create Login input blocks Using form from react Boostrap */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label></Form.Label>
                  <Form.Control type="email" placeholder="Enter email" ref={username}/>
                </Form.Group>
              
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label></Form.Label>
                  <Form.Control type="password" placeholder="Password" ref={password}/>
                </Form.Group>
    
                <Button className="arrange text-light bg-success button" variant="primary" type="button" onClick={()=>{
                  validateInformation();
                }}>
        
                  LOGIN
                </Button>
            
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
               <Form.Check type="checkbox" label="Remember"/>
             </Form.Group>
                <Nav className="me-auto">
            <Nav.Link className="margin" href=""><strong>Forgot Password?</strong></Nav.Link>
            </Nav>
            
              </Form> 
              
              <Nav style={{color:'white'}}>
            <Button className="account" onClick={()=>{
              navigate("/signup")
            }} ><strong>CREATE ACCOUNT</strong></Button>
            </Nav>
            </Col>
            {/* controlling responsive */}
            <Col Col xl={{ span: 6, offset: 1}} sm={{ span: 12, offset: 12 }} xxl={{ span: 6, offset: 1 }}
               lg={{ span: 8, offset: 2}} md={{ span: 10, offset: 1}}>
               <div className='style'>
                 
              {/* {validData.loggedIn==='yes'? <Image className='profileImage' 
              src={'https://pulse.brninfotech.com/pulse/modules/' +image} roundedCircle alt=''></Image> 
              : null}<br/> */}
              
              {validData.loggedIn==='yes'? sending():<span>{invalidData.msg}</span>}
               </div>
               </Col>
               </Row>
              </Container>
    )
}

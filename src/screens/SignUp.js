import React from 'react'
import { Container, Form, Row, Col, Image, Button } from 'react-bootstrap'
import  brn  from '../brn.png';
import {useSelector} from 'react-redux'
import {Navigate} from 'react-router-dom'

export default function SignUp() {
  let storeData= useSelector(store=>store)
  if(storeData.content.loggedIn==='no')
  {
      return <Navigate to="/"/>
      
  }
    return (
        <Container fluid className="signBack">
            <Row>
            <Col xl={{ span: 5, offset: 4 }} sm={{ span: 12, offset: 12 }} xxl={{ span: 4, offset: 3 }}
               lg={{ span: 7, offset: 6}} md={{ span: 5, offset: 5}}>
              
                    <Image src= {brn} alt=''/>
            
<Form >
<p className="sign">Sign In</p>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Text className="text-muted">
Enter your name exactly as per your educational certificates.:
    </Form.Text>
    <Form.Control type="text" placeholder="Name as per certificates" />
    <Form.Select aria-label="Default select example">
  <option>Choose Gender</option>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
</Form.Select>
<Form.Select aria-label="Default select example">
  <option>Choose Martial Status</option>
  <option value="Married">Married</option>
  <option value="Unmarried">Unmarried</option>
</Form.Select>
<Form.Group controlId="formFile" className="mb-3">
    <Form.Label><strong className='text'>Select Image</strong></Form.Label>
    <Form.Control type="file" />
  </Form.Group>
  <Form.Control type="number" placeholder="Mobile No." />
  <Form.Control type="text" placeholder="City/Town" />
  <Form.Control type="text" placeholder="Enter State" />
  <Form.Text className="text-muted">
<strong className='text'>Enter your account details below:</strong>
    </Form.Text>
  <Form.Control type="email" placeholder="Email" />
  <Form.Control type="password" placeholder="Password" />
  <Form.Control type="password" placeholder="Re-type Your Password" />
  <Form.Check type="checkbox" label="I agree to the Terms of Service & Privacy Policy"/>
  <Button className="arrange text-light bg-success button" variant="primary" type="button">SUBMIT</Button>
    
    
  </Form.Group>
</Form>
</Col>
</Row>
        </Container>
    )
}


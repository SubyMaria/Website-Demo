import React from 'react'
import { Container, Row, Col, Form, FloatingLabel, Button} from 'react-bootstrap'
import {useSelector} from 'react-redux'
import {Navigate} from 'react-router-dom'

export default function Requests() {
  let storeData= useSelector(store=>store)
  if(storeData.content.loggedIn==='no')
  {
      return <Navigate to="/"/>
      
  }
    return (
        <Container className='border'>
            <Row>
    <Col className='header'>Create a Request</Col>
  </Row><br/><br></br>
  <Form>
  <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
    <Form.Label column sm="2">
      Request type
    </Form.Label>
    <Col sm="10">
    <Form.Control type="text" placeholder="Enter Request type" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
    <Form.Label column sm="2">
      Lab ID
    </Form.Label>
    <Col sm="10">
    <Form.Control type="text" placeholder="Enter Lab ID" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
    <Form.Label column sm="2">
      Seat number
    </Form.Label>
    <Col sm="10">
    <Form.Control type="text" placeholder="Enter Seat number" />
    </Col>
    </Form.Group> 
    <Form.Label column sm="2">
    Description
    </Form.Label>
    <FloatingLabel controlId="floatingTextarea2" label=" Ticket Description">
    <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '100px' }}
    />
  </FloatingLabel>
   
</Form><br/>
<Button>Submit</Button>
        </Container>
    )
}

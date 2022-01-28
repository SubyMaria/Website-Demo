import React from 'react'
import { Container, Row, Col, Form, FloatingLabel, Button} from 'react-bootstrap'
import  { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useSelector} from 'react-redux'
import {Navigate} from 'react-router-dom'



export default function Leave() {
  const [startDate, setStartDate] = useState( );
  const [endDate, setEndDate] = useState();
  let storeData= useSelector(store=>store)
  if(storeData.content.loggedIn==='no')
  {
      return <Navigate to="/"/>
      
  }
 
  
    return (
        <Container className='border'>
            <Row>
    <Col className='header'>Leave Details</Col>
  </Row><br/><br></br>
  <Form>
  <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
    <Form.Label column sm="2">
      Leave Type
    </Form.Label>
    <Col sm="10">
    <Form.Control type="text" placeholder="Enter Request type" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
    <Form.Label column sm="2">
      Leave Date(s)
    </Form.Label>
    <Col sm="10" className='date'>
    <Form.Label column sm="2">Start Date:</Form.Label>
    <DatePicker  selected={startDate} onChange={(date) => setStartDate(date)}/>
    <Form.Label column sm="2">End Date:</Form.Label>
    <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
    </Col>
  </Form.Group>
    <Form.Label column sm="2">
   Leave Description
    </Form.Label>
    <FloatingLabel controlId="floatingTextarea2" label=" Leave Description">
    <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '100px' }}
    />
  </FloatingLabel> 
</Form><br/>

<Button>Apply Leave</Button>
        </Container>
    )
}

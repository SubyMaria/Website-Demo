import React from 'react'
import { Container, Table, Form, Button} from 'react-bootstrap'
import {useSelector} from 'react-redux'
import {Navigate} from 'react-router-dom'

export default function DSU() {
  let storeData= useSelector(store=>store)
  if(storeData.content.loggedIn==='no')
  {
      return <Navigate to="/"/>
      
  }
  
      
    return (
        <Container>
         <p><strong class='heading'>Daily Status Update</strong> Write your today's Status Update</p>
         <Table striped bordered hover>
  <thead>
    <tr className='header'>
      <th colSpan="2">Today's Activities Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Morning 9:00-10:00 AM</td>
      <td><Form><Form.Control type="text" placeholder="Write activities worked between 9:00-10:00 AM " /></Form></td>
    </tr>
    <tr>
      <td>Morning 10:00-11:00 AM</td>
      <td><Form><Form.Control type="text" placeholder="Write activities worked between 10:00-11:00 AM " /></Form></td>
    </tr>
    <tr>
      <td>Morning 11:00-12:00 AM</td>
      <td><Form><Form.Control type="text" placeholder="Write activities worked between 11:00-12:00 AM " /></Form></td>
    </tr>
    <tr>
      <td>Afternoon 12:00-1:00 PM</td>
      <td><Form><Form.Control type="text" placeholder="Write activities worked between 12:00-1:00 PM " /></Form></td>
    </tr>
    <tr>
      <td>Afternoon 1:00-2:00 PM</td>
      <td><Form><Form.Control type="text" placeholder="Write activities worked between 1:00-2:00 PM " /></Form></td>
    </tr>
    <tr>
      <td>Afternoon 2:00-3:00 PM</td>
      <td><Form><Form.Control type="text" placeholder="Write activities worked between 2:00-3:00 PM " /></Form></td>
    </tr>
    <tr>
      <td>Afternoon 3:00-4:00 PM</td>
      <td><Form><Form.Control type="text" placeholder="Write activities worked between 3:00-4:00 PM " /></Form></td>
    </tr>
  </tbody>
</Table>
<Button> Update Today's Status</Button>



        </Container>
    )
}

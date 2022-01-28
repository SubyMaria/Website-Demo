import React from 'react'
import { Container, Table, Image } from 'react-bootstrap';
import { useLocation} from "react-router-dom";
import {useSelector} from 'react-redux'
import {Navigate} from 'react-router-dom'
  

export default function Dashboard() {

  let loc= useLocation()
  let storeData= useSelector(store=>store)
  if(storeData.content.loggedIn==='no')
  {
      return <Navigate to="/"/>
      
  }
  let image=loc.state.picture.slice(3)

 
return (
<Container>
          <Image className='profileImage' 
              src={'https://pulse.brninfotech.com/pulse/modules/' + image} roundedCircle alt=''></Image> 

<Table striped bordered hover>
  <tbody>
    <tr>
      <th>Batch ID:</th>
      <td>{loc.state.batch}</td>
    </tr>
    <tr>
      <th>Student Name:</th>
      <td>{loc.state.name}</td>
    </tr>
    <tr>
      <th>Student ID:</th>
      <td>{loc.state.stuID}</td>
    </tr>
    <tr>
      <th>Email ID:</th>
      <td>{loc.state.email}</td>
    </tr>
    <tr>
      <th>Role:</th>
      <td>{loc.state.role}</td>
    </tr>
  </tbody>
</Table>

        </Container>
    )
}

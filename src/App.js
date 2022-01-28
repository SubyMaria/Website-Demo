
import './App.css';
import DSU from './screens/DSU';
import Leave from './screens/Leave';
import Login from './screens/Login';
import Requests from './screens/Requests';
import SignUp from './screens/SignUp';
import Dashboard from './screens/Dashboard';
import { BrowserRouter, Routes, Route, NavLink} from "react-router-dom";

function App() {

  let highLighting=(obj)=>
  {
    return {
      backgroundColor: obj.isActive===true? 'yellowgreen':null
    }
  }
  return (
    <BrowserRouter>
    <nav>
   
    <NavLink className='link' to='/' style={(obj)=>highLighting(obj)}>Login Page</NavLink>  {/* link to display Login page */}
    <NavLink className='link' to='/dashboard' style={(obj)=>highLighting(obj)}>Dashboard Page</NavLink> {/* link to display dashboard page */}
    <NavLink className='link' to='/signup' style={(obj)=>highLighting(obj)}>SignUp Page</NavLink> {/* link to display sign up page */}
    <NavLink className='link' to='/dsu' style={(obj)=>highLighting(obj)}>DSU Page</NavLink> {/* link to display daily status page */}
    <NavLink className='link' to='/request' style={(obj)=>highLighting(obj)}>Request Page</NavLink> {/* link to display request page */}
    <NavLink className='link' to='/leave' style={(obj)=>highLighting(obj)}>Leave Page</NavLink> {/* link to display leave page */}
    </nav><br></br>
    <Routes>
      <Route path='/' element={<Login/>}> </Route>  {/* display Login page */}
      <Route path='/dashboard' element={<Dashboard/>}> </Route>  {/* display Dashboard page */}
      <Route path='/signup' element={<SignUp/>}> </Route>  {/* display sign up page */}
      <Route path='/dsu' element={<DSU/>}> </Route>  {/* display daily status page */}
      <Route path='/request' element={<Requests/>}> </Route>  {/* display request page */}
      <Route path='/leave' element={<Leave/>}> </Route>  {/*display leave page */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;

/*import React,{useState} from 'react'
import Home from './Home.jsx'
import Signup from './Signup.jsx'
import Patients from './Patients.jsx';
function App(){
  const [username,setUsername]=useState('Codegnan Hospital');
  return(
    <>
    <Patients/>
    <Home hospitalname={username}/>
    <Signup/><br/>
    <p>Hooks Concept in react,state management system,-useState,Props,Event Handling,form handling,controlled input</p>
    <h1>{username}</h1>
    <button onClick={()=>setUsername('No. 1 Hospitals')}>Update Name</button>
    </>
  )
  DAY-17-state management system ,-usestate,props
}
export default App*/

//DAY-20
import React from 'react'
import Home from './Home'
import Patients from './Patients'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navigate from './Navigate';
import Doctors from './Doctors';
import SinglePatient from './SinglePatient';
function App(){
  return(
    <>
    <BrowserRouter>
    <Navigate/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/patients" element={<Patients/>}/>
      <Route path="/doctors" element={<Doctors/>}/>
      <Route path="/patients/:id" element={<SinglePatient/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
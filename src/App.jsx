import React,{useState} from 'react'
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
    {/*<p>Hooks Concept in react,state management system,-useState,Props,Event Handling,form handling,controlled input</p>
    <h1>{username}</h1>*/}
    <button onClick={()=>setUsername('No. 1 Hospitals')}>Update Name</button>
    </>
  )
  /*DAY-17-state management system ,-usestate,props*/
}
export default App
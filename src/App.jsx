import React,{useState} from 'react'
import Home from './Home.jsx'
function App(){
  const [username,setUsername]=useState('Codegnan Hospital');
  return(
    <>
    <Home hospitalname={username}/>
    {/*<p>Hooks Concept in react,state management system,-useState,Props,Event Handling,form handling,controlled input</p>
    <h1>{username}</h1>*/}
    <button onClick={()=>setUsername('No. 1 Hospitals')}>Update Name</button>
    </>
  )
  /*DAY-18-state management syste,-usestate,props*/
}
export default App
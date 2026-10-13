/*DAY-18*/
import React,{useState,useEffect} from 'react'
import axios from 'axios'
function Patients(){
    async function getPatients(){
        try{
            const res=await axios.get('https://doc-back.onrender.com/patients')
            console.log(res.data);
        }
        catch(error){
            console.log('Patient details not allowed',error);
        }
        finally{
            console.log('Patient details');
        }
    }
    //useEffect(function,dependency)
    useEffect(()=>{
        getPatients()
    },[])
    return(
        <div>

        </div>
    )
}
export default Patients
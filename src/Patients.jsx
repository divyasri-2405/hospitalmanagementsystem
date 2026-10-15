/*DAY-18*/
import React,{useState,useEffect} from 'react'
import axios from 'axios'
function Patients(){
    const[data,setData]=useState([])
    const[search,setSearch]=useState('');
    async function getPatients(){
        try{
            const res=await axios.get('https://doc-back.onrender.com/patients')
            console.log(res.data);//200
            setData(res.data)
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
    const filteredPatients=data.filter((patient)=>{
        console.log(search)
        return patient.name.toLowerCase().includes(search.toLowerCase())||
        patient.age.includes(search)
        // patient.disease.includes(search)
    })
    return(
        /*day-19*/
       <>
       <div>
        <input type="text" placholder="Enter Patient Information"
        name='search' value={search} 
        onChange={(e)=>setSearch(e.target.value)}/>
        {
            filteredPatients.length===0?
            <>
            <h1>Patients not found</h1>
            </>:
            <>
            <h1>Patients Information</h1>
            <div className='card'>
                {
                    filteredPatients.map((v,i)=>(
                        <div key={v.id}>
                            <h2>Patient Name:{v.name}</h2>
                            <h3>Disease:{v.disease}</h3>
                            <h4>Weight:{v.weight}</h4>
                            <h5>Gender:{v.gender}</h5>
                            <h5>Age:{v.age}</h5>
                            <h5>Email:{v.email}</h5>
            </div>
                    ))

                }
                </div>
                </>
        }
       </div>
       </>
    )
}
export default Patients
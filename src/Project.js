import { FileDownloadOff } from '@mui/icons-material'
import React, { useState } from 'react'

export const Project = () => {
    const [message,setMessage] = useState('asan')
    const [array,setArray] = useState([])
    // function clickwhiledataadd(params) {
        
    // }
    console.log(array);
    
    const clickwhiledataadd = () =>{
        setArray([...array,{count:array.length,whatmessage:message}])
    }
    const removefunction = (params) =>{
        console.log(params);
        
     let removeddata =   array.filter((rr)=> rr.count !== params.count)
     setArray(removeddata)
    }


  return (
    <div>
       
        {array.map((dd)=>
        <div>
            {dd.whatmessage}
            <button onClick={()=>removefunction(dd)}>remove</button>
            </div>
        )}
         <input type='text' placeholder='enter your message' onChange={(e)=>setMessage(e.target.value)}></input>
         <button className='btn btn-primary' onClick={()=>clickwhiledataadd()}>Add</button>
    </div>
  )
}

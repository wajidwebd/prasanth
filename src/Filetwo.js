import React, { useEffect, useState } from 'react'
import { Filethree } from './Filethree'
import axios from 'axios'

export const Filetwo = ({data}) => {
  // const myname = 'ak';
  // const myname = 'prem';

  // Hooks -> Javascript Advantage
  // 1. useState
  // const [variablename,setVariablename] = useState('initialvalue')
  const [myname,setMyname] = useState('ak')
  const [countdown,setCountdown] = useState(0);
  const [arraydata,setArraydata] = useState([])
  console.log(arraydata);
  
  // useEffect - syntax
  useEffect(()=>{
    // if (1==1) {
    //   alert("without calling execution")
      
    // } else {
    //   alert("not without calling execution")
    // }
  // },[countdown,myname])
  console.log("useffect");
  axios.get("https://jsonplaceholder.typicode.com/todos/").then((res)=>{
    console.log(res.data);
    setArraydata(res.data)
    
  })
  
},[myname])



  return (
    <div>Filetwo
      {myname}
      {countdown}
      <button onClick={()=>setMyname('prem')}>namechange</button>
      <button onClick={()=>setMyname('ak')}>namechange</button>
      <button onClick={()=>setCountdown(countdown+1)}>+</button>
      <button onClick={()=>setCountdown(countdown-1)}>-</button>
      {/* {arraydata.title} */}
      {
        arraydata.map((prem,index)=>
          <div key={index}>
            <h1>{prem.title}</h1>
            </div>
        )
      }
      <Filethree data={data}></Filethree>
    </div>
  )
}

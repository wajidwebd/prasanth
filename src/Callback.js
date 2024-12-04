import React, { useCallback, useEffect, useMemo, useState } from 'react'

export const Callback = () => {
    const [numbers,setNumbers] = useState(0)
    const [text,setText] = useState('')


    // calculationprogram(numbers)
//    const output = useMemo(()=>{
//        return calculationprogram(numbers)
//     },[numbers])

// const output = useMemo(()=>{
//     return calculationprogram(numbers)
// },[numbers])


const output =  useCallback(()=>{
  return calculationprogram(numbers)

},[numbers])

  return (
    <div>Callback
        {/* {output} */}
        {output}
        <input type='number' placeholder='enter your number' onChange={(event)=>setNumbers(event.target.value)}></input>
        <input type='text' placeholder='enter your text' onChange={(event)=>setText(event.target.value)}></input>

    </div>
  )
}

function calculationprogram(params) {
  for (let index = 0; index < 1000000000; index++) { }
  return params * 2
}


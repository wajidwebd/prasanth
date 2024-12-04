import React, { useEffect, useState } from 'react'

export const Cart = ({comman,setCommon}) => {
  const [price,setPrice] = useState(0);

  useEffect(()=>{
    let dummy = 0 ;
    comman.map((dd)=>dummy = dd.price * dd.productdiplay + dummy)
    setPrice(dummy)
  },[comman])
  const removeparticulardata = (params) =>{
    console.log(params);
    let removeddata = comman.filter((remove)=>remove.count !== params.count)
    setCommon(removeddata)
  }
  return (
    <div>Cart
         <div className='row'>
        {comman.map((arraydata,index)=>
        <div key={index} className='col-lg-4'>
            <div class="card">
  <img src={arraydata.productimage} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{arraydata.productname}</h5>
    <p class="card-text">{arraydata.productdescription}</p>
    <p class="card-text">Price:{arraydata.price}</p>

    <button class="btn btn-primary" onClick={()=>removeparticulardata(arraydata)}>Remove</button>
  </div>
</div>
            </div>
        )}
        </div>

        <h1>Price: {price}</h1>
    </div>
  )
}

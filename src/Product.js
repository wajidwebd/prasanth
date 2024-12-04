import React from 'react'
import Productdetails from './Productdetails'
export const Product = ({comman,setCommon}) => {

  const particulardata = (params) =>{
    console.log(params);
    setCommon([...comman,params])
    
  }
  return (
    <div>
        <div className='row'>
        {Productdetails.map((arraydata,index)=>
        <div key={index} className='col-lg-4'>
            <div class="card">
  <img src={arraydata.productimage} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{arraydata.productname}</h5>
    <p class="card-text">{arraydata.productdescription}</p>
    <p class="card-text">Price:{arraydata.price}</p>

    <button class="btn btn-primary" onClick={()=>particulardata(arraydata)}>Add to cart</button>
  </div>
</div>
            </div>
        )}
        </div>
      
    </div>
  )
}

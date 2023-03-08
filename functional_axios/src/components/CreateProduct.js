import React, { useEffect, useState } from 'react'
import ProductService from '../services/ProductService';

const CreateProduct = () => {
    const[id,setId]=useState([]);
    const[name,setName]=useState([]);
    const[qty,setQty]=useState([]);
    const[price,setPrice]=useState([]);
    const[pro,setPro]=useState([])
    useEffect((e)=>{
        e.preventDefault();
        ProductService.addProducts(product).then(res=>{
            setPro(res.data)
        })
    },[])
    const addProducts=(e)=>{
        e.preventDefault();
        
    }
  return (
    <div className='container'>
        <div className='card'>
            <div className='card-header'>
                <h1>Create Product</h1>
            </div>
            <div className='card-body'>
                <form>
                    <input className='form-control' placeholder='Enter product ID' onChange={(e)=>{setId(e.target.value)}}/><br/>
                    <input className='form-control' placeholder='Enter product Name' onChange={(e)=>{setName(e.target.value)}}/><br/>
                    <input className='form-control' placeholder='Enter product Quantity' onChange={(e)=>{setQty(e.target.value)}}/><br/>
                    <input className='form-control' placeholder='Enter Product price'onChange={(e)=>{setPrice(e.target.value)}}/><br/>
                    <button className='btn btn-primary'  onClick={(e)=>{addProducts(e)}}>Create</button>
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default CreateProduct

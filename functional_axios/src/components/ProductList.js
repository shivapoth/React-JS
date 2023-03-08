import React, { useEffect, useState } from 'react'
import ProductService from '../services/ProductService';

const ProductList = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        ProductService.getProducts().then(res => setProduct(res.data))
    }, [])

    return (
        <div className='container'>
            <div className='card'>
                <div className='card-header'>
                    <h1>Product List</h1>
                </div>
                <div className='card-body'>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th colSpan={"3"}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                product.map((p,i)=>
                                <tr key={i}>
                                    <td>{p.id}</td>
                                    <td>{p.name}</td>
                                    <td>{p.qty}</td>
                                    <td>{p.price}</td>
                                    <td>
                                        <button className='btn btn-success'>Edit</button>&emsp;
                                        <button className='btn btn-danger'>Delete</button>&emsp;
                                        <button className='btn btn-primary'>View</button>
                                    </td>
                                </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default ProductList

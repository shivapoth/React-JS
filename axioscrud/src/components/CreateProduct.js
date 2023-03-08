import React, { Component } from 'react'

export default class CreateProduct extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            name: '',
            quantity: '',
            price: '',
            products: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:3002/products").then(re => re.json()).then(pr => {
            this.setState({ products: pr })
        })
    }
    addProduct(e) {
        e.preventDefault();
        fetch("http://localhost:3002/products/", {
            method: "PUT"
        })
    }
    render() {
        return (
            <div className='container'>
                <h1>CreateProduct</h1><br />
                <form>

                    <input type="text" className='form-control' placeholder='Enter Product Id' /><br />
                    <input type="text" className='form-control' placeholder='Enter Product Name' /><br />
                    <input type="text" className='form-control' placeholder='Enter Quantity' /><br />
                    <input type="text" className='form-control' placeholder='Enter Price' />
                    <br />
                    <button className='btn btn-info' onClick={(e) => this.addProduct()}>CreateProduct</button>

                </form>
                <br />
                <table className='table table-dark table-striped'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th colSpan={"2"}>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.products.map((p, i) =>
                                <tr key={i}>
                                    <td>{p.id}</td>
                                    <td>{p.name}</td>
                                    <td>{p.quantity}</td>
                                    <td>{p.price}</td>
                                    <td>
                                        <button type='button' className='btn btn-danger' onClick={(e) => this.deleteproduct(p.id, e)}>Delete</button>&emsp;
                                    </td>
                                    <td>
                                        <button type='button' className='btn btn-success' onClick={(e) => this.updateproduct(p.id, e)}>Edit</button>&emsp;
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

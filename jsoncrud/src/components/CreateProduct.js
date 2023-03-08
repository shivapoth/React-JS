import React, { Component } from 'react'

export class CreateProduct extends Component {
    constructor() {
        super();
        this.state = {
            id: "",
            name: "",
            quantity: "",
            price: ""
        }
    }
    display(e) {
        e.preventDefault();
       
        fetch("http://localhost:3002/products/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: this.state.id,
                name: this.state.name,
                quantity: this.state.quantity,
                price: this.state.price,
            }),
        }).then(function (res) {
            return res.json();
        }).then(window.location.reload());
    }

    render() {
        return (
            <div className='container'>
                <div className="card">
          <div className="card-header">
                <h1>Create Products</h1></div>
               
                <div className="card-body">
                <form>
                    <div className='mb-3'>
                        <label className='form-label'>ID</label>
                        <input type="text" className='form-control' value={this.state.id} onChange={(e) => this.setState({ id: e.target.value })} />
                    </div>

                    <div className='mb-3'>
                        <label className='form-label' >Name</label>
                        <input type="text" className='form-control' value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                    </div>

                    <div className='mb-3'>
                        <label className='form-label' >Quantity</label>
                        <input type="text" className='form-control' value={this.state.quantity} onChange={(e) => this.setState({ quantity: e.target.value })} />
                    </div>

                    <div className='mb-3'>
                        <label className='form-label' >Price</label>
                        <input type="text" className='form-control' value={this.state.price} onChange={(e) => this.setState({ price: e.target.value })} />
                    </div>
                    <br /><br />
                    <button className='btn btn-info' onClick={(e) => { this.display(e) }}>Create</button>
                </form>
                </div>
        </div>
            </div>
        )
    }
}

export default CreateProduct

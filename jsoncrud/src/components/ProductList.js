import React, { Component } from 'react'

class ProductList extends Component {
    constructor() {
        super();
        this.state = {
            id: "",
            name: "",
            quantity: "",
            price: "",
            products: [],
            product: []
        }
    }
    onEdit(e, pid) {
        e.preventDefault();
        fetch("http://localhost:3002/products/" + pid).then(response => response.json()).then((pro) => this.setState({ product: pro }))
    }
    componentDidMount() {
        fetch("http://localhost:3002/products")
            .then((response) => response.json())
            .then((product) => {
                this.setState({ products: product })
            })
    }

    deleteproduct(pid, e) {
        e.preventDefault();
        fetch("http://localhost:3002/products/" + pid, { method: "DELETE" }).then(() => {
            window.location("http://localhost:3002/")
        }).then(window.location.reload());
        this.getAllProducts();
    }
    getAllProducts() {
        fetch("http://localhost:3002/products").then((response) => response.json()).then((product) => {
            this.setState({ products: product })
        })
    }

    updateproduct(e, pid) {
        e.preventDefault();
       
        if (this.state.id === "") {
            this.state.id = this.state.product.id;
        } if (this.state.name === "") {
            this.state.name = this.state.product.name;
        } if (this.state.qty === "") {
            this.state.qty = this.state.product.qty;
        } if (this.state.price === "") {
            this.state.price = this.state.product.price;}
            fetch("http://localhost:3002/products/" + pid,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "id": this.state.id,
                        "name": this.state.name,
                        "quantity": this.state.quantity,
                        "price": this.state.price
                    })
                }
            ).then(function (r) {
                r.json();
            }).then(window.location.reload());
            this.getAllProducts();

        }
        render() {
            return (
                <div className='container'>
                    <div className="card">
                        <div className="card-header">
                            <h1>Product List</h1></div>
                        <div className="card-body">
                            <table className='table  table-success table-hover'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th colSpan={"2"}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.products.map((p, i) =>
                                            <tr
                                                key={i}>
                                                <td>{p.id}</td>
                                                <td>{p.name}</td>
                                                <td>{p.quantity}</td>
                                                <td>{p.price}</td>
                                                <td>
                                                    <button type='button' className='btn btn-danger' onClick={(e) => this.deleteproduct(p.id, e)}>Delete</button>&emsp;
                                                </td>
                                                <td>

                                                    <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={(e) => this.onEdit(e, p.id)}>
                                                        Edit
                                                    </button>


                                                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tableindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <h1 className="modal-title fs-5" id="staticBackdropLabel">Update Products</h1>
                                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                </div>
                                                                <div className="modal-body">
                                                                    <div className='container'>
                                                                        <form>
                                                                            <div className='mb-3'>
                                                                                <label className='form-label'>ID</label>
                                                                                <input type="text" className='form-control' defaultValue={this.state.product.id} onChange={(e) => this.setState({ id: e.target.value })} />
                                                                            </div>

                                                                            <div className='mb-3'>
                                                                                <label className='form-label' >Name</label>
                                                                                <input type="text" className='form-control' defaultValue={this.state.product.name} onChange={(e) => this.setState({ name: e.target.value })} />
                                                                            </div>

                                                                            <div className='mb-3'>
                                                                                <label className='form-label' >Quantity</label>
                                                                                <input type="text" className='form-control' defaultValue={this.state.product.quantity} onChange={(e) => this.setState({ quantity: e.target.value })} />
                                                                            </div>

                                                                            <div className='mb-3'>
                                                                                <label className='form-label' >Price</label>
                                                                                <input type="text" className='form-control' defaultValue={this.state.product.price} onChange={(e) => this.setState({ price: e.target.value })} />
                                                                            </div>
                                                                        </form>


                                                                    </div>
                                                                </div>
                                                                <div className="modal-footer">
                                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                    <button type="button" className="btn btn-primary" onClick={(e) => this.updateproduct(e, p.id)}>Save Changes</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
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
    }


export default ProductList;

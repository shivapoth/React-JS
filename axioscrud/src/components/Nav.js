import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"


export default class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className='container'>
                <nav class="navbar bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand">Ojas</a>
                        <form class="d-flex" role="search">
                            <button className='btn btn-outline-success'>Sign In</button>&emsp;
                            <button className="btn btn-outline-primary" >Sign Out</button>
                        </form>
                    </div>
                </nav>
                <br />
                <div className="form-floating mb-3">
                    <input type="email" class="form-control" placeholder="Enter Username" />
                    <label for="floatingInput">Enter Username</label>
                </div>
                <div className="form-floating">
                    <input type="password" class="form-control" placeholder="Enter Password" />
                    <label for="floatingPassword">Enter Password</label>
                </div>
                <br /><br />
                <button className='btn btn-success'>Login</button>
            </div>
        )
    }
}


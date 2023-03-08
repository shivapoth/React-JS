import React, { Component } from 'react'

export class NavBar extends Component {
    render() {
        return (
            <>
                <nav className="navbar bg-body-tertiary " >
                    <div className="container ">
                        <a className="navbar-brand" href="#">
                            <img src='/images/ojas.jfif'  />
                            Ojas
                        </a>
                        <button className='btn btn-info'>Sign In</button>
                        <button className='btn btn-primary'>Sign Out</button>
                    </div>
                </nav>
                <br/><br/>
              
                <div className='container'>
                  
                        
                    <div className="mb-3 row">
                        <label  className="col-sm-2 col-form-label">User Name</label>
                        <div className="col-sm-10">
                            <input type="text" className='form-control'  />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label  className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" class="form-control" />
                        </div>
                    </div>
                    </div>
                    <button className='btn btn-danger'>Login</button>
              
               
             
            </>
        )
    }
}

export default NavBar

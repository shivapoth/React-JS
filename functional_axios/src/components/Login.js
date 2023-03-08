import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ProductService from '../services/ProductService'

const Login = () => {
    const [username, setUname] = useState([]);
    const [password, setPass] = useState([]);
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    // const [uname,setUname] = set
    useEffect(() => {
        ProductService.getUsers().then(res => {
            setUsers(res.data)
        }, [])
    })
    let count = 0;
    const verify = (e) => {
        e.preventDefault();

        users.map((user, index) => {
            if (user.username == username && user.password == password) {
                count++;
                if (user.type == "admin") {
                    toast("Login success", { position: 'top-right' })
                    setTimeout(() => {
                        navigate("/list");
                    }, 1500);
                } else {
                    toast("Login success", { position: 'top-right' })
                    setTimeout(() => {
                        // navigate("/create")

                    }, 1500);
                }
            }
        }
        )
        if (count == 0) {
            toast.error("invalid username and password")
        }

        // users.filter(f => {
        //     let count = 0;

        //     if (f.username == username && f.password == password) {

        //         if (f.type == "admin") {
        //             window.location.href = '/list'
        //         }
        //         else if (f.type == "user") {
        //             window.location.href = "/create"
        //         }
        //         count++;
        //     }
        //     else {
        //         if (count == 0) {
        //             alert("Invalid Credentials")
        //         }
        //     }



        // })
    }
    return (
        <div className='container'>
            <div className='card'>
                <div className='card-header'>
                    <h1>Login</h1>
                    <div className='card-body'>
                        <input className='form-control' type="text" placeholder='Enter User Name' onChange={(e) => setUname(e.target.value)} /><br />
                        <input className='form-control' type="password" placeholder='Enter Password' onChange={(e) => setPass(e.target.value)} /><br />
                        <button className='btn btn-danger' onClick={(e) => { verify(e) }}>Login</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login

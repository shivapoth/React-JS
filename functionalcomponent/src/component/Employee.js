import React, { useState } from 'react'

export default function Employee() {
    const [eid, setEid] = useState();
    const [ename, setEname] = useState("");
    const [employees,setEmployees] = useState([]);
    const register = (e) => {
        e.preventDefault();
        let emp = {
            eid: eid,
            ename: ename
        }
        employees.push(emp)
        alert("The Employees are :" + "\t" + employees.length)
    }
    const Delete = (f) => {
            alert("Do you Want to delete ")
            const com=employees.slice();
            com.splice(f,1);
            setEmployees(com)
    }
    const Update = () => {
        alert("Do you Want to Update")
         let  emp={
            eid:eid,
            ename:ename
          }  
          employees.push(emp)
    }
    return (
 
        <div className="container ">
            <h1>Create  Employee</h1> 

            <form>

                <label className="form-label">Employee ID</label>
                <input
                    type="text" className="form-control "
                    placeholder="Enter Your Employee ID" value={eid}
                    onChange={e => setEid(e.target.value)} />
                <label className="form-label">Employee Name</label>
                <input type="text" className="form-control"
                    placeholder="Enter Your Employee Name" value={ename}
                    onChange={e => setEname(e.target.value)} /><br />
                <button type="button" className="btn btn-info"
                    onClick={register}>Submit</button>

            </form>
            <p>{eid} {ename}</p>
            <br />

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Employee Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((emp, i) =>
                        <tr>
                            <td>{emp.eid}</td>
                            <td>{emp.ename}</td>
                            <td>
                                <button className='btn btn-danger' onClick={Delete}>
                                    Delete </button>&emsp;
                                <button className='btn btn-success' onClick={Update}>
                                    Edit</button>
                            </td>
                        </tr>)}

                </tbody>
            </table>
        </div>
    )
}

import React, { useContext } from 'react'
import { DataContext } from './context/DataProvider';



// const Employees = ({employees}) => {
const Employees = () => {
    const { employees, setUsers } = useContext(DataContext);
    // console.log('here', employees);
    return (
        <div className="container mt-5">
            <table className="table1" class="table" align="center">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">City</th>
                        <th scope="col">Country</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Username</th>
                    </tr>
                </thead>
                {employees.map(function fn(employee) {
                    return (
                        <tbody>
                            <tr>
                                <th scope="row">{employee._id} </th>
                                <td>{employee.name}</td>
                                <td>{employee.address}</td>
                                <td>{employee.city}</td>
                                <td>{employee.country}</td>
                                <td>{employee.phone}</td>
                                <td>{employee.username}</td>                                
                            </tr>
                        </tbody>
                    );
                })}
            </table>
        </div>
    )
}

export default Employees;

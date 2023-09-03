import axios from "axios";
import {useState, useContext } from "react";
import './EmployeeCrud.css';

import { DataContext } from "./context/DataProvider";
import Employees from "./Employees";

function EmployeeCrud() {

    const [_id, setId] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [phone, setMobile] = useState("");
    const [username, setUsername] = useState("");

    const { employees, setUsers } = useContext(DataContext);

    async function save(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8000/user/create", {
                name: name,
                address: address,
                city: city,
                country: country,
                phone: phone,
                username: username
            });
            alert("Employee Registration Successful");
            setId("");
            setName("");
            setAddress("");
            setCity("");
            setCountry("");
            setMobile("");
            setUsername("")
        
        } catch (err) {
            alert("User Registration Failed");
        }
    }

    async function editEmployee(employees) {
        setName(employees.name);
        setAddress(employees.address);
        setCity(employees.city);
        setCountry(employees.country);
        setMobile(employees.phone);
        setUsername(employees.username);
        setId(employees._id);
    }

    async function DeleteEmployee(_id) {
        await axios.delete("http://localhost:8000/user/delete/" + _id);
        alert("Employee deleted Successfully");
 
    }

    async function update(event) {
        event.preventDefault();
        try {
            await axios.patch(
                "http://localhost:8000/user/update/" +
                employees.find((u) => u._id === _id)._id || _id,
                {
                    _id: _id,
                    name: name,
                    address: address,
                    city: city,
                    country: country,
                    phone: phone,
                    username: username,
                }
            );
            alert("Registration Updated!");
            setId("");
            setName("");
            setAddress("");
            setCity("");
            setCountry("");
            setMobile("");
            setUsername("")
     
        } catch (err) {
            alert(err);
        }
    }

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Add user</h1>
            <div class="container mt-4">
                <form>
                    <div class="form-group">
                        <input
                            type="text"
                            class="form-control"
                            id="_id"
                            hidden
                            value={_id}
                            onChange={(event) => {
                                setId(event.target.value);
                            }}
                        />
                        <label>Name</label>
                        <input
                            type="text"
                            class="form-control"
                            id="name"
                            value={name}
                            onChange={(event) => {
                                setName(event.target.value);
                            }}
                        />
                    </div>
                    <div class="form-group">
                        <label>Address</label>
                        <input
                            type="text"
                            class="form-control"
                            id="address"
                            value={address}
                            onChange={(event) => {
                                setAddress(event.target.value);
                            }}
                        />
                    </div>

                    <div class="form-group">
                        <label>City</label>
                        <input
                            type="text"
                            class="form-control"
                            id="city"
                            value={city}
                            onChange={(event) => {
                                setCity(event.target.value);
                            }}
                        />
                    </div>

                    <div class="form-group">
                        <label>Country</label>
                        <input
                            type="text"
                            class="form-control"
                            id="country"
                            value={country}
                            onChange={(e) => {
                                setCountry(e.target.value);
                            }}
                        />
                    </div>

                    <div class="form-group">
                        <label>Mobile</label>
                        <input
                            type="text"
                            class="form-control"
                            id="phone"
                            value={phone}
                            onChange={(event) => {
                                setMobile(event.target.value);
                            }}
                        />
                    </div>
                    <div class="form-group">
                        <label>Username</label>
                        <input
                            type="text"
                            class="form-control"
                            id="username"
                            value={username}
                            onChange={(event) => {
                                setUsername(event.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <button class="btn btn-primary mt-4" onClick={save}>
                            Register
                        </button> &nbsp;
                        <button class="btn btn-warning mt-4" onClick={update}>
                            Update
                        </button>
                    </div>
                </form>
            </div>
            <hr /><br /><br />

            <div className="container mb-2">
                <table className="table " align="center">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">City</th>
                            <th scope="col">Country</th>
                            <th scope="col">Mobile</th>
                            <th scope="col">Username</th>
                            <th scope="col"></th>
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
                                    <td>
                                        <button
                                            type="button"
                                            class="btn btn-warning"
                                            onClick={() => editEmployee(employee)}
                                        >
                                            Edit
                                        </button>
                                        &nbsp;&nbsp;
                                        <button
                                            type="button"
                                            class="btn btn-danger"
                                            onClick={() => DeleteEmployee(employee._id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        );
                    })}
                </table>
            </div>
        </div>
    );
}

export default EmployeeCrud;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../index.css';
import deleteEmployee from './Services';



const divStyle = {
  margin: '8% 8%',
};

function ListEmployee() {
  const [employees, setEmployees] = useState([]);
  const B_URL = process.env.REACT_APP_BACKEND_URL
console.log(B_URL)


  useEffect(() => {
    getEmployeeList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getEmployeeList = () => {
    axios.get(`${B_URL}/employees`)
      .then((response) => {
        console.log(response);
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onDeleteEmployee = async (empid) => {
    await deleteEmployee(empid);
    getEmployeeList();
  };

  return (
    <div style={divStyle}>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {employees && employees.map((employee, i) => (
            <tr key={employee._id}>
              <td>{i + 1}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>
                <Link to={`editemployee/${employee._id}`} className="btn btn-primary">Edit</Link>
              </td>
              <td>
                <Button onClick={() => onDeleteEmployee(employee._id)} bsStyle="danger">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ListEmployee;

'use client';
import React, { useState, useEffect } from "react";

const Employees = () => {
    const [employees, setEmployees] = useState([]);
    const [employeeId, setEmployeeId] = useState('');
    const [employeeDetails, setEmployeeDetails] = useState({});

    useEffect(() => {
        fetch('http://localhost:4000/employees')
        .then(data => data.json())
        .then(data => setEmployees(data))
    }, [])

    useEffect(() => {
        if (employeeId !== '') {
            fetch(`http://localhost:4000/employees/${employeeId}`)
            .then(res => res.json())
            .then(data => setEmployeeDetails(data));
        }
    }, [employeeId])

    const createEmployee = () => {
        fetch('http://localhost:4000/employees', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            employeeName: 'Craig Marduk',
            occupation: 'Wrestler',
            salary: 'Php 200,000.00/month'
          })
        });
      }

    return (
        <div>
            <ul>
                {employees.map(employee => {
                    return <li key={employee._id} 
                    style={{ border: 'white 1px solid'}}
                    onClick={() => setEmployeeId(employee._id)}>
                        {employee.employeeName}
                        {employeeId === employee._id &&
                        <span> | {employeeDetails.occupation} | {employeeDetails.salary}</span>
                        }
                    </li>
                })}
            </ul>
            <button onClick={createEmployee}>Input Employee</button>
        </div>
    )
}

export default Employees
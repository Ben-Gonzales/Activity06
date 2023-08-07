'use client';
import React, { useState, useEffect } from "react";

const Vehicles = () => {
    const [vehicles, setvehicles] = useState([]);
    const [vehicleId, setVehicleId] = useState('');
    const [vehicleDetails, setVehicleDetails] = useState({});

    useEffect(() => {
        fetch('http://localhost:4000/vehicles')
        .then(data => data.json())
        .then(data => setvehicles(data))
    }, [])

    useEffect(() => {
        if (vehicleId !== '') {
            fetch(`http://localhost:4000/vehicles/${vehicleId}`)
            .then(res => res.json())
            .then(data => setVehicleDetails(data));
        }
    }, [vehicleId])

    const createVehicle = () => {
        fetch('http://localhost:4000/vehicles', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            company: 'Mazda',
            yearModel: '2023',
            modelType: 'MX-5'
          })
        });
      }

    return (
        <div>
            <ul>
                {vehicles.map(vehicle => {
                    return <li key={vehicle._id} 
                    style={{ border: 'white 1px solid'}}
                    onClick={() => setVehicleId(vehicle._id)}>
                        {vehicle.company}
                        {vehicleId === vehicle._id &&
                        <span> | {vehicleDetails.yearModel} | {vehicleDetails.modelType}</span>
                        }
                    </li>
                })}
            </ul>
            <button onClick={createVehicle}>Input Vehicle</button>
        </div>
    )
}

export default Vehicles;
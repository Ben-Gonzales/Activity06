'use client';
import React, { useState, useEffect } from "react";

const Devices = () => {
    const [devices, setDevices] = useState([]);
    const [deviceId, setDeviceId] = useState ('');
    const [deviceDetails, setDeviceDetails] = useState({});

    useEffect(() => {
        fetch('http://localhost:4000/devices')
        .then(data => data.json())
        .then(data => setDevices(data))
    }, [])

    useEffect(() => {
        if (deviceId !== '') {
            fetch(`http://localhost:4000/devices/${deviceId}`)
            .then(res => res.json())
            .then(data => setDeviceDetails(data));
        }
    }, [deviceId])

    const createDevice = () => {
        fetch('http://localhost:4000/devices', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            brand: 'Samsung',
            deviceType: 'cellphone',
            model: 'Galaxy Note 3'
          })
        });
      }

      console.log(deviceDetails)
    
    return(
        <div>
            <ul>
                {devices.map(device => {
                    return <li key={device._id} 
                    style={{ border: 'white 1px solid'}}
                    onClick={() => setDeviceId(device._id)}>
                        {device.brand}
                        {deviceId === device._id &&
                        <span> | {deviceDetails.deviceType} | {deviceDetails.model}</span>
                        }
                    </li>
                })}
            </ul>
            <button onClick={createDevice}>Input Device</button>
        </div>
    )
}

export default Devices;
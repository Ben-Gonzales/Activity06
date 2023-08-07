'use client';
import React, { useState, useEffect } from "react";

const Stores = () => {
    const [stores, setStores] = useState([]);
    const [storeId, setStoreId] = useState('');
    const [storeDetails, setStoreDetails] = useState({});

    useEffect(() => {
        fetch('http://localhost:4000/stores')
        .then(data => data.json())
        .then(data => setStores(data))
    }, [])

    useEffect(() => {
        if (storeId !== '') {
            fetch(`http://localhost:4000/stores/${storeId}`)
            .then(res => res.json())
            .then(data => setStoreDetails(data));
        }
    }, [storeId])

    const createStore = () => {
        fetch('http://localhost:4000/stores', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            storeName: 'KOMORO',
            location: 'Las Piñas, Metro Manila',
            openHours: '7:00 AM',
            closingHours: '10:00 PM',
            businessDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
          })
        });
      }
    return (
        <div>
            <ul>
                {stores.map(store => {
                    return <li key={store._id} 
                    style={{ border: 'white 1px solid'}}
                    onClick={() => setStoreId(store._id)}>
                        {store.storeName}
                        {storeId === store._id &&
                        <span> | {storeDetails.location} | {storeDetails.openHours} | {storeDetails.closingHours} | {storeDetails.businessDays}</span>
                        }
                    </li>
                })}
            </ul>
            <button onClick={createStore}>Input Store</button>
        </div>
    )
}

export default Stores;
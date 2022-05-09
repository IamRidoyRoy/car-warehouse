import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory/Inventory';
import './Inventories.css'
const Inventories = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/car')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    return (
        <div id='cars' className='container'>
            <h1 className='car mt-2'>Car Collections</h1>
            <div className='car-container'>
                {
                    cars.slice(1, 7).map(car => <Inventory
                        key={car._id}
                        car={car}
                    ></Inventory>)
                }
            </div>
        </div >
    );
};

export default Inventories;
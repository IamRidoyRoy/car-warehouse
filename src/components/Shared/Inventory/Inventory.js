import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventory.css'
const Inventory = ({ car }) => {
    const { _id, name, price, image, description, quantity, supplier_name } = car;
    const navigate = useNavigate();
    const navigateToServiceDetails = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='sigle-car'>
            <img src={image} alt="" />
            <h2>Name : {name}</h2>
            <p>Price: {price}, Quantity: {quantity}</p>
            <h6>Supplier Name: {supplier_name}</h6>
            <p>Description : {description} </p>
            <button onClick={() => navigateToServiceDetails(_id)} className='btn btn-primary'>Stock Update</button>

        </div>
    );
};

export default Inventory;
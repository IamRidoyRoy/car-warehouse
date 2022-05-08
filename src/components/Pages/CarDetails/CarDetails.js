import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const CarDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [carware, setcarware] = useState({});
    const [delivered, setDelivered] = useState();
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setcarware(data))
    }, [])

    const navigateToDelivery = id => {
        navigate(`/inventory/${id}`);
        console.log("Post is deleting");
        const url = `http://localhost:5000/inventory/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const remaining = delivered.filter(service => service._id !== id);
                setDelivered(remaining)
            })
    }
    return (
        <div>
            <div className='sigle-car container mt-5'>
                <img src={carware.image} alt="" />
                <h2>Name : {carware.name}</h2>
                <p>Price: {carware.price}, Quantity: {carware.quantity}, <span className="text-success">Sold: 00</span></p>
                <h6>Supplier Name: {carware.supplier_name}</h6>
                <p>Description : {carware.description} </p>
                <button onClick={() => navigateToDelivery(id)} className='btn btn-primary'>Delivered</button>
                <Link className='ms-2' to='/updatequantity'><button className='btn btn-primary'>Update Quantity</button></Link>

            </div>

        </div>
    );
};

export default CarDetails;
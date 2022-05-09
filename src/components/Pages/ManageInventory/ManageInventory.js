import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManageInventory = () => {
    const [caritems, setCarItems] = useState([]);

    useEffect(() => {
        fetch('https://infinite-fortress-97398.herokuapp.com/car')
            .then(res => res.json())
            .then(data => setCarItems(data))
    }, []);
    const handleDeleteButton = id => {
        const proceed = window.confirm("Are you sure to delete?")
        if (proceed) {
            console.log("Post is deleting");
            const url = `https://infinite-fortress-97398.herokuapp.com/inventory/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = caritems.filter(car => car._id !== id);
                    setCarItems(remaining)
                })
        }
    }

    return (
        <div className='w-50 mx-auto text-center mt-5'>
            <Link className='ms-2' to='/addnewitem'><button className='btn btn-primary'>Add new item</button></Link>
            <h2>This is from Manage user</h2>
            <div>
                {
                    caritems.map(car => <div key={car._id}>

                        <h5>Name : {car.name} <button onClick={() => handleDeleteButton(car._id)}>Delete</button> </h5>

                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageInventory;
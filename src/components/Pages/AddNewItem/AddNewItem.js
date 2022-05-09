import React from 'react';
import { useForm } from "react-hook-form";
const AddNewItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `https://infinite-fortress-97398.herokuapp.com/car`;
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => console.log(result))


    };
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center mt-5 mb-4'>Add New Item</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2 ' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='Supplier Name' type="text" {...register("supplier_name")} />
                <input className='mb-2' placeholder='Email' type="email" {...register("email")} />
                <textarea className='mb-2' placeholder='Please write a description' {...register("description")} />
                <input className='mb-2' placeholder='Photo Url' type="text" {...register("image")} />
                <input className='text-center mb-2 btn btn-success' type="submit" value='Add New Car' />
            </form>
        </div>
    );
};

export default AddNewItem;
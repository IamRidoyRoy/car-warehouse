import React from 'react';

const UpdateQuantity = () => {
    return (
        <div>
            <form className='text-center mt-5' action="">
                <input type="text" name="quantity" placeholder='quantity' id="" />
                <input className='ms-2' type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateQuantity;
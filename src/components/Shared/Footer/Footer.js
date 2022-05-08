import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className='text-center mt-5'>
                <p>&copy; Car Warehouse Services {(new Date().getFullYear())} </p>
            </footer>
        </div>
    );
};

export default Footer;
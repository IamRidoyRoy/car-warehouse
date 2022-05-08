import React from 'react';
import Iframe from 'react-iframe';

const Contact = () => {
    return (
        <div className='container'>
            <h2 className='text-center mt-5 mb-4'>Contact</h2>
            <div className='d-flex'>
                <div>
                    <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29212.42968188159!2d90.4233999084903!3d23.763289132581246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8783ab9882f%3A0x50f429f46d937f3c!2sRampura%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1652016089481!5m2!1sen!2sbd" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
                </div>
                <div className='text-center ms-5 mt-5'>
                    <p>Email: carwarehouse@gmail.com</p>
                    <p>Phone: 01779714777</p>
                    <p>Location: West Hazipara, Rampura, Dhaka, Bangladesh</p>
                </div>
            </div>
        </div >
    );
};

export default Contact;
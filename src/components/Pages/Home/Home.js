import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import car1 from '../../../images/car1.jpg'
import car2 from '../../../images/car2.jpg'
import car3 from '../../../images/car3.jpg'
import Footer from '../../Shared/Footer/Footer';
import Contact from '../../Shared/Contact/Contact';
import CarBlogs from '../../Shared/CarBlogs/CarBlogs';
import Inventories from '../../Shared/Inventories/Inventories';
import { Link } from 'react-router-dom';
import './Home.css'
const Home = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <div>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img height={500}
                            className="d-block w-100"
                            src={car1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>White car</h3>
                            <p>This is a top white in the word</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img height={500}
                            className="d-block w-100"
                            src={car2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Silver color car</h3>
                            <p>This is a top Silver color in the word</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img height={500}
                            className="d-block w-100"
                            src={car3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>White glow car</h3>
                            <p>This is a top white in the word</p>
                        </Carousel.Caption>

                    </Carousel.Item>
                </Carousel>
            </div>

            <div>
                <Inventories></Inventories>
            </div>
            <div className='text-center mt-5 manageInventory'>
                <Link to='/manageinventory'>Manage Inventory</Link>
            </div>
            <CarBlogs></CarBlogs>
            <Contact></Contact>
            <Footer></Footer>
        </div >
    );
};

export default Home;
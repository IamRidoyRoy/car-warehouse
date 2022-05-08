import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Header from '../../Shared/Header/Header';
import car1 from '../../../images/car1.jpg'
import car2 from '../../../images/car2.jpg'
import car3 from '../../../images/car3.jpg'
const Home = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <Header></Header>

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
        </div >
    );
};

export default Home;
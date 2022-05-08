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


        </div>
    );
};

export default Home;
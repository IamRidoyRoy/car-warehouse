import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import car3 from '../../../images/car3.jpg'
const Blogs = () => {
    return (
        <div>
            <h2 className='text-center'>Car Blogs</h2>
            <div className='container'>
                <Row xs={1} md={2} className="g-4">
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={car3} />
                                <Card.Body>
                                    <Card.Title>New Arival</Card.Title>
                                    <Card.Text>
                                        This is a latest car. The whole feature of this car is amazing. A person wo want to buy a luxrious car this car for him!...
                                        <a href="/#">Read More</a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default Blogs;
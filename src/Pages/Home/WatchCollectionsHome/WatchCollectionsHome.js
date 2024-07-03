
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link, NavLink } from 'react-router-dom';

import "./WatchCollectionsHome.css";

const WatchCollectionsHome = () => {
    const [weatchCollectin, setWeatchCollectin] = useState([]);


    useEffect(() => {
        fetch('https://moment-count-backend.vercel.app/watch/best-selling/')
            .then(res => res.json())
            .then(data => setWeatchCollectin(data))
    }, [])
    return (
        <Container>
            <h1 className="my-5">BEST SELLING</h1>
            <Row xs={1} md={3} className="g-3">
                {weatchCollectin.slice(0, 6).map(watch => (
                    <Col className="watch-collection-container">
                        <Card style={{ height: "20rem" }} className="border-0">
                            <div className="card-watchcollection">
                                <div style={{ background: `url('${watch?.frontImg}') no-repeat center center`, backgroundSize: 'cover', backgroundPosition: 'center' }} class="card-front"></div>
                                <div>
                                    <div style={{ background: `url('${watch?.backImg}') no-repeat center center`, backgroundSize: 'cover', backgroundPosition: 'center' }} class="card-back">
                                        <div class="social-icons">
                                            <NavLink as={Link} to={`order/${watch?._id}`} className="social-icon-btn"> <i class="fas fa-shopping-bag "></i></NavLink>
                                            <button  className="social-icon-btn border-0"> <i class="fas fa-heart"></i></button>
                                            <button className="social-icon-btn border-0"> <i class="fas fa-search"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <Card className="border-0 ">
                            <Card.Body>
                                <Card.Title>{watch?.brand}</Card.Title>
                                <Card.Text className="mb-1">
                                    {watch?.title}
                                </Card.Text>
                                <Card.Text className="mb-1">    
                                    ${watch?.price}
                                </Card.Text>
                                <Rating
                                    initialRating={watch?.rating}
                                    readonly
                                    emptySymbol="far fa-star"
                                    fullSymbol="fas fa-star icon-color"
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default WatchCollectionsHome;
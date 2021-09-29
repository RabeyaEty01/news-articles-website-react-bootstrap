import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';

const News = (props) => {
    const { title, description, urlToImage, author } = props.news;
    return (
        <Col>
            <Card border="primary">

                {/* <Card.Img variant="top" src={urlToImage} /> */}

                <Image variant="top" src={urlToImage} thumbnail></Image>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                        <p>Written by: {author}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default News;
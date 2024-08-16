import React, { useEffect } from 'react'
import { Container } from "react-bootstrap";
import { useState } from 'react';
import axios from 'axios';
import { Row, Col, Card } from "react-bootstrap";


function HomeScreen() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function fetchproducts() {
            const { data } = await axios.get('/api/products/')
            setProducts(data)

        }
        fetchproducts()
    }, [])

    return (
        <>
            <Container>
                <br></br>
                <h1>Products</h1>
                <Row>
                    {products.map((product) => (
                        <Col key={product._id} sm={12} md={6} ld={4} xl={3}>
                            <h3> {product.productname}</h3>
                            <Card className='my-3 p-3 rounded'>
                                <img src={product.image} alt=''></img></Card>
                            <h6> {product.price}</h6>
                            <h6> {product.productinfo}</h6>
                        </Col>
                    ))}
                </Row>



            </Container>

        </>
    )
}

export default HomeScreen
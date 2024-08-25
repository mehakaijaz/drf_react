import React, { useEffect } from 'react'
import { Container } from "react-bootstrap";
import { useState } from 'react';
import axios from 'axios';
import { Row, Col, Card } from "react-bootstrap";
import Product from '../Product';
import { listProducts } from '../../actions/productsActions';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader';
import Message from '../Message';



function HomeScreen() {
    const dispatch = useDispatch()
    const productsList = useSelector((state) => state.productsList);
    //const [products, setProducts] = useState([])
    const { error, loading, products } = productsList

    useEffect(() => {
        // async function fetchproducts() {
        //     const { data } = await axios.get('/api/products/')
        //     setProducts(data)

        // }
        // fetchproducts()
        dispatch(listProducts())
    }, [dispatch])

    return (
        <>
            <Container>
                <br></br>
                <h1>Products</h1>
                {/* <Row>
                    {products.map((product) => (
                        <Col key={product._id} sm={12} md={6} ld={4} xl={3}>
                            <Product product={product} />
                        </Col>

                    ))}
                </Row> */}
                {
                    loading ? (<h2><Loader></Loader></h2>) : error ? (
                        <Message variant='danger'>{error}</Message>
                    ) :
                        <Row>
                            {products.map((product) => (
                                <Col key={product._id} sm={12} md={6} ld={4} xl={3}>
                                    <Product product={product} />
                                </Col>

                            ))}
                        </Row>
                }


            </Container>

        </>
    )
}

export default HomeScreen;
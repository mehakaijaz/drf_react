import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, Container, ListGroupItem } from 'react-bootstrap'
import Rating from '../Rating';
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails } from '../../actions/productsActions';
import Loader from '../Loader';
import Message from '../Message';

function ProductScreen({ params }) {
    const { id } = useParams()
    const dispatch = useDispatch()
    const productsDetails = useSelector((state) => state.productsDetails);
    const { error, loading, product } = productsDetails

    //const [product, setProducts] = useState([]);
    useEffect(() => {
        // async function fetchproducts() {
        //     const { data } = await axios.get(`/api/product/${id}`);
        //     setProducts(data);
        // }
        // fetchproducts();

        dispatch(listProductDetails(id))
    }, [dispatch, params]);
    return (
        <Container>
            <div><Link to="/" className='btn btn-dark my-3'> Go Back</Link>
                {loading ? (<h1><Loader></Loader></h1>) : error ? (<Message variant='danger'>{error}</Message>) :
                    (<Row>
                        <Col md={6}>
                            <Image src={product.image} alt={product.name} fluid />
                        </Col>

                        <Col md={3}>
                            <ListGroup variant='flush'>
                                <ListGroupItem>
                                    <h3>{product.productname}</h3>
                                </ListGroupItem>

                                <ListGroupItem>
                                    <Rating
                                        value={product.rating}
                                        text={`${product.numReviews} reviews`}
                                        color={"#f8e825"} />

                                </ListGroupItem>
                                <ListGroupItem>Price : rs.{product.price}</ListGroupItem>
                                <ListGroupItem>Description : {product.description}</ListGroupItem>
                                <ListGroupItem>Information : {product.info}</ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <ListGroup variant="flush">
                                    <ListGroupItem>
                                        <Row>
                                            <Col>price :</Col>
                                            <Col><strong>rs.{product.price}</strong></Col>
                                        </Row>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <Row>
                                            <Col>Status :</Col>
                                            <Col>{product.stock > 0 ? "in stock" : "out of stock"}</Col>
                                        </Row>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <Button className='btn-black' disabled={product.countInStock === 0}
                                            type='button'>Add me</Button>
                                    </ListGroupItem>
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>)}
            </div>
        </Container >
    )
}

export default ProductScreen;
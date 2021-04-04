import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

const Product = (props) => {
    return (
        <Row>
            <Col>
                <div className="aboutProduct" style={{ marginTop: "10px" }}>
                    <Card className="card flex-row flex-wrap">
                        <Card.Header as="h5">Mesin Cuci</Card.Header>
                        <Card.Img variant="top" src={props.gambar} alt="productPhoto" style={{width:"25%"}}/>
                        <Card.Body>
                            <Card.Title>{props.nama}</Card.Title>
                            <Card.Text>
                            ID: {props.id} <br></br>
                            Harga: Rp. {props.harga} <br></br>
                            Stok: {props.stok}
                            </Card.Text>
                            <Button variant="primary" onClick={()=>props.addToCart(props.id)} >Add to Cart</Button>
                        </Card.Body>
                    </Card>
                </div>
            </Col>
        </Row>

    )
}

export default Product;
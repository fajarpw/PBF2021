import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

const Cart = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Row>
            <Col>
                <div className="cartCard" style={{ marginTop: "10px" }}>
                    <Card className="card flex-row flex-wrap">
                        <Card.Header as="h5">Cart</Card.Header>
                        <Card.Img variant="top" src={props.gambar} alt="productPhoto" style={{ width: "25%" }} />
                        <Card.Body>
                            <Card.Title>{props.nama}</Card.Title>
                            <Card.Text>
                                ID: {props.id} <br></br>
                            Jumlah: {props.jumlah} <br></br>
                            Harga: Rp.  {props.total}<br></br>
                            </Card.Text>
                            <Button variant="primary" onClick={() => props.tambahJumlah(props.id)}>Tambah</Button>
                            <Button variant="warning" onClick={() => props.kurangiJumlah(props.id)} style={{ marginLeft: "10px" }}>Kurang</Button>
                            <Button variant="danger" style={{ marginLeft: "10px" }} onClick={handleShow}>Hapus</Button>

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Hapus Cart?</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Yakin ingin hapus produk dari cart?</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Batal
                                    </Button>
                                    <Button variant="danger" onClick={() => props.hapusCart(props.id)}>
                                        Hapus
                                    </Button>
                                </Modal.Footer>
                            </Modal>

                        </Card.Body>
                    </Card>
                </div>
            </Col>
        </Row>

    )
}

export default Cart;
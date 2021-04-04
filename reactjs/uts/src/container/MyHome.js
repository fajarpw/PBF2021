import React from 'react'
import './css/MyHome.css'
import MyLogo from '../image/logo.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MyHome() {
    return (
        <Row>
            <Col>
                <div className='my-home'>
                    <img className="logo" src={MyLogo} alt="logo" />
                    <p>
                        MyShopp is your brand new online shop. <br></br>
                Provide you only with good quality product.
            </p>
                </div>
            </Col>
        </Row>

    )
}

export default MyHome;
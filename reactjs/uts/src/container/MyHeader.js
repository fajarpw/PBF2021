import React from 'react'
import './css/MyHeader.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap'

function MyHeader() {
    return (
        <div className='my-header'>
            <Navbar bg="light" varian="light">
                <Nav>
                    <LinkContainer to="/">
                        <Nav.Link>MyShopp</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Nav>
                    <LinkContainer to="/product">
                        <Nav.Link>Product</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Nav>
                    <LinkContainer to="/about">
                        <Nav.Link>About</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Nav>
                    <LinkContainer to="/cart">
                        <Nav.Link>Cart</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar>
        </div>
    )
}

export default MyHeader;
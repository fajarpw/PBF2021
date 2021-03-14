import React from 'react';
import './myShop.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup'
import { LinkContainer } from 'react-router-bootstrap';
import Shoe from './shoe.jpg';
import MyLogo from './logo.png';
import Men from './men.jpg';
import Women from './women.jpg';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useParams,
    useRouteMatch,
    useHistory,
    useLocation
} from "react-router-dom"

function MyShop() {
    return (
        <Router>
            <div>
                <Switch>
                    <AuthButton />
                </Switch>
                <Container fluid>
                    <Row>
                        <Col>
                            <MyTitle />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <MyNavBar />
                        </Col>
                    </Row>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/category">
                            <Category />
                        </Route>
                        <Route path="/product">
                            <Product />
                        </Route>
                        <Route path="/login">
                            <LoginPage />
                        </Route>
                        <PrivateRoute path="/profile">
                            <Profile />
                        </PrivateRoute>
                    </Switch>
                </Container>
            </div>
        </Router>
    );
}
const fakeAuth = {
    isAuthencticated: false,
    authenticated(cb) {
        fakeAuth.isAuthencticated = true;
        setTimeout(cb, 100);
    },
    signout(cb) {
        fakeAuth.isAuthencticated = false;
        setTimeout(cb, 100);
    }
};
function AuthButton() {
    let history = useHistory();
    return fakeAuth.isAuthencticated ? (
        
        <p>
            Welcome!{" "}
            <button
                onClick={() => {
                    fakeAuth.signout(() => history.push("/"));
                }}>Sign Out</button>
        </p>
    ) : (
        <p>
            You are not logged in.
        </p>
    );
}

function PrivateRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                fakeAuth.isAuthenticated ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}
function Profile() {
    return (
        <h3>Profile Page</h3>
    );
}
function LoginPage() {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    let login = () => {
        fakeAuth.authenticated(() => {
            history.replace(from);
        });
    };
    return (
        <div>
            <p>You must log in to view the page at {from.pathname}</p>
            <button onClick={login}>Login</button>
        </div>
    );
}
function MyTitle() {
    return (
        <div className="title_bar">
            <h3 className="title_text">MyShop</h3>
            <h6 className="title_subtagline">-MyShop is your shop-</h6>
        </div>
    );
}

function MyNavBar() {
    return (
        <div className="nav_bar">
            <Navbar bg="dark" variant="dark">
                <Nav>
                    <LinkContainer to="/">
                        <Nav.Link>MyShop</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/category">
                        <Nav.Link>Category</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/product">
                        <Nav.Link>Product</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Nav className="justify-content-end" style={{ width: "75%" }}>
                    <LinkContainer to="/profile">
                        <Nav.Link>Profile</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar>
        </div>
    );
}

function Home() {
    return (
        <div className="myshop_home">
            <Row>
                <Col>
                    <img className="logo" src={MyLogo} alt="logo" />
                    <div className="home_text">
                        <h2>MyShop</h2>
                        <p>MyShop is your brand new clothing online shop. <br></br>
                            Provide you only with good quality product</p>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

function Category() {
    let { path, url } = useRouteMatch();
    return (
        <div className="category">
            <Row>
                <Col>
                    <Card style={{ width: '100%' }}>
                        <Card.Header>Category</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Link to={`${url}/Sepatu Pria`}>Men</Link>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Link to={`${url}/Sepatu Wanita`}>Women</Link>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
            <Switch>
                <Route path={`${path}/:categoryId`}>
                    <CategoryItem />
                </Route>
            </Switch>
        </div>
    );
}
function CategoryItem() {
    let { categoryId } = useParams();
    return (
        <div className="category_item">
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Text>
                                <h4>{categoryId}</h4>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>

    );
}
function Product() {
    return (
        <div className="product">
            <Col>
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={Shoe} />
                    <Card.Body>
                        <Card.Title>Shoe 1</Card.Title>
                        <hr></hr>
                        <Card.Text>
                            Rp 100.000,00 <br></br>
                            Get ready to conquer the world.
                            </Card.Text>
                        <hr></hr>
                        <Button variant="primary" block>Buy</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
}
export default MyShop;
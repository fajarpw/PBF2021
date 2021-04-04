import React from 'react';
import MyHome from './container/MyHome';
import MyTitle from './container/MyTitle';
import MyHeader from './container/MyHeader';
import MyProduct from './container/MyProduct';
import MyAbout from './container/MyAbout';
import MyCart from './container/MyCart';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
} from "react-router-dom";

function MyShop() {
    return (
        <Router>
            <div>
                <Container fluid>
                    <Row>
                        <Col>
                            <div className="title">
                                <MyTitle></MyTitle>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="header">
                                <MyHeader></MyHeader>
                            </div>
                        </Col>
                    </Row>

                    <Switch>
                        <Route exact path="/">
                            <MyHome />
                        </Route>
                        <Route path="/product">
                            <MyProduct />
                        </Route>
                        <Route path="/about">
                            <MyAbout />
                        </Route>
                        <Route path="/cart">
                            <MyCart />
                        </Route>
                    </Switch>
                </Container>
            </div>
        </Router>

    );
}

export default MyShop;
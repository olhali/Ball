import React from 'react';
import style from '../src/css_modules/ball.module.css';
import Operation from "./components/Operation";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Ball from "./components/Ball";

function App() {
        return (
            <div className='m-1'>
                <Container>
                <Row className={style.box}>
                    <Col xs={{ span: 8, offset: 2 }}>
                        <Ball/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Operation/>
                    </Col>
                </Row>
            </Container>
            </div>
        );
    }

export default App;
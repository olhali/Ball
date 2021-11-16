import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import style from '../css_modules/operation.module.css';
import {useDispatch} from "react-redux";
import {changeBounce, changeColor, changingColors} from "../features/operationSlice";
import {colorConstants} from '../utils/Constants';

const Operation = () => {
    const dispatch = useDispatch();

    return (
        <div className='p-2'>
            <Container>
            <Row xs={2} >
                <Col>
                    <Button className={style.btnBounce} variant="secondary" onClick={(e) => {dispatch(changeBounce())}}>Bounce/ Stop</Button>
                </Col>
                <Col>
                    <Button className={style.btnGradient} variant="light" onClick={(e) => {dispatch(changingColors())}}>Changing colors</Button>
                </Col>
            </Row>
            <Row className='pt-2' xs={3}>
                <Col>
                    <Button className={style.btnRed} variant="danger" onClick={(e) => {dispatch(changeColor(colorConstants.red))}}></Button>
                </Col>
                <Col>
                    <Button className={style.btnGreen} variant="success" onClick={(e) => {dispatch(changeColor(colorConstants.green))}}></Button>
                </Col>
                <Col>
                    <Button className={style.btnBlue} variant="primary" onClick={(e) => {dispatch(changeColor(colorConstants.blue))}}></Button>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Operation;
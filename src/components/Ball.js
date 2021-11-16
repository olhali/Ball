import React, {Component} from 'react';
import style from "../css_modules/ball.module.css";
import {useSelector} from "react-redux";
import {colorConstants} from '../utils/Constants';

const Ball = () => {
    const {color, animationState} = useSelector(state => state.operation);

    const colorStyle = (color) => {
        switch (color) {
            case colorConstants.green:
                return style.green;
            case colorConstants.blue:
                return style.blue;
            case colorConstants.red:
                return style.red;
            default:
                return '';
        }
    };

    const animationClass = (animationState) => {
        switch (animationState) {
            case 'bouncing':
                return style.bouncing;
            case 'changingColors':
                return style.changingColors;
            case 'bouncingAndChangingColors':
                return style.bouncingAndChangingColors;
            case 'noBoucingAndNoChangingColors':
                return style.noBoucingAndNoChangingColors;
            default:
                return '';
        }
    };

    return (
        <div className={`${colorStyle(color)} ${style.ball} ${animationClass(animationState)}`}>
        </div>
    );
};

export default Ball;
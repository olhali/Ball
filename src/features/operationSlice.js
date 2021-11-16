import {createSlice} from "@reduxjs/toolkit";


const updateState = (state) => {
    if(state.bounceAnimation && state.changingColorsAnimation){
        state.animationState = 'bouncingAndChangingColors'
    }
    if(state.bounceAnimation===true && state.changingColorsAnimation===false){
        state.animationState = 'bouncing'
    }
    if(state.bounceAnimation===false && state.changingColorsAnimation===true){
        state.animationState = 'changingColors'
    }
    if(state.bounceAnimation===false && state.changingColorsAnimation===false){
        state.animationState = 'noBoucingAndNoChangingColors'
    }
};

export const operationSlice = createSlice({
    name: 'operation',
    initialState: {
        color: '',
        bounceAnimation: false,
        changingColorsAnimation: false,
        animationState: ''
    },
    reducers: {
        changeColor: (state, action) => {
            state.changingColorsAnimation = false;
            updateState(state);
            state.color = action.payload;
        },
        changeBounce: (state) => {
            state.bounceAnimation = !state.bounceAnimation;
            updateState(state);
        },
        changingColors: (state) => {
            state.changingColorsAnimation = !state.changingColorsAnimation;
            state.color = '';
            updateState(state);
        }
    }
});

export const {changeColor, changeBounce,changingColors} = operationSlice.actions;
export default operationSlice.reducer;